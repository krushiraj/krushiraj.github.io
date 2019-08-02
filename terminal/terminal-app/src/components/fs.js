/*eslint-disable*/

// export 
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

function Node({name, type, parent, data, path}) {
    this.name = name
    this.type = type;
    this.parent = parent;
    this.path = path;
    this.data = data;
}

this.fsRoot = {};

const insertNode = (treeRoot, node, path) => {
    if (!Object.getOwnPropertyNames(treeRoot).length) {
        treeRoot = node;
    } else {
        if(!treeRoot.data[path[0]]) {
            treeRoot.data[path[0]] = insertNode(
                {}, node, path.slice(1)
            );
        }
        else {
            insertNode(
                treeRoot.data[path[0]], 
                node, 
                path.slice(1)
            );
        }
    }
    return treeRoot;
}

//export
const buildFsTree = (dirNode, _parent) => {
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

this.buildFsTree = buildFsTree.bind(this);
this.insertNode = insertNode.bind(this);

this.buildFsTree(fs, undefined);

//export
const getEntFromPath = (path) => {
    const pathTokens = path.match(/([a-zA-z0-9_.()`!@#$%^&*\-=+,<>?'";|:\[\]{}]+)|([\/]+)/g);
    let currFile, currDir = fs, temp;
    for(let index in pathTokens) {
        let token = pathTokens[index];
        if (token == '/') {
            continue;
        } else {
            temp = currDir.data[token];
            if (!temp) {
                const at = pathTokens.slice(0,index-1).join('');
                return {
                    error: `ENOENT: Error no such file or directory found at ${at}`
                }
            }
        }
        if(temp.type == 'file') {
            if (pathTokens[index+1] == '/') {
                return {
                    error: `A file should not be followed by '/' as it can't be explored.`
                }
            } else {
                currFile = temp; 
            }
        } else if(temp.type == 'directory') {
            currDir = temp;
        }
        if (index == pathTokens.length - 1) {
            return temp.type == 'file' ? currFile : currDir;
        }
    }
};