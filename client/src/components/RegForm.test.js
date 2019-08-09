import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import FormikRegForm from "./RegForm";

describe("<FormikRegForm />", () => {
  it("renders without crashing", () => {
    render(<FormikRegForm />);
  });
  it("submit button click", () => {
    const { getByText } = render(<FormikRegForm />);
    fireEvent(
      getByText("Submit"),
      new MouseEvent("click")
    );
    // const submitBtn = getByText(/submit/i);
    // fireEvent.click(submitBtn);
    // expect(clicked).toBe(true)
  });
});
