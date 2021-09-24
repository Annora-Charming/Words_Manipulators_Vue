<template>
  <ReverseString />
</template>

<script>
import ReverseString from "./components/ReverseString";

export default {
  name: "App",
  components: { ReverseString },
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
