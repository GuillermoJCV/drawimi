import { useCallback } from "react";
import useBrushConfig from "@/stores/brush-config-store";
import { useRestoreBackground } from "./useRestoreBackground";

let isDrawing = false;
let currentPointerId: number = 0;
function useCanvasHandler(
  ctx: CanvasRenderingContext2D | null,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const { storeBackground } = useRestoreBackground();
  const brushConfig = useBrushConfig((state) => state.config);

  /**
   * @description Handle when the brush should start drawing
   * @param {PointerEvent} e - Get the pointer event
   */
  const onpointerdownHandler = useCallback(
    (e: PointerEvent) => {
      //Check canvas and context exists
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;

      //Prevent default behaviors
      e.preventDefault();
      e.stopPropagation();

      //Set drawing as true
      isDrawing = true;
      
      //Starts the path
      const DOMRect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(e.clientX - DOMRect.x, e.clientY - DOMRect.y);

      //Captures the event
      currentPointerId = e.pointerId;
      canvas.setPointerCapture(e.pointerId);
    },
    [canvasRef.current, ctx],
  );

  /**
   * @description Handle when the brush should stop drawing
   * @param {PointerEvent} e - Get the pointer event
   */
  const onpointerupHandler = useCallback(
    (e: PointerEvent) => {
      e.type === "pointerup" && storeBackground();
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      canvas.releasePointerCapture(currentPointerId);
      isDrawing = false;
      e.preventDefault();
    },
    [canvasRef.current, ctx],
  );

  /**
   * @description Handle the drawing
   * @param {PointerEvent} e - Get the pointer event
   */
  const onpointermoveHandler = useCallback(
    (e: PointerEvent) => {
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
      e.preventDefault();
    },
    [canvasRef.current, ctx, brushConfig],
  );

  return {
    onpointerdownHandler,
    onpointerupHandler,
    onpointermoveHandler,
  };
}

export default useCanvasHandler;
