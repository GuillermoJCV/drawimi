import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import Canvas, { TestId } from "@/components/canvas/vanilla-canvas";

const size: DOMRect = {
  width: 1500,
  height: 760,
  x: 0,
  y: 0,
  bottom: 760,
  left: 0,
  right: 1500,
  top: 0,
  toJSON: () => {},
};

describe("Canvas", () => {
  afterEach(cleanup);

  it("renders", () => {
    render(<Canvas resizeTo={size} />);
    const canvas = screen.getByTestId(TestId.CANVAS);

    expect(canvas).toBeInTheDocument();
  });
});
