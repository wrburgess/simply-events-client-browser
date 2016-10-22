import React from "react";
import { expect } from "chai";
import { mount, shallow, render } from "enzyme";
import App from "../../src/components/app";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";

describe("<App />", () => {
  it("contains a Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.descendants(Header);
  });

  it("contains a Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.descendants(Footer);
  });

  it("contains the correct html", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.id("main");
    expect(wrapper.find("#content")).to.have.html("<div id=\"content\">This is a test with React</div>")
  });
});
