import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("should render button correctly if action is not passed", () => {
    render(<Button />);
    const element = screen.getByText("Click to add");

    expect(element).toBeInTheDocument();
  });
  it("should render button correctly if action is passed", () => {
    render(<Button action="subtract" />);
    const element = screen.getByText("Click to subtract");

    expect(element).toBeInTheDocument();
  });
});
