<template>
    <span id="terminal-input">
        <TerminalPWDUser :username="username" :pwd="pwd"/>
        <TerminalEditableWrapper :suggestions="suggestions" :cursorIndex="cursorIndex" :editableText="editableText"/>
    </span>
</template>

<script>
import TerminalPWDUser from './TerminalPWDUser.vue';
import TerminalEditableWrapper from './TerminalEditableWrapper.vue';

export default {
    name: 'TerminalInput',
    components: {
        TerminalPWDUser,
        TerminalEditableWrapper,
    },
    props: {
        editableText: {
            type: String,
            required: true
        },
        cursorIndex: {
            type: Number,
            required: true
        },
        pwd: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        suggestions: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>
