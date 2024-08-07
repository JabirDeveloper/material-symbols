import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Symbols from "../symbols";

describe("Material Symbols component", () => {
  it("should render the icon correctly", () => {
    const { container } = render(<Symbols>home</Symbols>);
    expect(container.querySelector("span")).not.toBeNull(); // or expect(symbols).toBeDefined();
  });
});
