import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../components/counter/counter.js";

describe("<Counter />", () => {
  it("is alive at application start", () => {
    let app = shallow(<Counter />);
    expect(app.find("a").exists()).toBeTruthy();
  });

  it("counts down on down click", () => {
    let app = mount(<Counter />);
    let button = app.find("a.down-clicker");
    button.simulate("click");
    expect(app.state("polarity")).toBe("negative");
  });

  it("counts up on up click", () => {
    let app = mount(<Counter />);
    let button = app.find("a.up-clicker");
    button.simulate("click");
    expect(app.state("polarity")).toBe("positive");
  });
});
