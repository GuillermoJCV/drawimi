import { useCallback, useState, useEffect, useRef } from "react";
import { extend, useApplication } from "@pixi/react";
import {
  Container,
  Graphics,
  type StrokeInput,
  type Graphics as PixiGraphics,
} from "pixi.js";
import useBrushConfig from "@/stores/brush-config-store";
import useAppStore from "@/stores/app-store";

extend({
  Container,
  Graphics,
});

let initialX: number = 0;
let initialY: number = 0;

function PixiContainer() {
  const brushConfig = useBrushConfig((state) => state.config);
  const setApp = useAppStore((state) => state.setApp);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [graphics, setGraphics] = useState<PixiGraphics | null>(null);
  const { app } = useApplication();

  useEffect(() => {
    canvasRef.current = app.canvas;
    setApp(app);
    if (canvasRef.current) {
      canvasRef.current.addEventListener("pointerdown", pointerdownHandler);
      canvasRef.current.addEventListener("pointerup", pointerupDepsInjection);
      canvasRef.current.addEventListener(
        "pointerleave",
        pointerupDepsInjection,
      );
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener(
          "pointerdown",
          pointerdownHandler,
        );
        canvasRef.current.removeEventListener(
          "pointerup",
          pointerupDepsInjection,
        );
        canvasRef.current.removeEventListener(
          "pointerleave",
          pointerupDepsInjection,
        );
      }
    };
  }, [graphics, brushConfig]);

  const pointerdownHandler = async (e: PointerEvent) => {
    if (!canvasRef.current) return;
    const { x, y } = canvasRef.current.getBoundingClientRect();
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    drawHandler(graphics, initialX, initialY, brushConfig);
    canvasRef.current.addEventListener("pointermove", pointermoveDepsInjection);
  };
  const pointerupHandler = async (canvas: HTMLCanvasElement | null) =>
    canvas &&
    canvas.removeEventListener("pointermove", pointermoveDepsInjection);

  /* Injections */
  const pointermoveDepsInjection = (e: PointerEvent) =>
    pointermoveHandler(e, graphics, canvasRef.current, brushConfig);
  const pointerupDepsInjection = (_: PointerEvent) =>
    pointerupHandler(canvasRef.current);

  const storeGraphics = useCallback((g: PixiGraphics) => setGraphics(g), []);
  return (
    <pixiContainer>
      <pixiGraphics draw={storeGraphics}></pixiGraphics>
    </pixiContainer>
  );
}

const drawHandler = async (
  graphics: PixiGraphics | null,
  cursorX: number,
  cursorY: number,
  brushConfig: StrokeInput,
) => {
  if (!graphics) return;
  graphics
    .moveTo(initialX, initialY)
    .lineTo(cursorX, cursorY)
    //TODO: use strokeinput here
    .stroke(brushConfig);
  initialX = cursorX;
  initialY = cursorY;
};

const pointermoveHandler = async (
  e: PointerEvent,
  graphics: PixiGraphics | null,
  canvas: HTMLCanvasElement | null,
  brushConfig: StrokeInput,
) => {
  if (!graphics || !canvas) return;
  const { x, y } = canvas.getBoundingClientRect();
  drawHandler(graphics, e.clientX - x, e.clientY - y, brushConfig);
};

export default PixiContainer;
