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

    expect(navLinks.length).toBe(3);

    expect(navLinks[0]).toHaveTextContent("Home");
    expect(navLinks[0]).toHaveAttribute("href", "/");
    
    expect(navLinks[1]).toHaveTextContent("Profile");
    expect(navLinks[1]).toHaveAttribute("href", "/profile");
    
    expect(navLinks[2]).toHaveTextContent("Login");
    expect(navLinks[2]).toHaveAttribute("href", "/auth/login");
  });
});
