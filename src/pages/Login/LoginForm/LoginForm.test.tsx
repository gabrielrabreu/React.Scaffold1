import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";

import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

import { login } from "@/services/api/auth.service";

import LoginForm, { TEST_IDS } from "./LoginForm";

vi.mock("react-toastify");
vi.mock("@tanstack/react-router");
vi.mock("@/services/api/auth.service");

describe("LoginForm", () => {
  it("should render login form", () => {
    render(<LoginForm />);
  });

  it("should display email form field", () => {
    const { getByTestId } = render(<LoginForm />);

    const emailLabel = getByTestId(TEST_IDS.emailLabel);
    expect(emailLabel).toHaveTextContent(/Email/i);

    const emailInput = getByTestId(TEST_IDS.emailInput);
    expect(emailInput).toHaveAttribute("placeholder", "mail@gmail.com");
  });

  it("should display password form field", () => {
    const { getByTestId } = render(<LoginForm />);

    const passwordLabel = getByTestId(TEST_IDS.passwordLabel);
    expect(passwordLabel).toHaveTextContent(/Password/i);

    const passwordInput = getByTestId(TEST_IDS.passwordInput);
    expect(passwordInput).toHaveAttribute("placeholder", "Enter your password");
  });

  it("should display submit button", () => {
    const { getByTestId } = render(<LoginForm />);

    const submitButton = getByTestId(TEST_IDS.submitButton);
    expect(submitButton).toHaveTextContent(/Login/i);
  });

  it("should display error message when email is empty", async () => {
    const { getByTestId, queryByTestId } = render(<LoginForm />);

    const submitButton = getByTestId(TEST_IDS.submitButton);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    const emailErrors = queryByTestId(TEST_IDS.emailErrors);
    expect(emailErrors).toBeInTheDocument();
    expect(emailErrors).toHaveTextContent(/An email is required/i);
  });

  it("should display error message when password is empty", async () => {
    const { getByTestId, queryByTestId } = render(<LoginForm />);

    const submitButton = getByTestId(TEST_IDS.submitButton);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    const passwordErrors = queryByTestId(TEST_IDS.passwordErrors);
    expect(passwordErrors).toBeInTheDocument();
    expect(passwordErrors).toHaveTextContent(/A password is required/i);
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

    const { getByTestId } = render(<LoginForm />);

    const emailInput = getByTestId(TEST_IDS.emailInput);
    const passwordInput = getByTestId(TEST_IDS.passwordInput);
    const submitButton = getByTestId(TEST_IDS.submitButton);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: fakeEmail } });
      fireEvent.change(passwordInput, { target: { value: fakePassword } });
      fireEvent.click(submitButton);
    });

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith({
      email: fakeEmail,
      password: fakePassword,
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
  });

  it("should display error message when submit failed", async () => {
    const fakeEmail = "test@example.com";
    const fakePassword = "password123";
    const fakeError = "Login failed";

    vi.mocked(login).mockRejectedValue(new Error(fakeError));

    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByTestId } = render(<LoginForm />);

    const emailInput = getByTestId(TEST_IDS.emailInput);
    const passwordInput = getByTestId(TEST_IDS.passwordInput);
    const submitButton = getByTestId(TEST_IDS.submitButton);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: fakeEmail } });
      fireEvent.change(passwordInput, { target: { value: fakePassword } });
      fireEvent.click(submitButton);
    });

    expect(toast.error).toHaveBeenCalledWith(fakeError);
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
