import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { type ReactNode } from "react";

import Expanded from "./Expanded";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: ReactNode }) => (
    <a href={to} data-testid="mock-link">
      {children}
    </a>
  ),
}));

describe("Expanded", () => {
  it("should render expanded", () => {
    render(<Expanded onToggle={() => {}} />);
  });

  it("should display nav links", () => {
    const { getAllByTestId } = render(<Expanded onToggle={() => {}} />);

    const navLinks = getAllByTestId("mock-link");

    expect(navLinks.length).toBe(2);

    expect(navLinks[0]).toHaveTextContent("Home");
    expect(navLinks[0]).toHaveAttribute("href", "/");

    expect(navLinks[1]).toHaveTextContent("Profile");
    expect(navLinks[1]).toHaveAttribute("href", "/profile");
  });

  it("should call onToggle when click toggle button", () => {
    const mockOnToggle = vi.fn();

    const { getByRole } = render(<Expanded onToggle={mockOnToggle} />);

    fireEvent.click(getByRole("button"));

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
