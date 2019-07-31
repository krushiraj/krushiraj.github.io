<template>
    <span id="terminal-input">
        <TerminalPWDUser/>
        <TerminalEditableWrapper :cursorIndex="cursorIndex" :editableText="editableText"/>
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
        fontSize: {
            type: Number,
            required: true
        },
        editableText: {
            type: String,
            required: true
        },
        cursorIndex: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>
