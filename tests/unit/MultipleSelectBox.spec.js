import MultipleSelectBox from "../../src/components/MultipleSelectBox";
import { shallowMount } from "@vue/test-utils";

describe("Multiple Select Box tests", () => {
  it("adds an option to the list", async () => {
    const wrapper = shallowMount(MultipleSelectBox);
    expect(wrapper.text()).not.toMatch("hello");
    await wrapper.find("#selectBoxInput").setValue("hello");
    await wrapper.find("#selectBoxButton").trigger("click");
    expect(wrapper.text()).toMatch("hello");
  });
  it("selects one option", async () => {
    const wrapper = shallowMount(MultipleSelectBox);
    const options = wrapper.find("select").findAll("option");
    expect(wrapper.text()).not.toMatch("You say: squeak");
    await options.at(1).setSelected();
    expect(wrapper.text()).toMatch("You say: squeak");
  });
  it("selects several options", async () => {
    const wrapper = shallowMount(MultipleSelectBox);
    const options = wrapper.find("select").findAll("option");
    await options.at(0).setSelected();
    await options.at(2).setSelected();
    expect(wrapper.text()).toMatch("You say: ribbit and purr");
  });
});
