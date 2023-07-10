import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders display Hello Word", () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello Word/i);
  expect(helloElement).toBeInTheDocument();
});
