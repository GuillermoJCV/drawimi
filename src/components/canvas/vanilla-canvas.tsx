import useCanvasHandler from "@/hooks/canvas/useCanvasHandler";
import { useRestoreBackground } from "@/hooks/canvas/useRestoreBackground";
import useBrushConfig from "@/stores/brush-config-store";
import useCanvasStore from "@/stores/canvas-store";
import useBackgroundStore from "@/stores/storeBackgrounds";
import { useCallback, useEffect, useRef, useState } from "react";
import { CANVAS_CONFIG } from "./canvas-config";

interface Args {
  resizeTo: DOMRect;
}

function Canvas({ resizeTo }: Args) {
  const firstRendering = useRef(false);
  const brushConfig = useBrushConfig((state) => state.config);
  const getImage = useBackgroundStore((state) => state.getImage);
  const setCanvas = useCanvasStore((state) => state.setCanvas);
  const [ctx, setCtx] = useState<CanvasCtx | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { storeBackground } = useRestoreBackground();
  const {
    onpointerdownHandler: start,
    onpointerupHandler: stop,
    onpointermoveHandler: draw,
  } = useCanvasHandler(ctx, canvasRef);

  const getDevicePixelRatio = useCallback(() => {
    return window.devicePixelRatio || 1;
  }, []);

  const resizeCanvas = () => {
    if (firstRendering.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = getDevicePixelRatio();
    const width = resizeTo.width;
    const height = resizeTo.height;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    canvas.width = Math.floor(width * dpr * CANVAS_CONFIG.scale);
    canvas.height = Math.floor(height * dpr * CANVAS_CONFIG.scale);

    const context = canvas.getContext("2d");
    if (context) {
      context.scale(dpr, dpr);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      setCtx(context);
      firstRendering.current = true;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      setCanvas(canvas);
      const context = canvas.getContext("2d");
      setCtx(context);
      resizeCanvas();

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
