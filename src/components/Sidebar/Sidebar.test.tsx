import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

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

  it("should display nav", () => {
    const { getAllByTestId } = render(<Sidebar />);

    const navLinks = getAllByTestId("mock-link");

    expect(navLinks.length).toBe(1);
    expect(navLinks[0]).toHaveTextContent("Home");
    expect(navLinks[0]).toHaveAttribute("href", "/");
  });
});
