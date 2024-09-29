import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Profile, { TEST_IDS } from "./Profile";

describe("Profile", () => {
  it("should render profile", () => {
    render(<Profile />);
  });

  it("should display heading", () => {
    const { getByTestId } = render(<Profile />);

    const heading = getByTestId(TEST_IDS.heading);
    expect(heading).toHaveTextContent(/Profile/i);
  });

  it("should display content", () => {
    const { getByTestId } = render(<Profile />);

    const content = getByTestId(TEST_IDS.content);
    expect(content).toHaveTextContent(/This is the page content./i);
  });
});
