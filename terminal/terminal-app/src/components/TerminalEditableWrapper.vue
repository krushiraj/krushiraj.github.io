<template>
    <span id="editable-wrapper">
        <TerminalEditable :editableText="editableText"/>
    </span>
</template>

<script>
import TerminalEditable from './TerminalEditable';

export default {
    name: 'TerminalEditableWrapper',
    components: {
        TerminalEditable
    },
    props: {
        editableText: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
