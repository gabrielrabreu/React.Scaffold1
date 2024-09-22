import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import FormField from "./FormField";

describe("FormField", () => {
  it("should render the label and input", () => {
    const { getByText, getByRole } = render(
      <FormField name="email" label="Email" errors={[]} />
    );

    const label = getByText("Email");
    const input = getByRole("textbox");

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "email");
    expect(input).toBeInTheDocument();
  });

  it("render errors when there are any", () => {
    const errors = ["Email is required", "Must be a valid email"];

    const { getByRole } = render(
      <FormField name="email" label="Email" errors={errors} />
    );

    const errorMessage = getByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Email is required, Must be a valid email"
    );
  });

  it("should not render errors when there are none", () => {
    const { queryByRole } = render(
      <FormField name="email" label="Email" errors={[]} />
    );

    const errorMessage = queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
