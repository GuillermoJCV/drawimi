import useCanvasStore from "@/stores/canvas-store";
import { useCallback } from "react";

//TODO: Store the background on a zustand array
let restoreImage: ImageData | null = null;
function useRestoreBackground() {
  const canvas = useCanvasStore((state) => state.canvas);
  const ctx = canvas?.getContext("2d");

  const restoreBackground = useCallback(() => {
    if (!ctx || !restoreImage || !canvas) return;

    const size = canvas.getBoundingClientRect();
    ctx.putImageData(restoreImage, size.x, size.y);
  }, [canvas]);

  const storeBackground = useCallback(() => {
    if (!ctx || !canvas) return;
    const size = canvas.getBoundingClientRect();
    if (size.x === 0) return;
    restoreImage = ctx.getImageData(
      size.left,
      size.top,
      size.right,
      size.bottom,
    );
  }, [canvas]);

  return {
    restoreBackground,
    storeBackground,
  };
}

export { useRestoreBackground };
