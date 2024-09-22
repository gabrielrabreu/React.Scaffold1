import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import FormField from "./FormField";

describe("FormField", () => {
  it("should render form field", () => {
    render(<FormField name="email" label="Email" />);
  });

  it("should display label", () => {
    const { getByText } = render(<FormField name="email" label="Email" />);

    const label = getByText(/email/i);

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "email");
  });

  it("should display input", () => {
    const { getByRole } = render(<FormField name="email" label="Email" />);

    const input = getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("should display errors when there are any", () => {
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

  it("should not display errors when there are none", () => {
    const { queryByRole } = render(
      <FormField name="email" label="Email" errors={[]} />
    );

    const errorMessage = queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
