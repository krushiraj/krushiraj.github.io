<template>
    <span>{{textToRender}}</span>
</template>

<script>
export default {
    name: 'TerminalEditable',
    props: {
        editableText: {
            type: String,
            required: true
        }
    },
    computed: {
        textToRender: (props) => {
            return props.editableText.replace(/\s/g, '\u00a0');
        }
    }
}
</script>

<style>

</style>
