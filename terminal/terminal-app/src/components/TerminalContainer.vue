<template>
	<div
		id="terminal-container"
		tabindex="1"
		v-bind:style="{fontSize: fontSize + 'rem'}"
		v-on:keydown="handleInput"
	>
		<TerminalLogin v-if="!isLoggedIn" />
		<TerminalInput :fontSize="fontSize" :editableText="editableText" />
	</div>
</template>

<script>
/* eslint-disable */


import TerminalInput from './TerminalInput';
import TerminalLogin from "./TerminalLogin.vue";

export default {
	name: "TerminalContainer",
	components: {
		TerminalLogin,
		TerminalInput
	},
	data() {
		return {
			editableText: ""
		}
	},
	props: {
		name: {
			type: String,
			default: "Guest"
		},
		fontSize: {
			type: Number,
			default: 1
		},
		isLoggedIn: {
			type: Boolean,
			default: false
		},
		punctuationIndices: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		lastPunctuationIndex: ({punctuationIndices}) => {
			return punctuationIndices[
				punctuationIndices.length - 1
			] || -1;
		},
		os: () => {
			var userAgent = window.navigator.userAgent,
				platform = window.navigator.platform,
				macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
				windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
				iosPlatforms = ['iPhone', 'iPad', 'iPod'],
				os = null;

			if (macosPlatforms.indexOf(platform) !== -1) {
				os = 'MacOS';
			} else if (iosPlatforms.indexOf(platform) !== -1) {
				os = 'iOS';
			} else if (windowsPlatforms.indexOf(platform) !== -1) {
				os = 'Windows';
			} else if (/Android/.test(userAgent)) {
				os = 'Android';
			} else if (!os && /Linux/.test(platform)) {
				os = 'Linux';
			}

			return os;
		}
	},
	methods: {
		isBackspace(char) {
			return char == "Backspace";
		},
		isShiftKey({shiftKey}) {
			return shiftKey;
		},
		isPunctuationOrSymbol(char) {
			return !!char.match(/[.,';:"?\s]/);
		},
		isAlNum(char) {
			return !!char.match(/[a-zA-Z0-9]/) && char.length == 1;
		},
		isTab(char) {
			return char == "Tab";
		},
		isEnter({key, keyCode}) {
			return keyCode == 13 || key == "Enter";
		},
		isControlActive({metaKey, ctrlKey}) {
			const os = this.os;
			if (os == "MacOS") {
				return metaKey || ctrlKey;
			} else if (os == "Windows") {
				return ctrlKey;
			} else {
				return false;
			}
		},
		handleBackspace(ctrl) {
			const isPunctuation = this.isPunctuationOrSymbol(
				this.editableText[this.editableText.length - 1] || ''
			);
			if (isPunctuation) {
				this.punctuationIndices.pop();
			}
			const end = this.lastPunctuationIndex;
			if (ctrl) {
				this.editableText = this.editableText.slice(
					0, 
					end > -1 ? end + 1 : 0
				)
			} else {
				this.editableText = this.editableText.slice(
					0, this.editableText.length - 1
				)
			}
		},
		getRequiredData(e) {
			const char = e.key;
			return {
				char,
				ctrl: this.isControlActive(e),
				shift: this.isShiftKey(e),
				punctuation: this.isPunctuationOrSymbol(char),
				alnum: this.isAlNum(char),
				isTab: this.isTab(char),
				isEnter: this.isEnter(e),
				isLastCharPunc: this.isPunctuationOrSymbol(
					this.editableText[this.editableText.length - 1] || ''
				),
			}
		},
		processCommand({command, options, args}) {
			//TODO Command processor
		},
		handleInput(e) {
			const {
				char,
				ctrl,
				shift,
				punctuation,
				alnum,
				isTab,
				isEnter,
				isLastCharPunc
			} = this.getRequiredData(e);
			console.log(e);
			if (isEnter){
				console.log('TODO: Command processing');
			}
			else if (isTab) {
				console.log('TODO: Autocompletion');
			}
			else if (this.isBackspace(char)) {
				this.handleBackspace(ctrl);
			}
			else if(alnum || punctuation){
				if (punctuation && !isLastCharPunc)
					this.punctuationIndices.push(this.editableText.length);
				this.editableText += ctrl ? '' : char;
			}
		}
	}
};
/*

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
	ls, cd, cat, help, clear, color, tree, ver
	/the next commands will directly throw permission denied error/,
	mv, rm, mkdir, vi <newfilename>
]

tab - autocomplete
up/down - commands from history
left-right - move cursor by one char
	ctrl - move cursor one word
backspace - remove one char
	ctrl - remove one word

*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#terminal-container {
	/*
	TODO: P1 - instead of passing few props for sake of CSS
		just create CSS vars here and use them in children
	*/
	--test-var: 1.1rem;
	padding: 10px;
	height: auto;
	width: auto;
}
</style>