import React from "react";
import { render, screen } from "@testing-library/react";
import App, { ORDER_ID } from "./App";

test("renders display Order with the correct order id", () => {
  render(<App />);
  const orderElement = screen.getByText(`Order: ${ORDER_ID}`);
  expect(orderElement).toBeInTheDocument();
});
