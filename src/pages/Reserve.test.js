import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Reserve from "./Reserve";

test("renders the Form Heading", () => {
  render(
    <Router>
      <Reserve />
    </Router>
  );

  const formHeading = screen.getByText("Reserve a Table");
  expect(formHeading).toBeInTheDocument();
});