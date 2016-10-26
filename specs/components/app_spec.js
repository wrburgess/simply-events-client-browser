import React from "react";
import { expect } from "chai";
import { mount, shallow, render } from "enzyme";
import App from "../../src/components/App";
import Header from "../../src/containers/HeaderContainer";
import Footer from "../../src/containers/FooterContainer";

describe("<App />", () => {
  it("contains a HeaderContainer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.descendants(Header);
  });

  it("contains a FooterContainer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.descendants(Footer);
  });

  it('contains the correct html',()=>{
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.id("window");
    expect(wrapper.find("#content")).to.have.html("<div id=\"content\">This is a test with React</div>");
  });
});
