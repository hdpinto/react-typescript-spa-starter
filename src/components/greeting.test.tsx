import "jest";
import React from "react";
import { render } from "@testing-library/react";

import { Greeting } from "./greeting";

describe("greeting.tsx", () => {
  it("should render", () => {
    const { getByTestId } = render(<Greeting />);

    expect(getByTestId("component-greeting")).toBeTruthy();
  });
  it("should display prompt if no name entered", () => {
    const { getByText } = render(<Greeting />);

    expect(getByText("Please enter your name")).toBeTruthy();
  });
});
