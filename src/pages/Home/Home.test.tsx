import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Home from "./Home";

describe("Home", () => {
  it("should render home correctly", () => {
    render(<Home />);
  });

  it("should display heading", () => {
    const { getByRole } = render(<Home />);

    const heading = getByRole("heading", { name: /home/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Home");
  });
});
