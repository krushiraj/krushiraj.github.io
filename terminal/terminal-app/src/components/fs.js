/*eslint-disable*/

const fs = {
    '/': {
        type: 'directory',
        data:{
            'folder1' : {
                type: 'directory',
                data: {
                    'folder2' : {
                        type: 'directory',
                        data: {}
                    },
                    'file2': {
                        type: 'file',
                        data: 'Hello from file2.'
                    }
                }
            },
            'file1' : {
                type: 'file',
                data: 'Hello from file1.'
            }
        }
    }
}

class Node {
    constructor({name, type, parent, data, path}) {
        this.name = name
        this.type = type;
        this.parent = parent;
        this.path = path;
        this.data = data;
    }
}

export default class FSTree {
    constructor() {
        this.fsRoot = {};
        
        this.buildFsTree(fs, undefined);

        this.currDir = this.fsRoot;
        this._currDir = this.fsRoot;
        this.currFile = undefined;
        this._currFile = undefined;
    }

    insertNode(treeRoot, node, path) {
        if (!Object.getOwnPropertyNames(treeRoot).length) {
            treeRoot = node;
        } else {
            if(!treeRoot.data[path[0]]) {
                treeRoot.data[path[0]] = this.insertNode(
                    {}, node, path.slice(1)
                );
            }
            else {
                this.insertNode(
                    treeRoot.data[path[0]], 
                    node, 
                    path.slice(1)
                );
            }
        }
        return treeRoot;
    }

    buildFsTree(dirNode, _parent) {
        for(let key in dirNode) {
            const name = key;
            const path = _parent ? (_parent.path != '/' ? 
                (_parent.path + '/' + name) : 
                _parent.path + name
            ) : name;
            const parent = _parent;
            const type = dirNode[key].type;
            const data = type == 'file' ? dirNode[key].data : {};
            const node = new Node({name, path, parent, type, data});
            this.fsRoot = this.insertNode(this.fsRoot, node, path.split('/').filter((arg)=>arg!=""));
            if(type != 'file') 
                this.buildFsTree(dirNode[key].data, node);
        }
    }

    changeDirectory() {
        this.currDir = this._currDir;
        this.currFile = this._currFile;
    }

    handleBaseEdgeConditions(path) {
        this._currDir = this.currDir;
        if(path == '/') {
            this._currDir = this.fsRoot;
            return this._currDir;
        } else if(path == '.') {
            return this._currDir;
        } else if (this._currDir.name == '/' && path == '..') {
            return {error: `You are already in root directory. Cannot go beyond.`};
        }
    }

    getPathTokens(path) {
        return path.replace(
            /\.\./g, 'parent'
        ).match(/([a-zA-z0-9_.()`!@#$%^&*\-=+,<>?'";|:\[\]{}]+)|([\/]+)/g);
    }

    getNodeFromToken(token) {
        if (token == '/') {
            return {type:'continue'};
        } else if (
                (this._currDir.hasOwnProperty('data') && this._currDir.data.hasOwnProperty(token)) || 
                this._currDir.hasOwnProperty('parent')
            ) {
            return token == 'parent' ? this._currDir.parent : this._currDir.data[token];
        } else {
            const at = pathTokens.slice(0,index-1).join('');
            return {
                type: 'error',
                error: `ENOENT: Error no such file or directory found at ${at}`.replace(/parent/g, '..')
            }
        }
    }

    handleFileEnt(nextToken, temp) {
        if (nextToken == '/') {
            return {
                type: 'error',
                error: `A file should not be followed by '/' as it can't be explored.`
            }
        } else {
            this._currFile = temp; 
        }
    }

    getEntFromPath(path, cd) {
        console.log(this);
        let temp = this.handleBaseEdgeConditions(path);
        if (temp) return temp;
        const pathTokens = this.getPathTokens(path);
        for(let index in pathTokens) {
            let token = pathTokens[index];
            temp = this.getNodeFromToken(token);
            switch (temp.type) {
                case 'error': 
                    return temp;
                case 'file': 
                    this.handleFileEnt(pathTokens[index+1], temp);
                    break;
                case 'directory':
                    this._currDir = temp;
                    break;
                case 'continue':
                    continue;
            }
            if (index == pathTokens.length - 1) {
                if(cd) {
                    this.changeDirectory();
                }
                console.log(this);
                return temp.type == 'file' ? this._currFile : this._currDir;
            }
        }
    }
}