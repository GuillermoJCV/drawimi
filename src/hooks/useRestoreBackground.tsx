import { useState, useCallback } from "react";

//TODO: Store the background on a zustand array
function useRestoreBackground(
  ctx: CanvasRenderingContext2D | null,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  //Use a zustand state
  const [restoreImage, setRestoreImage] = useState<ImageData | null>(null);

  const restoreBackground = () => {
    if (!ctx || !restoreImage || !canvasRef.current) return;

    const size = canvasRef.current.getBoundingClientRect();
    ctx.putImageData(restoreImage, size.x, size.y);
  };

  const storeBackground = useCallback(() => {
    if (!ctx || !canvasRef.current) return;

    const size = canvasRef.current.getBoundingClientRect();
    const imageData = ctx.getImageData(
      size.left,
      size.top,
      size.right,
      size.bottom,
    );
    setRestoreImage(imageData);
  }, [canvasRef.current]);

  return {
    restoreBackground,
    storeBackground,
  };
}

export { useRestoreBackground };
