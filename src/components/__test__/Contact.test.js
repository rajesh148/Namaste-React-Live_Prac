import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should be load contact page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should be load send message button", () => {
  render(<Contact />);

  const btn = screen.getByRole("button", { name: /send Message/i });

  expect(btn).toBeInTheDocument();
});

test("Should be check if there are 3 input fileds", () => {
  render(<Contact />);
  const inputEl = screen.getAllByRole("textbox");
  expect(inputEl).toHaveLength(3);
});

test("Should be check name input field", () => {
  render(<Contact />);

  const inputEl = screen.getByPlaceholderText(/Your Name/i);
  expect(inputEl).toBeInTheDocument();
});
