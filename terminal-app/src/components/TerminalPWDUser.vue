<template>
  <span id="user-pwd">
    <TerminalReadOnly :readOnlyText="`${username}@${sysname}:${pwd}>`" />
  </span>
  <!--This inherits the Terminal Read Only tag-->
</template>

<script>
/* eslint-disable */
import TerminalReadOnly from "./TerminalReadOnly";

export default {
  name: "TerminalPWDUser",
  components: {
    TerminalReadOnly
  },
  props: {
    username: {
      type: String,
      required: true
    },
    sysname: {
      type: String,
      default: "MiniTerminal"
    },
    pwd: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
