import { useCallback, useState, useEffect, useRef } from "react";
import { extend, useApplication } from "@pixi/react";
import { Container, Graphics, type Graphics as PixiGraphics } from "pixi.js";

extend({
  Container,
  Graphics,
});

let initialX: number = 0;
let initialY: number = 0;

function PixiContainer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [graphics, setGraphics] = useState<PixiGraphics | null>(null);
  const { app } = useApplication();
  //const { canvas } = app;

  useEffect(() => {
    canvasRef.current = app.canvas;
    if (canvasRef.current) {
      canvasRef.current.addEventListener("pointerdown", pointerdownHandler);
      canvasRef.current.addEventListener("pointerup", pointerupDepsInjection);
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
      }
    };
  }, [graphics]);

  const pointerdownHandler = (e: PointerEvent) => {
    if (!canvasRef.current) return;
    const { x, y } = canvasRef.current.getBoundingClientRect();
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    drawHandler(graphics, initialX, initialY);
    canvasRef.current.addEventListener("pointermove", pointermoveDepsInjection);
  };
  const pointerupHandler = (
    _: PointerEvent,
    canvas: HTMLCanvasElement | null,
  ) =>
    canvas &&
    canvas.removeEventListener("pointermove", pointermoveDepsInjection);

  /* Injections */
  const pointermoveDepsInjection = (e: PointerEvent) =>
    pointermoveHandler(e, graphics, canvasRef.current);
  const pointerupDepsInjection = (e: PointerEvent) =>
    pointerupHandler(e, canvasRef.current);

  const storeGraphics = useCallback((g: PixiGraphics) => setGraphics(g), []);
  return (
    <pixiContainer>
      <pixiGraphics draw={storeGraphics}></pixiGraphics>
    </pixiContainer>
  );
}

const drawHandler = (
  graphics: PixiGraphics | null,
  cursorX: number,
  cursorY: number,
) => {
  if (!graphics) return;
  graphics
    .moveTo(initialX, initialY)
    .lineTo(cursorX + 1, cursorY + 1)
    .stroke({
      color: 0xff0000,
      width: 10,
      cap: "round",
      join: "miter",
      //alpha: 0.5,
      miterLimit: 5,
    });
  initialX = cursorX;
  initialY = cursorY;
};

const pointermoveHandler = (
  e: PointerEvent,
  graphics: PixiGraphics | null,
  canvas: HTMLCanvasElement | null,
) => {
  if (!graphics || !canvas) return;
  const { x, y } = canvas.getBoundingClientRect();
  drawHandler(graphics, e.clientX - x, e.clientY - y);
};

export default PixiContainer;
