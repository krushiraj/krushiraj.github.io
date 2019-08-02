<template>
	<div
		id="terminal-container"
		tabindex="1"
		v-bind:style="{fontSize: fontSize + 'rem'}"
		v-on:keydown="handleInput"
	>
		<TerminalLogin v-if="!isLoggedIn" />
		<template v-for="({child, props}, index) in children">
			<component :is="child" v-bind="props" :key="index"></component>
		</template>
	</div>
</template>

<script>
/* eslint-disable */

import TerminalInput from './TerminalInput.vue';
import TerminalLogin from "./TerminalLogin.vue";
import {executeCommand, commands} from './CommandProcessor.js';
import TerminalReadOnly from './TerminalReadOnly.vue';

export default {
	name: "TerminalContainer",
	components: {
		TerminalLogin,
		TerminalInput
	},
	data() {
		return {
			editableText: "",
			cursorIndex: 0,
			pwd: '/',
			childrenData: [],
			history: []
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
			return !!char.match(/[\.,';:"?\s-]/);
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
		isArrow(char) {
			return {
				check: char.startsWith('Arrow'),
				direction: char.slice(5)
			};
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
		lastPunctuationIndex() {
			const punctuationIndices = this.punctuationIndices;
			return punctuationIndices[
				punctuationIndices.length - 1
			] || -1;
		},
		handleBackspace(ctrl) {
			const editableText = this.editableText;
			let sliceEnd;
			if (ctrl) {
				sliceEnd = this.getNearestPunctIndex(0, this.punctuationIndices);
			} else {
				sliceEnd = this.cursorIndex - 1;
			}
			this.editableText = (
				editableText.slice(
					0, sliceEnd == -1 ? (sliceEnd*editableText.length) : sliceEnd
				) + editableText.slice(this.cursorIndex)
			);
			this.cursorIndex = sliceEnd == -1 ? 0 : sliceEnd;
		},
		getDirOffset(dir) {
			return dir ? 1 : -1;
		},
		resolveNearestBase(arr, index, dir) {
			return arr[index + this.getDirOffset(dir)] || 
				(dir ? this.editableText.length+1 : -1);
		},
		checkAndResolve(arr, cursorIndex, dir) {
			const exists = arr.indexOf(cursorIndex);
			if (exists > -1) {
				if (arr[exists+this.getDirOffset(dir)] != (cursorIndex+this.getDirOffset(dir)))
					return this.resolveNearestBase(arr, exists, dir);
				else
					return this.resolveNearestBase(arr, exists + this.getDirOffset(dir), dir);
			} else return exists;
		},
		getNearestPunctIndex(dir, arr) {
			//0-left 1-right
			let copyArr = arr.slice(0);
			const cursorIndex = this.cursorIndex;
			const newIndex = this.checkAndResolve(copyArr, cursorIndex, dir);
			if (newIndex > -1) {
				return newIndex
			} else {
				copyArr.push(cursorIndex);
				copyArr.sort((a, b) => a - b);
				return this.checkAndResolve(copyArr, cursorIndex, dir);
			}
		},
		moveCursor(dir) {
			if(dir) {
				const end = this.editableText.length;
				return (
					this.cursorIndex == end ? 
					this.cursorIndex :
					this.cursorIndex + 1
				);
			} else {
				return (
					this.cursorIndex == 0 ? 
					this.cursorIndex :
					this.cursorIndex - 1
				);
			}
		},
		moveCursorCtrl(dir) {
			const newIndex = this.getNearestPunctIndex(
				dir, this.punctuationIndices,
			);
			const append = !this.isPunctuationOrSymbol(
				this.editableText[newIndex + (dir ? -1 : 1)] || ''
			);
			return newIndex + (append ? (dir ? -1 : 1) : 0);
		},
		handleSideArrows(direction, ctrl) {
			if(direction == "Left") {
				this.cursorIndex = (
					ctrl ? 
					this.moveCursorCtrl(0) :
					this.moveCursor(0)
				);
			} else if (direction == "Right") {
				this.cursorIndex = (
					ctrl ? 
					this.moveCursorCtrl(1) : 
					this.moveCursor(1)
				);
			}
		},
		mutateText(ctrl, char) {
			const {editableText, cursorIndex} = this;
			const preceeding = editableText.slice(0, cursorIndex);
			const succeeding = editableText.slice(cursorIndex);
			this.editableText = preceeding + (ctrl ? '' : char) + succeeding;
			this.cursorIndex += 1;
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
				isArrow: this.isArrow(char),
				isLastCharPunc: this.isPunctuationOrSymbol(
					this.editableText[this.editableText.length - 1] || ''
				),
			}
		},
		autoComplete() {
			//TODO Autocomplete
		},
		getTokenType(token, context) {
			const hasContext = context.length != 0;
			if(!hasContext && token.length != 0) {
				return 'command';
			} else if(hasContext) {
				if(token.trim() == '') {
					return 'delimiter';
				} else if(token.startsWith('--')) {
					return 'optkey';
				} else if(context[context.length-2]['str'].startsWith('--')) {
					return 'optval';
				} else {
					return 'argument';
				}
			}
		},
		paintEditableAsReadOnly() {
			const userPwd = document.getElementById("user-pwd").textContent;
			const editable = this.childrenData[this.childrenData.length-1];
			const readonly = {
				child: TerminalReadOnly,
				props: {
					readOnlyText: userPwd.trim().concat(' ', editable.props.editableText),
					breakOnNewLine: true,
				}
			}
			this.childrenData.pop();
			this.childrenData.push(readonly);
		},
		processCommand() {
			this.paintEditableAsReadOnly();
			executeCommand(this);
		},
		updateChanges() {
			const {editableText, fontSize, cursorIndex, pwd} = this;
			this.childrenData[this.childrenData.length-1].props = {
				editableText, fontSize, cursorIndex, pwd
			};
		},
		handleInput(e) {
			const {
				char, ctrl, shift,
				punctuation, alnum,
				isTab, isEnter,
				isArrow, isLastCharPunc
			} = this.getRequiredData(e);
			if (isEnter){
				console.log('TODO: Command processing');
				this.processCommand();
			}
			else if (isTab) {
				console.log('TODO: Autocompletion');
			}
			else if (this.isBackspace(char)) {
				this.handleBackspace(ctrl);
			}
			else if (isArrow.check) {
				this.handleSideArrows(isArrow.direction, ctrl);
			}
			else if(alnum || punctuation){
				this.mutateText(ctrl, char);
			}
			this.updateChanges();
		}
	},
	computed: {
		commandTokens({editableText}) {
			const getTokenType = this.getTokenType;
			let _tokens = editableText.match(/([a-zA-Z0-9-]+)|(\s+)/g);
			let tokens = [], start = 0, end = 0;
			for(let index in _tokens) {
				end = start + _tokens[index].length - 1;
				tokens.push({
					str: _tokens[index],
					start,
					end,
					type: getTokenType(_tokens[index], tokens)
				});
				start = end + 1;
			}
			return tokens;
		},
		punctuationIndices({commandTokens}) {
			console.log(commandTokens);
			const filtered = commandTokens.filter(
				({str}) => this.isPunctuationOrSymbol(str)
			);
			let indices = [];
			let token;
			for(let index in filtered) {
				const {start, end} = filtered[index];
				if (start == end) {
					indices.push(start);
				} else {
					indices.push(start, end);
				}
			}
			return indices;
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
		},
		children({pwd, cursorIndex, fontSize, editableText, childrenData}) {
			if (childrenData && childrenData.length != 0) {
				return childrenData;
			} else {
				childrenData.push({
					child: TerminalInput,
					props: {
						pwd, cursorIndex, fontSize, editableText
					}
				});
				return childrenData;
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