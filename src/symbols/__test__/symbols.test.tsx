import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Symbols from "../symbols";

describe("Material Symbols component", () => {
  it("Icon should render correctly", () => {
    render(<Symbols>home</Symbols>);
    const symbols = screen.getByRole("span");
    expect(symbols).toBeDefined();
  });
});
