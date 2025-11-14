import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import EraserButton, { TestId } from "@/components/utils/eraser-button";

describe("Eraser Button", async () => {
  it("renders", () => {
    render(<EraserButton />);
    const eraser = screen.getByTestId(TestId.ERASER_BUTTON);
    expect(eraser).toBeInTheDocument();
  });
});
