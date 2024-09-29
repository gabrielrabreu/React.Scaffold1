import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { type ReactNode } from "react";

import { TEST_IDS as EXPANDED_TEST_IDS } from "./Expanded";
import { TEST_IDS as COLLAPSED_TEST_IDS } from "./Collapsed";
import Sidebar from "./Sidebar";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: ReactNode }) => (
    <a href={to} data-testid="mock-link">
      {children}
    </a>
  ),
}));

describe("Sidebar", () => {
  it("should render sidebar", () => {
    render(<Sidebar />);
  });

  it("should be on expanded mode for default", () => {
    const { queryByTestId } = render(<Sidebar />);

    expect(queryByTestId(EXPANDED_TEST_IDS.aside)).toBeInTheDocument();
  });

  it("should change mode when toggle is clicked", () => {
    const { queryByTestId, getByTestId } = render(<Sidebar />);

    expect(queryByTestId(EXPANDED_TEST_IDS.aside)).toBeInTheDocument();
    fireEvent.click(getByTestId(EXPANDED_TEST_IDS.toggleButton));
    expect(queryByTestId(COLLAPSED_TEST_IDS.aside)).toBeInTheDocument();
    fireEvent.click(getByTestId(COLLAPSED_TEST_IDS.toggleButton));
    expect(queryByTestId(EXPANDED_TEST_IDS.aside)).toBeInTheDocument();
  });
});
