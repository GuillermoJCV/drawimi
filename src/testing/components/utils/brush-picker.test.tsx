import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import BrushPicker, { TestId } from "@/components/utils/brush-picker";
import userEvent from "@testing-library/user-event";

describe("Brush Picker", () => {
  beforeEach(cleanup);

  it("renders trigger", async () => {
    render(<BrushPicker />);
    const brushPickerTrigger = screen.getByTestId(TestId.TRIGGER);
    expect(brushPickerTrigger).toBeInTheDocument();
  });

  it("renders positioner", async () => {
    render(<BrushPicker />);
    const user = userEvent.setup();
    const brushPickerTrigger = screen.getByTestId(TestId.TRIGGER);
    await user.click(brushPickerTrigger);

    const brushPickerPositioner = screen.getByTestId(TestId.POSITIONER);
    expect(brushPickerPositioner).toBeInTheDocument();
  });
});
