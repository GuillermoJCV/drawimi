import { screen } from "@testing-library/react";
import { Button } from "@chakra-ui/react";
import { expect } from "vitest";
//import EraserButton, { eraserButtonTestId } from "./eraser-button";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";

describe("Basic test", () => {
  try {
    it("works", () => {
      expect(true).toBeTruthy();
    });
  } catch (err) {
    console.error(err);
  }
});
