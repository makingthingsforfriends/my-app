import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Clock from "./components/Clock";

it("should render clock", () => {
  render(<Clock />);
  const clockHeading = screen.getByTestId("clock-heading");
  expect(clockHeading).toBeInTheDocument();
});
