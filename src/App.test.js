import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  test("renders card holder", () => {
    const { getByTestId } = render(<App />);
    const classHolder = getByTestId("options-test");
    expect(classHolder).toBeInTheDocument();
  });
});
