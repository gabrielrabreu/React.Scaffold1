import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";

import AccountDropdown from "./AccountDropdown";

vi.mock("@/hooks/useOutsideClick");

// TODO: Add tests for when dropdown opened

describe("AccountDropdown", () => {
  it("should render account dropdown", () => {
    render(<AccountDropdown />);
  });
});
