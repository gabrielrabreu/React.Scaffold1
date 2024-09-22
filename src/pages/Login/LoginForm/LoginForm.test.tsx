import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { useNavigate } from "@tanstack/react-router";

import LoginForm from "./LoginForm";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("LoginForm", () => {
  it("should render login form", () => {
    render(<LoginForm />);
  });

  it("should display email form field", () => {
    const { getByLabelText } = render(<LoginForm />);

    const emailField = getByLabelText(/email/i);
    expect(emailField).toBeInTheDocument();
  });

  it("should display password form field", () => {
    const { getByLabelText } = render(<LoginForm />);

    const passwordField = getByLabelText(/password/i);
    expect(passwordField).toBeInTheDocument();
  });

  it("should display error message when email is empty", async () => {
    const { findByText, getByRole } = render(<LoginForm />);

    const submitButton = getByRole("button", { name: /login/i });
    fireEvent.click(submitButton);

    const emailError = await findByText(/an email is required/i);

    expect(emailError).toBeInTheDocument();
  });

  it("should display error message when password is empty", async () => {
    const { findByText, getByRole } = render(<LoginForm />);

    const submitButton = getByRole("button", { name: /login/i });
    fireEvent.click(submitButton);

    const passwordError = await findByText(/a password is required/i);

    expect(passwordError).toBeInTheDocument();
  });

  it("should navigate to home after submitting valid form", async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByLabelText, getByRole } = render(<LoginForm />);

    const emailField = getByLabelText(/email/i);
    const passwordField = getByLabelText(/password/i);
    const submitButton = getByRole("button", { name: /login/i });

    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
    });
  });
});
