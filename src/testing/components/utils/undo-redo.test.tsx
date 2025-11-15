import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import UndoRedo, { TestId } from "@/components/utils/undo-redo";

describe("UndoRedo", async () => {
  it("renders undo button", () => {
    render(<UndoRedo />);
    const undoButton = screen.getByTestId(TestId.UNDO_BUTTON);
    expect(undoButton).toBeInTheDocument();
  });

  it("renders redo button", () => {
    render(<UndoRedo />);
    const redoButton = screen.getByTestId(TestId.REDO_BUTTON);
    expect(redoButton).toBeInTheDocument();
  });
});
