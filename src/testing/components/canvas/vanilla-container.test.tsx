import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import CanvasContainer, { TestId } from "@/components/canvas/vanilla-container";

describe("CanvasContainer", () => {
  afterEach(cleanup);

  it("renders", () => {
    render(<CanvasContainer />);
    const canvasContainer = screen.getByTestId(TestId.CONTAINER);

    expect(canvasContainer).toBeInTheDocument();
  });
});
