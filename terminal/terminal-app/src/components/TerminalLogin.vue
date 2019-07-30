<template>
    <TerminalReadOnly breakOnNewLine :readOnlyText="welcomeText"/>    
</template>

<script>
import TerminalReadOnly from './TerminalReadOnly';

export default {
    name: 'TerminalLogin',
    components: {
        TerminalReadOnly
    },
    props: {
        username: {
            type: String,
            default: 'Guest'
        },
        test: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        welcomeText: () => {
            //TODO - make this configurable with text and template which can accept data
            //TODO - ask for username when they first login. Try to save it in cookie.
            return ( 
            `Welcome to Mini Terminal. Here you can checkout the profile of Krushi Raj Tula.
                Copyright (c) 2019, Krushi Raj Tula.
            `)
        }
    }
}
</script>

<style>

</style>
