<template>
  <div class="componentWrapper">
    <div id="formWrapper">
      <h2>Word Finder</h2>
      <input
        id="wordFinderInput"
        placeholder="Start entering here"
        v-model="value"
        v-on:keypress.enter="getWords()"
      />
      <button id="wordsFinderButton" v-on:click="getWords">get</button>
    </div>
    <div id="listWrapper">
      <!--      <ul>-->
      <!--        <li v-for="(item, id) in words" v-bind:key="id">-->
      <!--          {{ item.name }}-->
      <!--          <span>{{ item.description }}</span>-->
      <!--        </li>-->
      <!--      </ul>-->
      {{ words }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WordFinder",
  data() {
    return {
      value: "",
      words: "",
      word: "",
    };
  },
  methods: {
    // async getWords() {
    //   const response = await fetch("http://localhost:3001/?q=" + this.value);
    //   this.words = await response.json();
    // },
    async getWords() {
      const response = await fetch("http://localhost:3001/?q=" + this.value);
      this.words = await response.json();
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

ul
  list-style: none inside
  text-align: left
  padding-left: 20%

li:hover
  cursor: help
  position: relative

li span
  font-size: 20px
  display: none

li:hover span
  border: #5a2002 1px dotted
  background-color: white
  padding: 5px
  display: block
  //!!! ^ important!!!
  left: 100px
  margin: 10px
  width: 500px
  height: auto
  position: absolute
  top: 1px
  text-decoration: none
</style>
