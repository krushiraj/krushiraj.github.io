<template>
  <span id="editable-wrapper">
	<template v-for="({child, props}, index) in children">
		<component :is="child" v-bind="props" :key="index"></component>
	</template>
  </span>
</template>

<script>
/*eslint-disable*/
import TerminalEditable from "./TerminalEditable.vue";
import TerminalCursorTabWrapper from "./TerminalCursorTabWrapper.vue";

export default {
  name: "TerminalEditableWrapper",
  components: {
    TerminalEditable,
    TerminalCursorTabWrapper
  },
  props: {
    editableText: {
		type: String,
		required: true
    },
    cursorIndex: {
		type: Number,
		required: true
    }
  },
  methods: {
    appendChild(childrenArr, child, props) {
      	childrenArr.push({ child, props });
    },
    appendEditableChild(arr, editableText) {
    	this.appendChild(arr, TerminalEditable, { editableText });
    },
    appendCursorChild(arr, charBeneath) {
      	this.appendChild(arr, TerminalCursorTabWrapper, { charBeneath, fontSize: 1 });
    },
    appendChildrenFromText(arr, text, index) {
		const tokens = text.match(/([a-zA-Z0-9-]+)|(\s+)/g);
		if (text.length == 1 && index == 1) {
			this.appendCursorChild(arr, text);
		} else {
			for (let index in tokens) {
				this.appendEditableChild(arr, tokens[index]);
			}
		}
    }
  },
  computed: {
    children({ editableText, cursorIndex }) {
		let children = [];
		const textParts = [
			editableText.slice(0, cursorIndex),
			editableText[cursorIndex] || ' ',
			editableText.slice(cursorIndex + 1, editableText.length)
		];
		for (let index in textParts) {
			this.appendChildrenFromText(children, textParts[index], index);
		}
		return children;
    }
  }
};
</script>

<style>
</style>
