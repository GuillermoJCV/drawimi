import useCanvasHandler from "@/hooks/canvas/useCanvasHandler";
import { useRestoreBackground } from "@/hooks/canvas/useRestoreBackground";
import useBrushConfig from "@/stores/brush-config-store";
import useCanvasStore from "@/stores/canvas-store";
import { useEffect, useRef, useState } from "react";

interface Args {
  resizeTo: DOMRect;
}

//TODO: The draw disappear when resizing
function Canvas({ resizeTo }: Args) {
  const brushConfig = useBrushConfig((state) => state.config);
  const setCanvas = useCanvasStore((state) => state.setCanvas);
  const [ctx, setCtx] = useState<CanvasCtx | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { restoreBackground, storeBackground } = useRestoreBackground();
  const {
    onpointerdownHandler: start,
    onpointerupHandler: stop,
    onpointermoveHandler: draw,
  } = useCanvasHandler(ctx, canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      setCanvas(canvas);
      const context = canvas.getContext("2d");
      context && setCtx(context);
      restoreBackground();

      canvas.addEventListener("pointerdown", start);
      canvas.addEventListener("pointerup", stop);
      canvas.addEventListener("pointerout", stop);
      canvas.addEventListener("pointermove", draw);
    }

    return () => {
      if (canvas) {
        storeBackground();
        canvas.removeEventListener("pointerdown", start);
        canvas.removeEventListener("pointerup", stop);
        canvas.removeEventListener("pointerout", stop);
        canvas.removeEventListener("pointermove", draw);
      }
    };
  }, [canvasRef.current, brushConfig]);

  // Canvas Element
  return (
    <canvas
      data-testid={TestId.CANVAS}
      ref={canvasRef}
      width={resizeTo.width}
      height={resizeTo.height}
      style={{ backgroundColor: "white" }}
    ></canvas>
  );
}

enum TestId {
  CANVAS = "canvas-canvas-testid",
}
export default Canvas;
export { TestId };

type CanvasCtx = CanvasRenderingContext2D;
