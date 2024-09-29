import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should render input", () => {
    render(<Input />);
  });
});
