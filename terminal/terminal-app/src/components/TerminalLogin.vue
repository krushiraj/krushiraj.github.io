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
        isLoggedIn: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        welcomeText: ({isLoggedIn}) => {
            //TODO - make this configurable with text and template which can accept data
            return ( 
            `Welcome to Mini Terminal. Here you can checkout the profile of Krushi Raj Tula.
                Copyright (c) 2019, Krushi Raj Tula.
            ` + (isLoggedIn ? '' : `Please enter your username to establish a session. Guest is default username.`)
            )
        }
    }
}
</script>

<style>

</style>
