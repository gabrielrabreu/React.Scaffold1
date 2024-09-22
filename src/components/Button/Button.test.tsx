import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders the button", () => {
    const { getByText } = render(
      <Button>
        <h4>Click me</h4>
      </Button>
    );

    expect(getByText("Click me")).toBeDefined();
  });
});
