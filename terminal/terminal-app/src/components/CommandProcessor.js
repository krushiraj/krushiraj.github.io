//Add new code on top of this function
//Add new funcs here

export const commands = [
    {
        command: 'ls',
        options: ['opt1', 'acl'],
        args: 1
    },
    {
        command: 'cd',
        options: ['opt'],
        args: 1
    },
    {
        command: 'cat',
        options: [],
        args: Infinity
    }
];

const compare = (actual, expected) => {
    return actual == expected || expected.indexOf(actual) != -1;
}

const checkTokens = (commandTokens, ref, index, context) => {
    if(index == commandTokens.length) return true;
    const {str, type} = commandTokens[index];
    let check = false;
    if(type == 'command') {
        check = compare(str, ref['command']);
        context['command'] = true;
    } else if(type == 'optkey') {
        if(context.hasOwnProperty('options')) {
            context['options'] += 1;
        } else {
            context['options'] = 1;
        }
        check = compare(str.slice(2), ref['options']) &&
            context['options'] <= ref['options'].length;
    } else if(type=='argument') {
        if(context.hasOwnProperty('args')) {
            context['args'] += 1;
        } else {
            context['args'] = 1;
        }
        check = context['args'] <= ref['args'];
    } else {
        check = true;
    }
    return check && checkTokens(commandTokens, ref, index+1, context);
}

const isValidCommand = (commandTokens, ref) => {
    let info = {};
    const isValid = checkTokens(commandTokens, ref, 0, info);
    return isValid;
}

export const executeCommand = (commandTokens) => {
    debugger;
    const [command] = commands.filter(({command}) => command == commandTokens[0]['str'])
    const isValid = isValidCommand(commandTokens, command);
    console.log({command, isValid});
}