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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
