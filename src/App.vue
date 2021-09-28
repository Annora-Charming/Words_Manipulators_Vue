<template>
  <ReverseString />
  <PalindromeTester />
</template>

<script>
import ReverseString from "./components/ReverseString";
import PalindromeTester from "./components/PalindromeTester";

export default {
  name: "App",
  components: { PalindromeTester, ReverseString },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #5a2002
  margin: 10px
  //float: right
</style>
