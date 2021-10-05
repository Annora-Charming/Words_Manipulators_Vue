<template>
  <div id="multipleSelectBox">
    <h2>Sound Selector</h2>
    <div>
      <input
        id="selectBoxInput"
        v-on:keypress.enter="addToList(value)"
        v-model="value"
      />
      <br />
      <button id="selectBoxButton" v-on:click="value ? addToList(value) : ''">
        Add to list
      </button>
      <p>You say: {{ chosenSound.join(" and ") }}</p>
      <select multiple v-model="chosenSound">
        <option v-for="(item, id) in soundsList" v-bind:key="id">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleSelectBox",
  data() {
    return {
      value: "",
      soundsList: ["ribbit", "squeak", "purr"],
      chosenSound: [],
    };
  },
  computed: {},
  methods: {
    addToList(value) {
      if (value.trim().length > 0) {
        this.soundsList.push(value.trim());
      }
      this.value = "";
    },
  },
};
</script>

<style scoped lang="sass">
#multipleSelectBox
  padding: 10px
  margin: 10px
  border: 2px dashed #5a2002
  border-radius: 20px
  display: flex
  flex-direction: column
  align-items: center
  font: 30px "Monospaced"

ul, select
  border: 2px dashed #5a2002
  border-radius: 20px

select
  width: 500px
  font-size: 20px
  padding: 10px
  text-align: center

#selectBoxInput
  font: 30px "Monospaced"
  color: antiquewhite
  width: 500px
  background-color: black
  border-radius: 20px
  margin: 10px
  padding: 5px
  text-align: center

button
  font-size: 20px
  width: auto
</style>
