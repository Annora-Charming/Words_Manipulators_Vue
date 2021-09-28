<template>
  <div id="palindromeTester">
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
  computed: {},
  methods: {
    check(value) {
      let filteredArr = this.prepare(value);
      this.mirror = false;
      if (filteredArr.length % 2 === 0) {
        this.mirrorCheck(value, filteredArr);
      }
      for (let i = 0; i < filteredArr.length / 2; i++) {
        if (filteredArr[i] === filteredArr[filteredArr.length - i - 1]) {
          this.palindrome = true;
        } else {
          this.palindrome = false;
          break;
        }
      }
    },
    prepare(value) {
      let filteredValue = value.toLowerCase().split("");
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

<style scoped></style>
