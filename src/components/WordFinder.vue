<template>
  <div class="componentWrapper">
    <div id="formWrapper">
      <h2>Word Finder an Translator</h2>
      <input
        id="wordFinderInput"
        placeholder="Start entering here"
        v-model="value"
        v-on:keypress.enter="getWords()"
      />
      <button id="wordsFinderButton" v-on:click="getWords">get words</button>
      {{ translation }}
    </div>
    <div id="listWrapper">
      <ul>
        <li
          v-for="(item, id) in words"
          v-bind:key="id"
          v-on:click="getTranslation(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <p style="font-size: 15px">Click on word to get its translation</p>
  </div>
</template>

<script>
export default {
  name: "WordFinder",
  data() {
    return {
      value: "",
      words: [],
      word: "",
      translation: "",
    };
  },
  methods: {
    async getWords() {
      const response = await fetch("http://localhost:3001/?q=" + this.value);
      this.words = await response.json();
    },
    async getTranslation(item) {
      const response = await fetch("http://localhost:3001/translate?z=" + item);
      this.translation = await response.json();
    },
  },
  computed: {},
};
</script>

<style scoped lang="sass">
#formWrapper
  display: flex
  flex-direction: column
  align-items: center

#wordFinderInput
  font: 30px "Monospaced"
  color: antiquewhite
  width: 500px
  background-color: black
  border-radius: 20px
  margin: 10px
  padding: 5px
  text-align: center

#wordsFinderButton
  font-size: 20px
  width: auto

#listWrapper
  width: 50%
  padding: 0 20px
  margin-top: 10px
  border: 2px dashed #5a2002
  border-radius: 20px

ul
  list-style: none inside
  text-align: left
  padding-left: 20%

li:hover
  cursor: help
  position: relative
</style>
