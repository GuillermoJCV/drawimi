import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import SignUp, { TestId } from "@/components/utils/user-config/sign-up";

describe("Sign Up", () => {
  beforeEach(cleanup);

  it("renders the form", () => {
    render(<SignUp />);
    const form = screen.getByTestId(TestId.FORM);

    expect(form).toBeInTheDocument();
  });

  it("renders the email field", () => {
    render(<SignUp />);
    const emailField = screen.getByTestId(TestId.FIELD_EMAIL);

    expect(emailField).toBeInTheDocument();
  });

  it("renders the password field", () => {
    render(<SignUp />);
    const passwordField = screen.getByTestId(TestId.FIELD_PASSWORD);

    expect(passwordField).toBeInTheDocument();
  });
});
