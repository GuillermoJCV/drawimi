import useCanvasStore from "@/stores/canvas-store";
import useBackgroundStore from "@/stores/storeBackgrounds";
import { useCallback } from "react";

function useRestoreBackground() {
  const getCurrentIndex = useBackgroundStore((state) => state.getCurrentIndex);
  const getImage = useBackgroundStore((state) => state.getImage);
  const push = useBackgroundStore((state) => state.push);
  const storeFirstBackground = useBackgroundStore(
    (state) => state.storeFirstBackground,
  );

  const canvas = useCanvasStore((state) => state.canvas);
  const ctx = canvas?.getContext("2d");

  const restoreBackground = useCallback(() => {
    const currentIndex = getCurrentIndex();
    const currentImage = getImage(currentIndex);
    if (!ctx || currentIndex < 0 || !canvas) return;
    else if (!currentImage) return;

    ctx.putImageData(currentImage, 0, 0);
  }, [canvas]);

  const storeBackground = useCallback(
    async (args?: StoreBackgroundArguments) => {
      if ((!ctx || !canvas) && (!args?.definedCanvas || !args?.definedCtx))
        return;

      const currentCanvas = canvas
        ? canvas
        : (args?.definedCanvas as HTMLCanvasElement);
      const currentCtx = ctx
        ? ctx
        : (args?.definedCtx as CanvasRenderingContext2D);

      const size = currentCanvas.getBoundingClientRect();
      if (size.x === 0) return;
      const currentImage = currentCtx.getImageData(
        0,
        0,
        currentCanvas.width,
        currentCanvas.height,
      );
      console.log("\nSTORE IMAGE");
      console.log(size);
      console.log(currentImage);
      console.log("\nSTORE IMAGE");
      if (!args?.isInitialBackground) push(currentImage);
      else storeFirstBackground(currentImage);
    },
    [canvas],
  );

  return {
    restoreBackground,
    storeBackground,
  };
}

export { useRestoreBackground };
export type { StoreBackgroundArguments };

type StoreBackgroundArguments = {
  definedCtx: CanvasRenderingContext2D;
  definedCanvas: HTMLCanvasElement;
  isInitialBackground: boolean;
};
