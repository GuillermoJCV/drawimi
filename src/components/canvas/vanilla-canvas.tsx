import useCanvasHandler from "@/hooks/canvas/useCanvasHandler";
import { useRestoreBackground } from "@/hooks/canvas/useRestoreBackground";
import useBrushConfig from "@/stores/brush-config-store";
import useCanvasStore from "@/stores/canvas-store";
import useBackgroundStore from "@/stores/storeBackgrounds";
import { useEffect, useRef, useState } from "react";

interface Args {
  resizeTo: DOMRect;
}

function Canvas({ resizeTo }: Args) {
  const brushConfig = useBrushConfig((state) => state.config);
  const getImage = useBackgroundStore((state) => state.getImage);
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
      // When this function is called canvas and ctx may be not setted
      // Because setCanvas and setCtx contains asyncronous functions
      // So the arguments must be passed through here
      if (context && !getImage(0)) {
        storeBackground({
          definedCanvas: canvas,
          definedCtx: context,
          isInitialBackground: true,
        });
      }
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("pointerdown", start);
        canvas.removeEventListener("pointerup", stop);
        canvas.removeEventListener("pointerout", stop);
        canvas.removeEventListener("pointermove", draw);
      }
    };
  }, [canvasRef.current, brushConfig]);

  return (
    <canvas
      data-testid={TestId.CANVAS}
      ref={canvasRef}
      width={resizeTo.width}
      height={resizeTo.height}
      style={{ backgroundColor: "white", touchAction: "none" }}
    ></canvas>
  );
}

enum TestId {
  CANVAS = "canvas-canvas-testid",
}
export default Canvas;
export { TestId };

type CanvasCtx = CanvasRenderingContext2D;
