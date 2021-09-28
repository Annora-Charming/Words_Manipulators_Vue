<template>
  <div>
    <h2>String Reverser</h2>
    <input id="reverserInput" v-model="value" />
    <div id="buttons">
      <button id="meow" v-on:click="value = value + '(=`ω´=)'">meow</button>
    </div>
    {{ reversedString }}
  </div>
</template>

<script>
export default {
  name: "ReverseString",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    reversedString() {
      return this.value.split("").reverse().join("");
    },
  },
};
</script>

<style scoped lang="sass"></style>
