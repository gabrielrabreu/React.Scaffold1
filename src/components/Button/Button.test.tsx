import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button />);
  });

  it("should display children when provided", () => {
    const { getByText } = render(
      <Button>
        <h4>Click me</h4>
      </Button>
    );

    expect(getByText(/click me/i)).toBeDefined();
  });
});
