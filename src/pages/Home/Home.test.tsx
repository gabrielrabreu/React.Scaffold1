import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Home, { TEST_IDS } from "./Home";

describe("Home", () => {
  it("should render home", () => {
    render(<Home />);
  });

  it("should display heading", () => {
    const { getByTestId } = render(<Home />);

    const heading = getByTestId(TEST_IDS.heading);
    expect(heading).toHaveTextContent(/Home/i);
  });

  it("should display content", () => {
    const { getByTestId } = render(<Home />);

    const content = getByTestId(TEST_IDS.content);
    expect(content).toHaveTextContent(/This is the page content./i);
  });
});
