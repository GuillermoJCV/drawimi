import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import BrushPicker, { TestId } from "@/components/utils/brush-picker";

describe("Brush Picker", () => {
  beforeEach(cleanup);

  it("renders", async () => {
    render(<BrushPicker />);
    const brushPicker = screen.getByTestId(TestId.ROOT);

    expect(brushPicker).toBeInTheDocument();
  });
});
