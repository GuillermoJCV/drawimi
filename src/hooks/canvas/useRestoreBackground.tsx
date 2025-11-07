import useCanvasStore from "@/stores/canvas-store";

//TODO: Store the background on a zustand array
let restoreImage: ImageData | null = null;
function useRestoreBackground() {
  const canvas = useCanvasStore((state) => state.canvas);
  const ctx = canvas?.getContext("2d");

  const restoreBackground = () => {
    if (!ctx || !restoreImage || !canvas) return;
    console.log("restoring the Background");

    const size = canvas.getBoundingClientRect();
    ctx.putImageData(restoreImage, size.x, size.y);
  };

  const storeBackground = () => {
    if (!ctx || !canvas) return;
    console.log("storing the Background");

    const size = canvas.getBoundingClientRect();
    restoreImage = ctx.getImageData(
      size.left,
      size.top,
      size.right,
      size.bottom,
    );
  };

  return {
    restoreBackground,
    storeBackground,
  };
}

export { useRestoreBackground };
