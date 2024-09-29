import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import Login, { TEST_IDS } from "./Login";

vi.mock("@tanstack/react-router");

describe("Login", () => {
  it("should render login", () => {
    render(<Login />);
  });

  it("should display heading", () => {
    const { getByTestId } = render(<Login />);

    const heading = getByTestId(TEST_IDS.heading);
    expect(heading).toHaveTextContent(/Welcome to Scaffold!/i);
  });

  it("should display sub heading", () => {
    const { getByTestId } = render(<Login />);

    const subHeading = getByTestId(TEST_IDS.subHeading);
    expect(subHeading).toHaveTextContent(/Please login to your account/i);
  });
});
