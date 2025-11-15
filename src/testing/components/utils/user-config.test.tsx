import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import UserConfig, { TestId } from "@/components/utils/user-config";
import userEvent from "@testing-library/user-event";

describe("UserConfig", async () => {
  beforeEach(cleanup);

  it("renders trigger", async () => {
    render(<UserConfig />);
    const trigger = screen.getByTestId(TestId.TRIGGER);
    expect(trigger).toBeInTheDocument();
  });

  it("renders positioner", async () => {
    render(<UserConfig />);
    const user = userEvent.setup();
    const trigger = screen.getByTestId(TestId.TRIGGER);
    await user.click(trigger);

    const positioner = screen.getByTestId(TestId.POSITIONER);

    expect(positioner).toBeInTheDocument();
  });
});
