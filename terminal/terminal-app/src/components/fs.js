/*eslint-disable*/

export const fs = {
    data:{
        folder1 : {
            type: 'directory',
            data: {
                folder2 : {
                    type: 'directory',
                    data: {}
                },
                file2: {
                    type: 'file',
                    data: 'Hello from file2.'
                }
            }
        },
        file1 : {
            type: 'file',
            data: 'Hello from file1.'
        }
    }
}

export const getEntFromPath = (path) => {
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