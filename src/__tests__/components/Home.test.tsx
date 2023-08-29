import { expect, test } from "vitest";
import Home from "../../components/Home";
import { render, screen } from "@testing-library/react";

test("It renders the component", () => {
  const props = { name: "Home", workflows: [], setWorkflow: (arg: string) => {}  };
  render(<Home {...props} />);
  expect(screen.getByText(/Home/i)).toBeDefined();
});
