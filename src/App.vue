<template>
  <ReverseString />
  <PalindromeTester />
  <MultipleSelectBox />
  <WordFinder />
  <Translator />
</template>

<script>
import ReverseString from "@/components/ReverseString";
import PalindromeTester from "@/components/PalindromeTester";
import MultipleSelectBox from "@/components/MultipleSelectBox";
import WordFinder from "@/components/WordFinder";
import Translator from "@/components/Translator";

export default {
  name: "App",
  components: {
    WordFinder,
    MultipleSelectBox,
    PalindromeTester,
    ReverseString,
    Translator,
  },
};
</script>

<style scoped lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #5a2002
  margin: 10px
  //float: right
</style>
