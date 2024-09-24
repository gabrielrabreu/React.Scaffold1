import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { FaHouseChimney } from "react-icons/fa6";

import NavMenu from "./NavMenu";

describe("NavMenu", () => {
  it("should render nav menu", () => {
    render(
      <NavMenu title="Menu">
        <li>Item 1</li>
      </NavMenu>
    );
  });

  it("should display icon", () => {
    const { getByTestId } = render(
      <NavMenu title="Menu" icon={<FaHouseChimney data-testid="icon" />}>
        <li>Item 1</li>
      </NavMenu>
    );

    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should display title", () => {
    const { getByText } = render(
      <NavMenu title="Menu">
        <li>Item 1</li>
      </NavMenu>
    );

    expect(getByText("Menu")).toBeInTheDocument();
  });

  it("should toggle dropdown on button click", () => {
    const { getByRole } = render(
      <NavMenu title="Menu">
        <li>Item 1</li>
      </NavMenu>
    );

    const button = getByRole("button", { name: /menu/i });

    const dropdown = getByRole("list");
    expect(dropdown).toHaveClass("hidden");

    fireEvent.click(button);
    expect(dropdown).not.toHaveClass("hidden");

    fireEvent.click(button);
    expect(dropdown).toHaveClass("hidden");
  });
});
