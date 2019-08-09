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
    const submitBtn = getByText(/submit/i)
  });
});
