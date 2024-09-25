import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import { type ReactNode } from "react";
import { FaHouseChimney } from "react-icons/fa6";

import NavLink from "./NavLink";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: ReactNode }) => (
    <a href={to} data-testid="mock-link">
      {children}
    </a>
  ),
}));

describe("NavLink", () => {
  it("should render nav link", () => {
    render(<NavLink />);
  });

  it("should display icon", () => {
    const { getByTestId } = render(
      <NavLink icon={<FaHouseChimney data-testid="icon" />} />
    );

    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should have the correct link to", () => {
    const { getByTestId } = render(<NavLink to="/" />);

    const link = getByTestId("mock-link");
    expect(link).toHaveAttribute("href", "/");
  });
});
