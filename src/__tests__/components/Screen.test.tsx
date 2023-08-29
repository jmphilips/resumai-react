import { test, expect } from "vitest";
import Screen from "../../components/Screen";
import { render, screen } from "@testing-library/react";

test("It has the proper input text", () => {
  const props = { name: "Screen" };
  render(<Screen {...props} />);
  expect(screen.getByText(/Screen/i)).toBeDefined();
});
