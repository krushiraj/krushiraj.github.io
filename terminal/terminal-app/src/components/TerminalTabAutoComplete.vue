<template>
    <ul id="suggestions" v-if="hasSuggestions">
        <li v-for="(suggestion, index) in suggestions" :key="index">
            {{ suggestion }}
        </li> 
    </ul>
</template>

<script>
export default {
    name: 'TerminalTabAutoComplete',
    props: {
        suggestions: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        hasSuggestions: ({suggestions}) => !!suggestions.length 
    }
}
</script>

<style>
#suggestions {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: var(--test-var); /*TODO: calc size by font size relatively*/
    left: 0;
    float: left;
}
</style>
