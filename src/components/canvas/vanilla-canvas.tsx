import useCanvasHandler from "@/hooks/useCanvasHandler";
import { useRestoreBackground } from "@/hooks/useRestoreBackground";
import useBrushConfig from "@/stores/brush-config-store";
import { useEffect, useRef, useState } from "react";

interface Args {
  resizeTo: DOMRect;
}
debugger;
function Canvas({ resizeTo }: Args) {
  const brushConfig = useBrushConfig((state) => state.config);
  const [ctx, setCtx] = useState<CanvasCtx | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { restoreBackground, storeBackground } = useRestoreBackground(
    ctx,
    canvasRef,
  );
  const { onpointerdownHandler, onpointerupHandler, onpointermoveHandler } =
    useCanvasHandler(ctx, canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      context && setCtx(context);
      restoreBackground();

      canvas.addEventListener("pointerdown", onpointerdownHandler);
      canvas.addEventListener("pointerup", onpointerupHandler);
      canvas.addEventListener("pointermove", onpointermoveHandler);
    }

    return () => {
      if (canvas) {
        storeBackground();
        canvas.removeEventListener("pointerdown", onpointerdownHandler);
        canvas.removeEventListener("pointerup", onpointerupHandler);
        canvas.removeEventListener("pointermove", onpointermoveHandler);
      }
    };
  }, [canvasRef.current, resizeTo, brushConfig]);

  // Canvas Element
  return (
    <canvas
      ref={canvasRef}
      width={resizeTo.width}
      height={resizeTo.height}
      style={{ backgroundColor: "white" }}
    ></canvas>
  );
}

export default Canvas;

type CanvasCtx = CanvasRenderingContext2D;
