//TODO: Store the background on a zustand array
let restoreImage: ImageData | null = null;
function useRestoreBackground(
  ctx: CanvasRenderingContext2D | null,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  //Use a zustand state

  const restoreBackground = () => {
    if (!ctx || !restoreImage || !canvasRef.current) return;
    console.log("restoring the Background");

    const size = canvasRef.current.getBoundingClientRect();
    ctx.putImageData(restoreImage, size.x, size.y);
  };

  const storeBackground = () => {
    if (!ctx || !canvasRef.current) return;
    console.log("storing the Background");

    const size = canvasRef.current.getBoundingClientRect();
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
