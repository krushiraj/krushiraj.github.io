/*eslint-disable*/
import {getEntFromPath} from './fs.js';
import TerminalReadOnly from './TerminalReadOnly.vue';
import TerminalInput from './TerminalInput.vue';

let currentState = {};

//Add new code on top of this function
//Add new funcs here

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

//======================command executors==========================

const execute_ls = (info) => {

}

const changeDir = (current, to) => {
    return current + to + '/';
}

const execute_cd = ({command}) => {
    const toDir = command.args[0];
    const dirEnt = getEntFromPath(currentState.pwd+toDir);
    let output = undefined;
    if (!dirEnt.error && dirEnt.type == 'directory') {
        currentState.pwd = changeDir(currentState.pwd, toDir);
    } else if (dirEnt.type == 'file') {
        output = `ERROR: ${toDir} is not a directory.`;
    }
    if (output) {
        currentState.children.push({
            child: TerminalReadOnly,
            props: {
                readOnlyText: output,
                breakOnNewLine: true
            }
        });
    }
    currentState.cursorIndex = 0;
    currentState.editableText = '';
    const {pwd, cursorIndex, fontSize, editableText} = currentState;
    currentState.children.push({
        child: TerminalInput,
        props: {
            pwd, cursorIndex, fontSize, editableText
        }
    });
}

const execute_cat = (info) => {

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
    }
];

export const executeCommand = (_currentState) => {
    currentState = _currentState;
    const {commandTokens} = _currentState; 
    const [command] = commands.filter(({command}) => command == commandTokens[0]['str'])
    const {isValid, info} = isValidCommand(commandTokens, command);
    info.command = getCommandObj(commandTokens);
    if (isValid) {
        //TODO : Execute corresponding operations and return output by appending data key to info
        console.log(info);
        command.executor(info);
    } else {
        return {...info, error: true, data: undefined};
    }
}