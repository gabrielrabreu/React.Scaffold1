import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import SocialButtons from "./SocialButtons";

describe("SocialButtons", () => {
  it("should render social buttons correctly", () => {
    render(<SocialButtons />);
  });

  it("should display google option", () => {
    const { getByAltText } = render(<SocialButtons />);

    const googleButton = getByAltText(/google logo/i);

    expect(googleButton).toBeInTheDocument();
  });
});
