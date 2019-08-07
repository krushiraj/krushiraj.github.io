fs: {
	pwd: <present working directory>,
	.: <pwd>,
	..: <parent directory>,

	folderName: {
		type: Folder,
		children: {
			...childrenFilesAndFolders
		}
	},
	fileName: {
		type: File,
	}
}

obj: {
	command: String,
	options: {
		'--opt1': val1,
		'--opt2': val2
	},
	args: [
		arg1,
		arg2
	]
}

command [options] [arguments]

commandStructure: {
	commandName: {
		options: [...opts],
		arguments: [...args]
	}
}

commandProcessor: {
	commandName: function(...args, ...opts)
}

commands: [
	ls, cd, cat, help, clear, color, tree, ver, fontsize
	/the next commands will directly throw permission denied error/,
	mv, rm, mkdir
]

tab - autocomplete
up/down - commands from history
backspace - clear 1 char
    ctrl - clear upto last found punctuation preceeded by char
left/right - move cursor by 1 char
    ctrl - move to last found punctuation preceeded by char

TODO: Allow user to copy content to clipboard and also paste into terminal
TODO: use ::selection property to change colors when text is selected
    
TODO: Do something
