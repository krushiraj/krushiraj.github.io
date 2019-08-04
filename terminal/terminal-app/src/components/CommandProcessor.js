/*eslint-disable*/
import FSTree from './fs.js';
import TerminalReadOnly from './TerminalReadOnly.vue';
import TerminalInput from './TerminalInput.vue';

const versio = 'Mini Terminal v1.0.190804 Beta';
let currentState = {};
const fsTree = new FSTree();

const compare = (actual, expected) => {
    return actual == expected || expected.hasOwnProperty(actual);
}

const checkOptKey = (str, ref, context) => {
    if (context['command'] == 'help') {
        return true;
    }
    if(context.hasOwnProperty('options')) {
        context['options'] += 1;
    } else {
        context['options'] = 1;
    }
    const optLen = (context['options'] <= Object.getOwnPropertyNames(ref.options).length);
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
                obj.options[commandTokens[index].str.slice(2)] = (
                    commandTokens[parseInt(index)+2+''].str
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

const paintReadOnly = (output, breakOnNewLine=true, trimLine=true) => {
    currentState.childrenData.push({
        child: TerminalReadOnly,
        props: {
            readOnlyText: output,
            breakOnNewLine,
            trimLine
        }
    });
}

const paintInput = (pwd, cursorIndex, editableText, username) => {
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
    if(!currentState.loggedIn) {
        currentState.pwd = 'Username';
        currentState.username = 'Guest';
    }
    const {pwd, cursorIndex, editableText, username} = currentState;
    paintInput(pwd, cursorIndex, editableText, username);
}

const handleError = ({message}) => {
    paintReadOnly(message);
    paintInputNew();
}

const handlePermissionDenied = () => {
    const {username, sysname, pwd, commandTokens} = currentState;
    handleError({message: `ERROR: ${username}@${sysname}:${pwd}: Permission denied. Cannot ${commandTokens[0].str}`});
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
    let files = command.args;
    const lineNo = command.options['n'];
    let output;
    if (files[0] == '*') {
        files = [];
        const currDir = fsTree.getEntFromPath('.');
        for(let key in currDir.data) {
            if(currDir.data[key].type == 'file')
                files.push(currDir.data[key].name);
        }
    }
    for(let index in files) {
        const dirEnt = fsTree.getEntFromPath(files[index]);
        if (dirEnt.type == 'file') {
            output = dirEnt.data;
        } else if (dirEnt.type == 'directory') {
            output = `ERROR: ${dirEnt.name} is not a file.`;
        } else {
            output = dirEnt.error;
        }
        paintReadOnly(
            (lineNo ?
            (
                output.split('\n')
                .map((line, index) => `${index+1}) ${line}`)
                .join('\n')
            ) :
            output) + '\nEOF'
        );
    }
    paintInputNew();
}

const execute_clear = () => {
    currentState.childrenData = [];
    paintInputNew();
}

const execute_help = ({command:{args, options}}) => {
    let output, tab = '\u00a0\u00a0\u00a0\u00a0';
    if (args.length != 1 || options.length > 1) {
        output = [`ERROR: Help command expects exactly one command name as argument and optionally followed by exactly one option in that command.`]
    } else {
        const commadObj = commands.filter((arg) => arg.command == args[0])[0];
        output = [commadObj.help];
        if (!options.length) {
            for(let key in commadObj.options) {
                output.push(`${tab}--${key} - ${commadObj.options[key]}`);
            }
        } else {
            let key = options[0];
            output.push(`${tab}--${key} - ${commadObj.options[key]}`);
        }
    }
    paintReadOnly(output.join('\n'), true, false);
    paintInputNew();
}

const execute_logout = () => {
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes()-1);
    document.cookie = `username=;expires=${expiry.toUTCString()};path=/`;
    currentState.prevLoggedIn = false;
    currentState.loggedIn = false;
    paintReadOnly('You have been logged out successfully');
    paintInputNew();
}

const execute_ver = () => {
    paintReadOnly(version);
    paintInputNew();
};

const execute_fontsize = ({command:{args}}) => {
    const fontsize = args[0] || 1;
    let output;
    if(fontsize < 1) {
        output = `ERROR: Font-size should always be greater than 0.`;
    } else {
        currentState.fontsize = fontsize;
        output = `Terminal font-size has been changed to ${fontsize} unit(s).`
    }
    paintReadOnly(output);
    paintInputNew();
}

const execute_pwd = () => {
    paintReadOnly(`Present working directory: '${currentState.pwd}'`)
}

const execute_mkdir = () => {
    handlePermissionDenied();
}

const execute_rm = () => {
    handlePermissionDenied();
}

const execute_mv = () => {
    handlePermissionDenied();
}

//======================command confs==============================

export const commands = [
    {
        command: 'help',
        options: {},
        args: 1,
        help: `Usage: help <command name> <?options for command> \nDisplays help text for each of the command supported in this terminal and also provides help for each of the option for each commad.`,
        executor: execute_help
    },
    {
        command: 'ls',
        options: {},
        args: 1,
        help: `Usage: ls <dir> \nList all files and directories in a given directory or current directory if no argument is provided.`,
        executor: execute_ls,
    },
    {
        command: 'cd',
        options: {},
        args: 1,
        help: `Usage: cd <dir> \nChanges present working directory to the given directory.`,
        executor: execute_cd,
    },
    {
        command: 'cat',
        options: {
            'n': `Prints the line numbers before each line.`
        },
        args: Infinity,
        help: `Usage: cat <?...options> <file1> <...more files> \nConcatenates file contents and displays it.`,
        executor: execute_cat,
    },
    {
        command: 'clear',
        options: {},
        args: 0,
        help: `Usage: clear \nClears all output text present from terminal.`,
        executor: execute_clear
    },
    {
        command: 'logout',
        options: {},
        args: 0,
        help: `Usage: logout \nCloses the session to terminal.`,
        executor: execute_logout
    },
    {
        command: 'ver',
        options: {},
        args: 0,
        help: `Usage: ver \nPrints the current version of the terminal.`,
        executor: execute_ver
    },
    {
        //TODO: After auto completion and command history
        command: 'color',
        options: {},
        args: 0,
        help: `Usage: color <?...options>\nSets the colors of the elements in terminal according to the options provided.`,
        executor: execute_logout
    },
    {
        command: 'fontsize',
        options: {},
        args: 1,
        help: `Usage: fontsize <size> \nSets the font-size of the text in terminal.\nIf no argument is provided, font-size falls back to default value.\nArgument size should always be greater than 0.`,
        executor: execute_fontsize
    },
    {
        commad: 'mv',
        options: {},
        args: 2,
        help: `Usage: mv <old-path> <new-path> \nMoves files/directories or renames them.`,
        executor: execute_mv
    },
    {
        commad: 'rm',
        options: {
            'r': 'Recursively deletion in a directory.'
        },
        args: Infinity,
        help: `Usage: rm <file1> <?...files> \nRemoves files/directories from the disk.`,
        executor: execute_rm
    },
    {
        commad: 'mkdir',
        options: {},
        args: 1,
        help: `Usage: mkdir <directory-name> \nCreates new directory in the path specified.`,
        executor: execute_mkdir
    },
    {
        command: 'pwd',
        options: {},
        args: 0,
        help: `Usage: pwd \nUsed to print the present working directory.`,
        executor: execute_pwd
    },
    {
        command: 'sudo',
        options: {},
        args: 0,
        help: `Usage: logout \nExecute a command with root user privileges.`,
        executor: undefined
    }
];

const handleValidCommand = (commandTokens) => {
    const [command] = commands.filter(({command}) => command == commandTokens[0]['str'])
    const {isValid, info} = isValidCommand(commandTokens, command);
    if (isValid) {
        info.command = getCommandObj(commandTokens);
        command.executor(info);
    } else {
        handleError({...info, error: true, data: undefined});
    }
}

export const executeCommand = (_currentState) => {
    currentState = _currentState;
    if(!currentState.prevLoggedIn) {
        currentState.prevLoggedIn = true;
        paintReadOnly(`You are now logged in as ${currentState.username}`);
        paintInputNew();
        return;
    }
    const {commandTokens} = _currentState;
    if(commandTokens[0].str == 'sudo') {
        handlePermissionDenied();
    } else if (commandTokens.length) {
        handleValidCommand(commandTokens);
    } else {
        paintInputNew();
    }
}