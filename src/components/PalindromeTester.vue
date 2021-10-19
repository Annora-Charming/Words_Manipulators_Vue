<template>
  <div class="componentWrapper">
    <h2>Palindrome Tester</h2>
    <input
      v-on:keypress.enter="check(value)"
      id="palindromeInput"
      v-model="value"
    />
    <p>lemme see if this is a</p>
    <button id="palindromeButton" v-on:click="value ? check(value) : ''">
      palindrome
    </button>
    <p v-show="!palindrome">It's not a palindrome, sowwy</p>
    <p v-show="palindrome">It's a palindrome, WOW!</p>
    <p v-show="mirror">And it's a mirror palindrome, congrats!</p>
  </div>
</template>

<script>
export default {
  name: "PalindromeTester",
  data() {
    return {
      value: "",
      mirror: false,
      palindrome: false,
      mirrorLetters: [
        "а",
        "д",
        "ж",
        "и",
        "м",
        "н",
        "о",
        "п",
        "т",
        "ф",
        "х",
        "ш",
        "a",
        "h",
        "i",
        "m",
        "o",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
      ],
    };
  },
  methods: {
    check(value) {
      const filteredArr = this.prepare(value);
      this.mirror = false;
      for (let i = 0; i < filteredArr.length / 2; i++) {
        if (filteredArr[i] === filteredArr[filteredArr.length - i - 1]) {
          this.palindrome = true;
          if (filteredArr.length % 2 === 0) {
            this.mirrorCheck(value, filteredArr);
          }
        } else {
          this.palindrome = false;
          break;
        }
      }
    },
    prepare(value) {
      const filteredValue = value.toLowerCase().split("");
      return filteredValue.filter((letter) => letter !== " ");
    },
    mirrorCheck(value, filteredArr) {
      for (let i = 0; i < filteredArr.length / 2; i++) {
        if (this.mirrorLetters.includes(filteredArr[i])) {
          this.mirror = true;
        } else {
          this.mirror = false;
          break;
        }
      }
    },
  },
};
</script>

<style scoped lang="sass">
#palindromeInput
  font: 30px "Monospaced"
  color: antiquewhite
  width: 500px
  background-color: black
  border-radius: 20px
  margin: 10px
  padding: 5px
  text-align: center

button
  font-size: 50px
  border-radius: 20px
  padding: 5px
  width: auto
</style>
