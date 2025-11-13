import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import WidthSlider, {
  TestId,
} from "@/components/utils/brush-picker/width-slider";

describe("Custom Color Picker", () => {
  beforeEach(cleanup);

  it("renders", async () => {
    render(<WidthSlider />);
    const widthSlider = screen.getByTestId(TestId.ROOT_PROVIDER);

    expect(widthSlider).toBeInTheDocument();
  });
});
