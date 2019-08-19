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
  --bg-color: #000;
  --font-color: #fff;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--font-color);
}
#app {
  font-family: monospace ;
  height: 100%;
  width: 100%;
}
span ::selection {
	color: var(--bg-color);
	background-color: var(--font-color);
}
</style>
