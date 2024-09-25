import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { type ReactNode } from "react";

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
    const { getByTestId } = render(<Sidebar />);

    expect(getByTestId("expanded-mode")).toBeInTheDocument();
  });

  it("should change mode when toggle is clicked", () => {
    const { getByTestId } = render(<Sidebar />);

    expect(getByTestId("expanded-mode")).toBeInTheDocument();
    fireEvent.click(getByTestId("toggle"));
    expect(getByTestId("collapsed-mode")).toBeInTheDocument();
    fireEvent.click(getByTestId("toggle"));
    expect(getByTestId("expanded-mode")).toBeInTheDocument();
  });
});
