import React from "react";
import Renderer from "react-test-renderer";

import Index from "../src/Flex";

describe("Index", () => {
  const render = (props = {}) => Renderer.create(<Index {...props} />).toJSON();

  it("Renders a div element", () => {
    const tree = render();

    expect(tree.type).toBe("div");
  });

  it("Renders a different element", () => {
    const tree = render({ as: "span" });

    expect(tree.type).toBe("span");
  });
});
