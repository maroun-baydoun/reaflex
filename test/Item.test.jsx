import React from "react";
import Renderer from "react-test-renderer";

import Item from "../src/Item";

describe("Item", () => {
  const render = (props = {}) => Renderer.create(<Item {...props} />).toJSON();

  it("Sets order", () => {
    const tree = render({ order: 1 });

    expect(tree).toHaveStyleRule("order", "1");
  });

  it("Sets align-self", () => {
    const tree = render({ alignSelf: "flex-end" });

    expect(tree).toHaveStyleRule("align-self", "flex-end");
  });

  it("Sets flex-grow", () => {
    const tree = render({ grow: 1 });

    expect(tree).toHaveStyleRule("flex-grow", "1");
  });

  it("Sets flex-shrink", () => {
    const tree = render({ shrink: 1 });

    expect(tree).toHaveStyleRule("flex-shrink", "1");
  });

  it("Renders a div element", () => {
    const tree = render();

    expect(tree.type).toBe("div");
  });

  it("Renders a different element", () => {
    const tree = render({ as: "span" });

    expect(tree.type).toBe("span");
  });
});
