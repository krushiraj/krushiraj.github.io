<template>
    <span id="readOnlyContainer">
        <span v-for="(text, id) in finalTexts" v-bind:key="id">
            {{ text }}
            <br v-if="breakOnNewLine"/>
        </span>
    </span>
</template>

<script>
export default {
    name: 'TerminalReadOnly',
    props: {
        readOnlyText: {
            type: String,
            default: ''
        },
        breakOnNewLine: {
            type: Boolean,
            default: false
        },
        simulateTyping: {
            type: Boolean,
            default: false
        },
        typeSpeed: {
            type: Number,
            default: 1
        }
    },
    computed: {
        finalTexts: ({breakOnNewLine, readOnlyText}) => {
            if (breakOnNewLine) {
                let lines = readOnlyText.split('\n');
                return lines.map(
                    line => line.trim()
                ).filter(
                    trimmedLine => trimmedLine != ''
                )
            } else {
                return [readOnlyText]
            }
        }
    }
}
</script>

<style scoped>
span {
    word-break: break-all;
    hyphens: auto;
    color: green;
}
</style>
