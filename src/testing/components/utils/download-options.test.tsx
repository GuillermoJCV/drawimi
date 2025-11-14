import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import DownloadOptions, { TestId } from "@/components/utils/download-options";
import userEvent from "@testing-library/user-event";

describe("Brush Picker", () => {
  beforeEach(cleanup);

  it("renders trigger", async () => {
    render(<DownloadOptions />);
    const downloadOptionsTrigger = screen.getByTestId(TestId.TRIGGER);
    expect(downloadOptionsTrigger).toBeInTheDocument();
  });

  it("renders positioner", async () => {
    render(<DownloadOptions />);
    const user = userEvent.setup();
    const downloadOptionsTrigger = screen.getByTestId(TestId.TRIGGER);
    await user.click(downloadOptionsTrigger);

    const downloadOptionsPositioner = screen.getByTestId(TestId.POSITIONER);
    expect(downloadOptionsPositioner).toBeInTheDocument();
  });
});
