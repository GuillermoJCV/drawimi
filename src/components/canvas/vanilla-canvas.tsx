import useBrushConfig from "@/stores/brush-config-store";
import { useEffect, useRef, useState, useCallback } from "react";

interface CanvasProps {
  resizeTo: DOMRect;
}

let isDrawing = false;
function Canvas({ resizeTo }: CanvasProps) {
  const brushConfig = useBrushConfig((state) => state.config);
  const [restoreImage, setRestoreImage] = useState<ImageData | null>(null);
  const [ctx, setCtx] = useState<CanvasCtx | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setRestoredBackground = useCallback(() => {
    if (ctx && restoreImage && canvasRef.current) {
      const size = canvasRef.current?.getBoundingClientRect();
      console.log(restoreImage);
      ctx.putImageData(restoreImage, size.x, size.y);
    }
  }, [restoreImage]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      setContext(canvas.getContext("2d"));
      setRestoredBackground();

      canvas.addEventListener("pointerdown", onpointerdownHandler);
      canvas.addEventListener("pointerup", onpointerupHandler);
      canvas.addEventListener("pointermove", onpointermoveHandler);
    }

    return () => {
      if (canvas) {
        const size = canvas.getBoundingClientRect();
        ctx && //Store the last image before it unrender it
          setRestoreImage(
            ctx.getImageData(size.left, size.top, size.right, size.bottom),
          );
        canvas.removeEventListener("pointerdown", onpointerdownHandler);
        canvas.removeEventListener("pointerup", onpointerupHandler);
        canvas.removeEventListener("pointermove", onpointermoveHandler);
      }
    };
  }, [canvasRef.current, resizeTo, brushConfig]);

  const setContext = useCallback((c: CanvasCtx | null) => c && setCtx(c), []);

  const onpointerdownHandler = (e: PointerEvent) => {
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    isDrawing = true;
    const DOMRect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - DOMRect.x, e.clientY - DOMRect.y);
    e.preventDefault();
  };
  const onpointerupHandler = (_: PointerEvent) => {
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    isDrawing = false;
  };
  const onpointermoveHandler = (e: PointerEvent) => {
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    if (!isDrawing) return;
    const DOMRect = canvas.getBoundingClientRect();

    ctx.lineTo(e.clientX - DOMRect.x, e.clientY - DOMRect.y);
    ctx.strokeStyle = brushConfig.color;
    ctx.lineWidth = brushConfig.width;
    ctx.lineCap = brushConfig.cap;
    ctx.lineJoin = brushConfig.join;
    ctx.stroke();
  };

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

// const setBackground = (
//   context: CanvasCtx | null,
//   canvas: HTMLCanvasElement | null,
//   backgroundColor: string,
// ) => {
//   if (!context || !canvas) return;
//   const domRect = canvas.getBoundingClientRect();

//   context.fillStyle = backgroundColor;
//   context.fillRect(0, 0, domRect.width, domRect.height);
// };

type CanvasCtx = CanvasRenderingContext2D;
