import React from "react";
import renderer, {
  ReactTestRenderer,
  ReactTestRendererJSON,
} from "react-test-renderer";
import App from "../../../App";

describe("<App />", () => {
  test("has 1 child", () => {
    const tree: ReactTestRenderer = renderer.create(<App />);
    expect((tree.toJSON() as ReactTestRendererJSON).children?.length).toBe(1);
  });
});
