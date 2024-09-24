import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Profile from "./Profile";

describe("Profile", () => {
  it("should render profile correctly", () => {
    render(<Profile />);
  });

  it("should display heading", () => {
    const { getByRole } = render(<Profile />);

    const heading = getByRole("heading", { name: /profile/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Profile");
  });
});
