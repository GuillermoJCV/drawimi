import { useCallback } from "react";
import useBrushConfig from "@/stores/brush-config-store";

let isDrawing = false;
function useCanvasHandler(
  ctx: CanvasRenderingContext2D | null,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const brushConfig = useBrushConfig((state) => state.config);

  /**
   * @description Handle when the brush should start drawing
   * @param {PointerEvent} e - Get the pointer event
   */
  const onpointerdownHandler = useCallback(
    (e: PointerEvent) => {
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      isDrawing = true;
      const DOMRect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(e.clientX - DOMRect.x, e.clientY - DOMRect.y);
      e.preventDefault();
    },
    [canvasRef.current, ctx],
  );

  /**
   * @description Handle when the brush should stop drawing
   * @param {PointerEvent} e - Get the pointer event
   */
  const onpointerupHandler = useCallback(
    (_: PointerEvent) => {
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      isDrawing = false;
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
