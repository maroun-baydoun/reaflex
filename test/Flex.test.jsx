import React from "react";
import Renderer from "react-test-renderer";

import Flex from "../src/Flex";

describe("Flex", () => {
  const render = (props = {}) => Renderer.create(<Flex {...props} />).toJSON();

  it("Sets display:flex", () => {
    const tree = render();

    expect(tree).toHaveStyleRule("display", "flex");
  });

  it("Sets display:inline-flex", () => {
    const tree = render({ inline: true });

    expect(tree).toHaveStyleRule("display", "inline-flex");
  });

  it("Sets flex-direction", () => {
    const tree = render({ direction: "row" });

    expect(tree).toHaveStyleRule("flex-direction", "row");
  });

  it("Sets align-items", () => {
    const tree = render({ alignItems: "flex-start" });

    expect(tree).toHaveStyleRule("align-items", "flex-start");
  });

  it("Sets justify-content", () => {
    const tree = render({ justifyContent: "space-between" });

    expect(tree).toHaveStyleRule("justify-content", "space-between");
  });

  it("Sets flex-wrap", () => {
    const tree = render({ wrap: "wrap" });

    expect(tree).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("Sets flex-flow", () => {
    const tree = render({ flow: "column wrap" });

    expect(tree).toHaveStyleRule("flex-flow", "column wrap");
  });

  it("Sets gap", () => {
    const tree = render({ gap: "10px" });

    expect(tree).toHaveStyleRule("gap", "10px");
  });

  it("Sets row-gap", () => {
    const tree = render({ rowGap: "10px" });

    expect(tree).toHaveStyleRule("row-gap", "10px");
  });

  it("Sets column-gap", () => {
    const tree = render({ columnGap: "10px" });

    expect(tree).toHaveStyleRule("column-gap", "10px");
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
