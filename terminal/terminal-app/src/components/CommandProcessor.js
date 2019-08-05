/*eslint-disable*/
import FSTree from './fs.js';
import TerminalReadOnly from './TerminalReadOnly.vue';
import TerminalInput from './TerminalInput.vue';

const version = 'Mini Terminal v1.0.190806 Beta';
let currentState = {};
export const fsTree = new FSTree();

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
        const commandObj = commands.filter((arg) => arg.command == args[0])[0];
        output = [commandObj.help];
        if (!options.length) {
            for(let key in commandObj.options) {
                output.push(`${tab}--${key} - ${commandObj.options[key]}`);
            }
        } else {
            let key = options[0];
            output.push(`${tab}--${key} - ${commandObj.options[key]}`);
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
        help: `Usage: help <command name> <?options for command> \nDisplays help text for each of the command supported in this terminal and also provides help for each of the option for each command.`,
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
        command: 'mv',
        options: {},
        args: 2,
        help: `Usage: mv <old-path> <new-path> \nMoves files/directories or renames them.`,
        executor: execute_mv
    },
    {
        command: 'rm',
        options: {
            'r': 'Recursively deletion in a directory.'
        },
        args: Infinity,
        help: `Usage: rm <file1> <?...files> \nRemoves files/directories from the disk.`,
        executor: execute_rm
    },
    {
        command: 'mkdir',
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

//============================trie building for commmands and options===========================

export class COTrie {
    constructor() {
        this.comTrie = {links:0};
        this.optTrie = {links:0};
        this.fileTrie = {links:0};
        this.commandList = [];
        this.buildCommandTrie();
        this.buildOptionsTrie();
    }

    insertInTrie (root, str, index) {
        if (index == str.length) {
            return;
        } else {
            const char = str[index];
            if (!root.hasOwnProperty(char)) {
                root[char] = {links:0}
            }
            root.links += 1;
            return this.insertInTrie(root[char], str, index+1);
        }
    }

    buildTrieForFiles (currDir) {
        this.fileTrie = {links:0};
        for(let key in currDir.data) {
            this.insertInTrie(this.fileTrie, currDir.data[key].name, 0);
        }
    }

    buildCommandTrie () {
        this.commandList = commands.map((arg) => arg.command)
        const commandList = this.commandList;
        for(let index in commandList) {
            this.insertInTrie(this.comTrie, commandList[index], 0);
        }
    }

    buildOptionsTrie () {
        const commandList = this.commandList;
        for(let index in commandList) {
            const options = (
                Object.getOwnPropertyNames(
                    commands.filter(arg => arg.command == commandList[index])[0]
                    .options
                )
            )
            this.optTrie[commandList[index]] = {links:0};
            for(let optIndex in options) {
                this.insertInTrie(
                    this.optTrie[commandList[index]],
                    options[optIndex],
                    0
                )
            }
        }
    }

    getCommandTrie (command) {
        let root = this.comTrie;
        for(let index in command) {
            root = root[command[index]];
        }
        return root;
    }

    getOptionsTrie (command, option) {
        let root = this.optTrie[command];
        for(let index in option) {
            root = root[option[index]];
        }
        return root;
    }

    getFilesTrie (filename) {
        let root = this.fileTrie;
        for(let index in filename) {
            root = root[filename[index]];
        }
        return root;
    }

    getStringsFromTrie(root, list, curr) {
        let str = curr;
        if (root.links == 0) {
            list.push(str);
            return 
        } else {
            for(let key in root) {
                if (key == 'links')
                    continue;
                this.getStringsFromTrie(root[key], list, str+key);
            }
        }
    }

    getSuggestions (command, option, forCommand) {
        let suggestions = [];
        if (command == '') {
            return suggestions
        } else if (command.length > 0 && !forCommand) {
            this.getStringsFromTrie(this.getCommandTrie(command), suggestions, '');
        } else if (command.length > 0 && forCommand && typeof(option) != 'string') {
            this.buildTrieForFiles(option);
            this.getStringsFromTrie(this.getFilesTrie(command), suggestions, '');
        } else if (option.length > -1 && forCommand) {
            this.getStringsFromTrie(this.getOptionsTrie(command, option), suggestions, '');
        } 
        return suggestions;
    }

    getCommonSubStr (root, substr) {
        let completion = substr;
        const keys = Object.getOwnPropertyNames(root);
        if (keys.length == 2) {
            const index = keys.indexOf('links') ? 0 : 1;
            const key = keys[index];
            return this.getCommonSubStr(root[key], completion+key);
        } else {
            return completion;
        }
    }

    autoComplete (command, option, forCommand) {
        let substr = '';
        if (command == '') {
            return substr
        } else if (command.length > 0 && !forCommand) {
            substr = this.getCommonSubStr(this.getCommandTrie(command), '');
        } else if (command.length > 0 && forCommand && typeof(option) != 'string') {
            this.buildTrieForFiles(option)
            substr = this.getCommonSubStr(this.getFilesTrie(command), '');
        } else if (option.length > -1 && forCommand) {
            substr = this.getCommonSubStr(this.getOptionsTrie(command, option), '');
        }
        return substr;
    }
}