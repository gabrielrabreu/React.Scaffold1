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
  it("should render sidebar", () => {
    render(
      <NavLink title="Menu">
        <li>Item 1</li>''
      </NavLink>
    );
  });

  it("should display icon", () => {
    const { getByText, getByTestId } = render(
      <NavLink title="Menu" icon={<FaHouseChimney data-testid="icon" />}>
        <li>Item 1</li>''
      </NavLink>
    );

    expect(getByText("Menu")).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should display title", () => {
    const { getByText } = render(
      <NavLink title="Menu" to="/">
        <li>Item 1</li>''
      </NavLink>
    );

    expect(getByText("Menu")).toBeInTheDocument();
  });

  it("should have the correct link to", () => {
    const { getByTestId } = render(
      <NavLink title="Menu" to="/">
        {null}
      </NavLink>
    );

    const link = getByTestId("mock-link");
    expect(link).toHaveAttribute("href", "/");
  });
});
