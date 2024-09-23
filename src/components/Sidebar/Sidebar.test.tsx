import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should render sidebar", () => {
    render(<Sidebar />);
  });
});
