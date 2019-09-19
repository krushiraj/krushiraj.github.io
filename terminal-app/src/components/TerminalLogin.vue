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
                Copyright (c) 2019, Everyone - as this is an open-source site :P.
            ` + (isLoggedIn ? 'Need some help on how to use this? Use \'help\' command.' : `Please enter your username to establish a session. Guest is default username.
            In case of any error in logging in with the username provided, the system will try to fallback to default username and establishes a session with default username.
            *Note:Currently this terminal doesn't support handling of inputs from virtual keyboard. So, you can't use this on devices with touch screen.*`)
            )
        }
    }
}
</script>

<style>

</style>
