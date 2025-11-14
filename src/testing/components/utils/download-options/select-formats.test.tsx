import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import SelectFormats, {
  TestId,
} from "@/components/utils/download-options/select-formats";
import { useState } from "react";
import { DownloadFormat } from "@/constants/utils/download-formats";

describe("Custom Color Picker", () => {
  beforeEach(cleanup);

  //TODO: learn how to mock a useState correctly
  it("renders", async () => {
    const [_format, setFormat] = useState<DownloadFormat>("png");
    render(<SelectFormats setFormat={setFormat} />);
    const selectFormats = screen.getByTestId(TestId.ROOT);

    expect(selectFormats).toBeInTheDocument();
  });
});
