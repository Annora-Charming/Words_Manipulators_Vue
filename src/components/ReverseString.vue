<template>
  <div class="componentWrapper">
    <h2>String Reverser</h2>
    <input id="reverserInput" v-model="value" />
    <div id="buttons">
      <button id="meow" v-on:click="value = value + '(=`ω´=)'">meow</button>
      <button v-on:click="value = value + 'U・ᴥ・U'">woof</button>
      <button v-on:click="value = value + 'ʕಠᴥಠʔ'">roar</button>
      <button v-on:click="value = value + '／(˃ᆺ˂)＼'">bun bun</button>
      <button v-on:click="value = value + '(◉Θ◉)'">hoot hoot</button>
      <button v-on:click="value = 'ERROR'">ERROR</button>
      <button v-on:click="value = ''">Clear all</button>
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

<style lang="sass">
.componentWrapper
  padding: 10px
  margin: 10px
  border: 2px dashed #5a2002
  border-radius: 20px
  display: flex
  flex-direction: column
  align-items: center
  font: 30px "Monospaced"

#buttons
  width: 700px
  display: flex
  align-items: center
  justify-content: space-between

button
  font-size: 20px
  width: auto

#reverserInput
  font: 30px "Monospaced"
  color: antiquewhite
  width: 500px
  background-color: black
  border-radius: 20px
  margin: 10px
  padding: 5px
  text-align: center
</style>
