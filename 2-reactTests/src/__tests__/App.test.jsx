import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import ChangeOnClick from "../components/ChangeClick";

// Example test
describe("App Component", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

// Test for Click Text change
describe("App Component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<ChangeOnClick />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<ChangeOnClick />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
