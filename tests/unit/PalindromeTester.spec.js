import PalindromeTester from "../../src/components/PalindromeTester";
import { shallowMount } from "@vue/test-utils";

const palindrome = "А роза упала на лапу Азора";
const mirrorPalindrome = "Ahha";
const notAPalindrome = "Hello";

describe("PalindromeTester tests", () => {
  it("checks basic palindrome", async () => {
    const wrapper = shallowMount(PalindromeTester);
    await wrapper.find("#palindromeInput").setValue(palindrome);
    await wrapper.find("#palindromeButton").trigger("click");
    expect(wrapper.text()).toMatch("It's a palindrome, WOW!");
  });
  it("checks mirror palindrome", async () => {
    const wrapper = shallowMount(PalindromeTester);
    await wrapper.find("#palindromeInput").setValue(mirrorPalindrome);
    await wrapper.find("#palindromeButton").trigger("click");
    expect(wrapper.text()).toMatch("And it's a mirror palindrome, congrats!");
  });
  it("checks not a palindrome", async () => {
    const wrapper = shallowMount(PalindromeTester);
    await wrapper.find("#palindromeInput").setValue(notAPalindrome);
    await wrapper.find("#palindromeButton").trigger("click");
    expect(wrapper.text()).toMatch("It's not a palindrome, sowwy");
  });
});
