import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import LoggingToggler, {
  TestId,
} from "@/components/utils/user-config/login-toggler";

describe("Custom Color Picker", () => {
  beforeEach(cleanup);

  //TODO: learn how to mock a useState correctly
  it("renders", async () => {
    render(<LoggingToggler />);
    const loggingToggler = screen.getByTestId(TestId.STACK);

    expect(loggingToggler).toBeInTheDocument();
  });
  it("renders the button", async () => {
    render(<LoggingToggler />);
    const loggingTogglerButton = screen.getByTestId(TestId.BUTTON);

    expect(loggingTogglerButton).toBeInTheDocument();
  });
});
