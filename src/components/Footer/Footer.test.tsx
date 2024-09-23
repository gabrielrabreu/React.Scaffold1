import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render footer", () => {
    render(<Footer />);
  });
});
