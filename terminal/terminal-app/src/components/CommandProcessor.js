/*eslint-disable*/
import FSTree from './fs.js';
import TerminalReadOnly from './TerminalReadOnly.vue';
import TerminalInput from './TerminalInput.vue';

let currentState = {};
const fsTree = new FSTree();

const compare = (actual, expected) => {
    return actual == expected || expected.indexOf(actual) != -1;
}

const checkOptKey = (str, ref, context) => {
    if(context.hasOwnProperty('options')) {
        context['options'] += 1;
    } else {
        context['options'] = 1;
    }
    const optLen = (context['options'] <= ref['options'].length);
    const isValidOpt = compare(str.slice(2), ref['options']);
    const check = isValidOpt && optLen;
    if(!check) {
        const msg = `'${str}' is not a valid option for '${ref.command}' command.`;
        context.message = msg;
    }
    return check;
}

const checkArg = (ref, context) => {
    if(context.hasOwnProperty('args')) {
        context['args'] += 1;
    } else {
        context['args'] = 1;
    }
    const check = context['args'] <= ref['args'];
    if(!check) {
        const msg = `Maximum number arguments exceeded. You can pass upto ${ref.args} arguments only.`;
        context.message = msg;
    }
    return check;
}

const checkTokens = (commandTokens, ref, index, context) => {
    if(index == commandTokens.length) return true;
    const {str, type} = commandTokens[index];
    let check = false;
    if(type == 'optkey') {
        check = checkOptKey(str, ref, context, check);
    } else if(type =='argument') {
        check = checkArg(ref, context, check);
    } else {
        check = true;
    }
    return check && checkTokens(commandTokens, ref, index+1, context);
}

const isValidCommand = (commandTokens, ref) => {
    let info = {message:''}, isValid = false;
    if(!ref) {
        info.message = `${commandTokens[0]['str']} - command not found. Please check and try again.`;
        return {isValid, info};
    }
    isValid = checkTokens(commandTokens, ref, 0, info);
    return {isValid, info};
}

const getCommandObj = (commandTokens) => {
    let obj = {command:'', options:{}, args:[]};
    for (let index in commandTokens) {
        switch (commandTokens[index].type) {
            case 'command': 
                obj.command = commandTokens[index].str; 
                break;
            case 'optkey': 
                obj.options[commandTokens[index].slice(2)] = (
                    commandTokens[index+2].str
                );
                break;
            case 'argument':
                obj.args.push(commandTokens[index].str);
                break;
            default: continue;
        } 
    }
    return obj;
}

const paintReadOnly = (output) => {
    currentState.childrenData.push({
        child: TerminalReadOnly,
        props: {
            readOnlyText: output,
            breakOnNewLine: true
        }
    });
}

const paintInput = (pwd, cursorIndex, editableText) => {
    currentState.childrenData.push({
        child: TerminalInput,
        props: {
            pwd, cursorIndex, editableText
        }
    });
}

const paintInputNew = () => {
    currentState.cursorIndex = 0;
    currentState.editableText = '';
    const {pwd, cursorIndex, editableText} = currentState;
    paintInput(pwd, cursorIndex, editableText);
}

const handleError = ({message}) => {
    paintReadOnly(message);
    paintInputNew();
}
//======================command executors==========================

const execute_ls = ({command}) => {
    const whichDir = command.args[0] || '.';
    const dirEnt = fsTree.getEntFromPath(whichDir);
    let output = ['.', '..'];
    for(let key in dirEnt.data) {
        output.push(dirEnt.data[key].name);
    }
    paintReadOnly(output.join('\n'));
    paintInputNew();
}

const execute_cd = ({command}) => {
    const toDir = command.args[0];
    const dirEnt = fsTree.getEntFromPath(toDir, true);
    let output = undefined;
    if (!dirEnt.error && dirEnt.type == 'directory') {
        currentState.pwd = (dirEnt.path);
    } else if (dirEnt.type == 'file') {
        output = `ERROR: ${toDir} is not a directory.`;
    } else {
        output = dirEnt.error;
    }
    if (output) {
        paintReadOnly(output);
    }
    paintInputNew();
}

const execute_cat = ({command}) => {
    const files = command.args;
    let output;
    for(let index in files) {
        const dirEnt = fsTree.getEntFromPath(files[index]);
        if (dirEnt.type == 'file') {
            output = dirEnt.data;
        } else if (dirEnt.type == 'directory') {
            output = `ERROR: ${dirEnt.name} is not a file.`;
        } else {
            output = dirEnt.error;
        }
        paintReadOnly(output);
    }
    paintInputNew();
}

const execute_clear = () => {
    currentState.childrenData = [];
    paintInputNew();
}

//======================command confs==============================

export const commands = [
    {
        command: 'ls',
        options: ['opt1', 'acl'],
        args: 1,
        executor: execute_ls,
    },
    {
        command: 'cd',
        options: ['opt'],
        args: 1,
        executor: execute_cd,
    },
    {
        command: 'cat',
        options: [],
        args: Infinity,
        executor: execute_cat,
    },
    {
        command: 'clear',
        options: [],
        args: 0,
        executor: execute_clear
    }
];

export const executeCommand = (_currentState) => {
    currentState = _currentState;
    if(!currentState.prevLoggedIn) {
        currentState.prevLoggedIn = true;
        paintReadOnly(`You are now logged in as ${currentState.username}`);
        paintInputNew();
        return;
    }
    const {commandTokens} = _currentState;
    if (commandTokens.length) {
        const [command] = commands.filter(({command}) => command == commandTokens[0]['str'])
        const {isValid, info} = isValidCommand(commandTokens, command);
        if (isValid) {
            info.command = getCommandObj(commandTokens);
            command.executor(info);
        } else {
            handleError({...info, error: true, data: undefined});
        }
    } else {
        paintInputNew();
    }
}