<template>
    <span id='cursor-tab-wrapper'>
        <TerminalCursor :charBeneath="charBeneath" :fontSize="fontSize"/>
        <TerminalTabAutoComplete :suggestions="suggestions"/>
    </span>
</template>

<script>
import TerminalTabAutoComplete from './TerminalTabAutoComplete';
import TerminalCursor from './TerminalCursor';

export default {
    name: 'TerminalCursorTabWrapper',
    components: {
        TerminalCursor,
        TerminalTabAutoComplete
    },
    props: {
        suggestions: {
            type: Array,
            default: () => []
        },
        fontSize: {
            type: Number,
            required: true
        },
        charBeneath: {
            type: String,
            default: ' '
        }
    }
}
</script>

<style>
#cursor-tab-wrapper {
    position: relative;
}
</style>
