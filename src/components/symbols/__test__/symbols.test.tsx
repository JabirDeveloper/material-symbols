import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Symbols from "../symbols";

describe("Material Symbols component", () => {
  it("Icon should render correctly", () => {
    render(<Symbols title="Material Icons">home</Symbols>);
    const symbols = screen.getByTitle("Material Icons");
    expect(symbols).toBeDefined();
  });
});
