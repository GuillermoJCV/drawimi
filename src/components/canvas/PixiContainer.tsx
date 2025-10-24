import { useCallback, useState, useEffect } from "react";
import { extend, useApplication } from "@pixi/react";
import { Container, Graphics, type Graphics as PixiGraphics } from "pixi.js";

extend({
  Container,
  Graphics,
});

let initialX: number = 0;
let initialY: number = 0;

function PixiContainer() {
  const [graphics, setGraphics] = useState<PixiGraphics | null>(null);
  const { app } = useApplication();
  const { canvas } = app;

  useEffect(() => {
    canvas.addEventListener("pointerdown", pointerdownHandler);

    return () => {
      canvas.removeEventListener("pointerdown", pointerdownHandler);
    };
  }, [graphics]);

  const pointerdownHandler = (e: PointerEvent) => {
    const { x, y } = canvas.getBoundingClientRect();
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    drawHandler(graphics, initialX, initialY);
  };

  const storeGraphics = useCallback((g: PixiGraphics) => setGraphics(g), []);
  return (
    <pixiContainer>
      <pixiGraphics draw={storeGraphics}></pixiGraphics>
    </pixiContainer>
  );
}

const drawHandler = (
  graphics: PixiGraphics,
  cursorX: number,
  cursorY: number,
) => {
  graphics
    .moveTo(initialX, initialY)
    .lineTo(cursorX + 1, cursorY + 1)
    .stroke({
      color: 0xff0000,
      width: 10,
      cap: "round",
    });
  initialX = cursorX;
  initialY = cursorY;
};

export default PixiContainer;
