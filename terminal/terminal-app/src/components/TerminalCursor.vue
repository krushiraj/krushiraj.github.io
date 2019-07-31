<template>
    <span 
        class="cursor" 
        :style="{
            '--animation-duration': blinkSpeed+'s', 
            fontSize: (0.9*fontSize)+'rem'
        }"
    >{{_charBeneath}}</span>
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
        },
        charBeneath: {
            type: String,
            default: ' ' 
            //equivalent to &nbsp;
        }
    },
    computed: {
        _charBeneath({charBeneath}) {
            return charBeneath.replace(/\s/g, '\u00a0')
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

.cursor {
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-duration: var(--animation-duration);
}
</style>
