import {
  screen,
  cleanup,
  queryByRole,
  fireEvent,
} from "@testing-library/react";
import { expect, vi } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import CustomColorPicker, {
  TestId,
} from "@/components/utils/brush-picker/color-picker";
import useBrushConfig from "@/stores/brush-config-store";
import userEvent from "@testing-library/user-event";
import { target, value } from "happy-dom/lib/PropertySymbol";

describe("Custom Color Picker", () => {
  beforeEach(cleanup);
  it("renders", async () => {
    render(<CustomColorPicker />);
    const colorPicker = screen.getByTestId(TestId.COLOR_ROOT);
    expect(colorPicker).toBeInTheDocument();
  });

  it("renders button trigger", async () => {
    render(<CustomColorPicker />);
    const colorPickerButton = screen.getByTestId(TestId.COLOR_TRIGGER);
    expect(colorPickerButton).toBeInTheDocument();
    expect(colorPickerButton.tagName).toBe("BUTTON");
  });

  it("store has a default config", async () => {
    render(<CustomColorPicker />);
    const brushConfigState = useBrushConfig.getState().config;

    expect(brushConfigState.color).toBeDefined();
    expect(brushConfigState.cap).toBeDefined();
    expect(brushConfigState.join).toBeDefined();
    expect(brushConfigState.width).toBeDefined();
  });

  it("doesn't render the input when is not actived", () => {
    render(<CustomColorPicker />);
    const colorPickerInput = screen.queryByTestId(TestId.COLOR_INPUT);
    expect(colorPickerInput).toBeNull();
  });

  it("renders the input when actived", async () => {
    render(<CustomColorPicker needInput />);
    const colorPickerInput = screen.getByTestId(TestId.COLOR_INPUT);
    expect(colorPickerInput).toBeInTheDocument();
    expect(colorPickerInput.tagName).toBe("INPUT");
  });

  it("changes the input value", async () => {
    render(<CustomColorPicker needInput />);
    const user = userEvent.setup();
    const colorPickerInput = screen.getByTestId(
      TestId.COLOR_INPUT,
    ) as HTMLInputElement;
    expect(colorPickerInput.tagName).toBe("INPUT");
    const redColor = "#ff0000";

    await user.type(colorPickerInput, redColor);
    expect(colorPickerInput.value).toBe(redColor);
  });

  //It's not possible to fire editable elements events
});
