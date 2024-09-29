import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  it("should render label", () => {
    render(<Label />);
  });

  it("should display children when provided", () => {
    const { getByText } = render(<Label>My label</Label>);

    expect(getByText(/My label/i)).toBeDefined();
  });
});
