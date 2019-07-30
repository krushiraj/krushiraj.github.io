<template>
    <span 
        id="cursor" 
        :style="{
            '--animation-duration': blinkSpeed+'s', 
            fontSize: (0.9*fontSize)+'rem'
        }"
    >&nbsp;</span>
</template>

<script>
export default {
    name: 'TerminalCursor',
    props: {
        blinkSpeed: {
            type: Number,
            default: 1
        },
        fontSize: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
@keyframes blink {
    0% {
        background-color: #000;
    }
    50% {
        background-color: #fff;
    }
    100% {
        background-color: #000;
    }
}

#cursor {
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-duration: var(--animation-duration);
}
</style>
