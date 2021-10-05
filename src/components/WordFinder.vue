<template>
  <div id="wordFinder">
    <h2>Word Finder</h2>
    <input
      id="wordFinderInput"
      placeholder="Start entering here"
      v-model="value"
      v-on:keypress.enter="getWords()"
    />
    <button id="wordsFinderButton" v-on:click="getWords">get</button>
    {{ filtrate }}
  </div>
</template>

<script>
export default {
  name: "WordFinder",
  data() {
    return {
      value: "",
      words: [],
    };
  },
  methods: {
    async getWords() {
      const response = await fetch("http://localhost:3001/?q=" + this.value);
      this.words = await response.json();
    },
  },
  computed: {
    filtrate() {
      let filtratedWords = [];
      for (
        let i = 0;
        i < this.words.length && filtratedWords.length < 10;
        i++
      ) {
        filtratedWords.push(this.words[i]);
      }
      return filtratedWords;
    },
  },
};
</script>

<style scoped></style>
