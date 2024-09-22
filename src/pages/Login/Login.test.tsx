import { afterEach, describe, expect, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { useNavigate } from "@tanstack/react-router";

import Login from "./Login";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("Login", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the Login page correctly", () => {
    const { getByAltText, getByRole, getByLabelText } = render(<Login />);

    const heading = getByRole("heading", {
      name: /welcome to scaffold/i,
    });
    expect(heading).toBeInTheDocument();

    const socialButton = getByAltText(/google logo/i);
    expect(socialButton).toBeInTheDocument();

    const emailField = getByLabelText(/email/i);
    const passwordField = getByLabelText(/password/i);
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it("displays error messages for empty fields", async () => {
    const { findByText, getByRole } = render(<Login />);

    const submitButton = getByRole("button", { name: /sign in/i });
    fireEvent.click(submitButton);

    const emailError = await findByText(/an email is required/i);
    const passwordError = await findByText(/a password is required/i);

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("navigates to home after submitting valid form", async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByLabelText, getByRole } = render(<Login />);

    const emailField = getByLabelText(/email/i);
    const passwordField = getByLabelText(/password/i);
    const submitButton = getByRole("button", { name: /sign in/i });

    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
    });
  });
});
