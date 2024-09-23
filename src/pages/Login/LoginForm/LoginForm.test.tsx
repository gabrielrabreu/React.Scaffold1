import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

import { login } from "@/services/api/auth.service";

import LoginForm from "./LoginForm";

vi.mock("react-toastify");
vi.mock("@tanstack/react-router");
vi.mock("@/services/api/auth.service");

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
    const fakeEmail = "test@example.com";
    const fakePassword = "password123";
    const fakeUsername = "test";

    const mockLogin = vi.mocked(login).mockResolvedValue({
      email: fakeEmail,
      username: fakeUsername,
    });

    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByLabelText, getByRole } = render(<LoginForm />);

    const emailField = getByLabelText(/email/i);
    const passwordField = getByLabelText(/password/i);
    const submitButton = getByRole("button", { name: /login/i });

    fireEvent.change(emailField, { target: { value: fakeEmail } });
    fireEvent.change(passwordField, { target: { value: fakePassword } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledTimes(1);
      expect(mockLogin).toHaveBeenCalledWith({
        email: fakeEmail,
        password: fakePassword,
      });
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
    });
  });

  it("should display error message when submit failed", async () => {
    const fakeEmail = "test@example.com";
    const fakePassword = "password123";
    const fakeError = "Login failed";

    vi.mocked(login).mockRejectedValue(new Error(fakeError));

    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByLabelText, getByRole } = render(<LoginForm />);

    const emailField = getByLabelText(/email/i);
    const passwordField = getByLabelText(/password/i);
    const submitButton = getByRole("button", { name: /login/i });

    fireEvent.change(emailField, { target: { value: fakeEmail } });
    fireEvent.change(passwordField, { target: { value: fakePassword } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(fakeError);
    });

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
