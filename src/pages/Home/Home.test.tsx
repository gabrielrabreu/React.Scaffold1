import { describe, expect, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { useNavigate } from "@tanstack/react-router";

import Home from "./Home";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("Home", () => {
  it("should render home correctly", () => {
    render(<Home />);
  });

  it("should display heading", () => {
    const { getByRole } = render(<Home />);

    const heading = getByRole("heading", { name: /home/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Home");
  });

  it("should display button", () => {
    const { getByRole } = render(<Home />);

    const button = getByRole("button", { name: /to login/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("To login");
  });

  it("should call navigate when the button is clicked", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByRole } = render(<Home />);

    const button = getByRole("button", { name: /to login/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith({ to: "/auth/login" });
  });
});
