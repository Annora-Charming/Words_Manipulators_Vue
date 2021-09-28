import ReverseString from "../../src/components/ReverseString";
import { shallowMount } from "@vue/test-utils";

const testValue = "Hello";
const reversedTestValue = "olleH";

describe("Reverse String tests", () => {
  it("checks that the value reverses", async () => {
    const wrapper = shallowMount(ReverseString);
    const input = wrapper.find("#reverserInput");
    await input.setValue(testValue);
    expect(wrapper.text()).toMatch(reversedTestValue);
  });
  it("checks that button click adds value to whole value", async () => {
    const wrapper = shallowMount(ReverseString);
    const button = wrapper.find("#meow");
    await button.trigger("click");
    expect(wrapper.text()).toMatch(")=´ω`=(");
    await button.trigger("click");
    expect(wrapper.text()).toMatch(")=´ω`=()=´ω`=(");
  });
});
