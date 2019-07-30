<template>
    <span id="terminal-input">
        <TerminalPWDUser/>
        <TerminalEditableWrapper :editableText="editableText"/>
        <TerminalCursorTabWrapper :fontSize="fontSize"/>
    </span>
</template>

<script>
import TerminalPWDUser from './TerminalPWDUser';
import TerminalEditableWrapper from './TerminalEditableWrapper';
import TerminalCursorTabWrapper from './TerminalCursorTabWrapper';

export default {
    name: 'TerminalInput',
    components: {
        TerminalPWDUser,
        TerminalEditableWrapper,
        TerminalCursorTabWrapper
    },
    props: {
        fontSize: {
            type: Number,
            required: true
        },
        editableText: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
