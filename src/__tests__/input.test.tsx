import { expect, test } from "vitest";
import Input from "../components/Input";
import { render, screen } from "@testing-library/react";

test("It has the proper input text", () => {
  render(<Input />);
  expect(screen.getByText(/Input/i)).toBeDefined();
});
