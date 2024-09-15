import { expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

it("should render hello correctly", () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
