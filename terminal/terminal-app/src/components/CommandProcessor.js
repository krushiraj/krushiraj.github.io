//Add new code on top of this function
//Add new funcs here
/*eslint-disable*/
import {getEntFromPath} from './fs.js';

let currentState = {};

export const commands = [
    {
        command: 'ls',
        options: ['opt1', 'acl'],
        args: 1,
        executor: '',
    },
    {
        command: 'cd',
        options: ['opt'],
        args: 1,
        executor: '',
    },
    {
        command: 'cat',
        options: [],
        args: Infinity,
        executor: '',
    }
];

const compare = (actual, expected) => {
    return actual == expected || expected.indexOf(actual) != -1;
}

const checkOptKey = (str, ref, context, check) => {
    if(context.hasOwnProperty('options')) {
        context['options'] += 1;
    } else {
        context['options'] = 1;
    }
    const optLen = (context['options'] <= ref['options'].length);
    const isValidOpt = compare(str.slice(2), ref['options']);
    check = isValidOpt && optLen;
    if(!check) {
        const msg = `'${str}' is not a valid option for '${ref.command}' command.`;
        context.message = msg;
    }
}

const checkArg = (ref, context, check) => {
    if(context.hasOwnProperty('args')) {
        context['args'] += 1;
    } else {
        context['args'] = 1;
    }
    check = context['args'] <= ref['args'];
    if(!check) {
        const msg = `Maximum number arguments exceeded. You can pass upto ${ref.args} arguments only.`;
        context.message = msg;
    }
}

const checkTokens = (commandTokens, ref, index, context) => {
    if(index == commandTokens.length) return true;
    const {str, type} = commandTokens[index];
    let check = false;
    if(type == 'optkey') {
        checkOptKey(str, ref, context, check);
    } else if(type =='argument') {
        checkArg(ref, context, check);
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

export const executeCommand = (_currentState) => {
    currentState = _currentState;
    const {commandTokens} = _currentState; 
    const [command] = commands.filter(({command}) => command == commandTokens[0]['str'])
    const {isValid, info} = isValidCommand(commandTokens, command);
    if (isValid) {
        //TODO : Execute corresponding operations and return output by appending data key to info
        command.executor();
    } else {
        return {...info, error: true, data: undefined};
    }
}