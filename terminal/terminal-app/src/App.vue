<template>
  <div id="app" tabindex="0" v-on:focus="setFocus">
    <TerminalContainer/>
  </div>
</template>

<script>
import TerminalContainer from './components/TerminalContainer.vue';

export default {
  name: 'app',
  components: {
    TerminalContainer
  },
  methods: {
    setFocus() {
      document.getElementById('terminal-container').focus();
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  color: green;
}
#app {
  font-family: monospace ;
  height: 100%;
  width: 100%;
}
</style>
