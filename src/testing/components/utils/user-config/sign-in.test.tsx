import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import SignIn, { TestId } from "@/components/utils/user-config/sign-in";

describe("Sign In", () => {
  beforeEach(cleanup);

  it("renders the form", () => {
    render(<SignIn />);
    const form = screen.getByTestId(TestId.FORM);

    expect(form).toBeInTheDocument();
  });

  it("renders the email field", () => {
    render(<SignIn />);
    const emailField = screen.getByTestId(TestId.FIELD_EMAIL);

    expect(emailField).toBeInTheDocument();
  });

  it("renders the password field", () => {
    render(<SignIn />);
    const passwordField = screen.getByTestId(TestId.FIELD_PASSWORD);

    expect(passwordField).toBeInTheDocument();
  });
});
