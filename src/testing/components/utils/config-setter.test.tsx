import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import ConfigSetter, { TestId } from "@/components/utils/config-setter";
import userEvent from "@testing-library/user-event";

describe("Config setter", () => {
  beforeEach(cleanup);

  it("render trigger", async () => {
    render(<ConfigSetter />);
    const configSetterTrigger = screen.getByTestId(TestId.TRIGGER);

    expect(configSetterTrigger).toBeInTheDocument();
  });

  it("render positioner", async () => {
    render(<ConfigSetter />);
    const user = userEvent.setup();
    const configSetterTrigger = screen.getByTestId(TestId.TRIGGER);
    await user.click(configSetterTrigger);

    const configSetterPositioner = screen.getByTestId(TestId.POSITIONER);

    expect(configSetterPositioner).toBeInTheDocument();
  });
});
