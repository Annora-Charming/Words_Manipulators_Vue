<template>
  <div class="componentWrapper">
    <div id="formWrapper">
      <h2>Translator</h2>
      <input
        id="translatorInput"
        placeholder="Start entering here"
        v-model="value"
        v-on:keypress.enter="getTranslation()"
      />
      <button id="translatorButton" v-on:click="getTranslation()">
        translate
      </button>
      <div id="translationWrapper">
        {{ translation }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordFinder",
  data() {
    return {
      value: "",
      word: "",
      translation: "",
    };
  },
  methods: {
    async getTranslation() {
      const response = await fetch(
        "http://localhost:3001/translator?x=" + this.value
      );
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

#translatorInput
  font: 30px "Monospaced"
  color: antiquewhite
  width: 500px
  background-color: black
  border-radius: 20px
  margin: 10px
  padding: 5px
  text-align: center

#translatorButton
  font-size: 20px
  width: auto

#translationWrapper
  padding: 0 20px
  margin-top: 10px
  border: 2px dashed #5a2002
  border-radius: 20px
</style>
