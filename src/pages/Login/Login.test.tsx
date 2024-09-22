import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import Login from "./Login";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("Login", () => {
  it("should render login", () => {
    const { getByText } = render(<Login />);

    expect(getByText(/Welcome to Scaffold!/)).toBeInTheDocument();
    expect(getByText(/Please login to your account/)).toBeInTheDocument();
  });
});
