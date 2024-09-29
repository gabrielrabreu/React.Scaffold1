import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button />);
  });

  it("should display children when provided", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText(/Click me/i)).toBeDefined();
  });
});
