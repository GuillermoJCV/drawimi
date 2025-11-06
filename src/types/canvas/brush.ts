type CanvasStrokeColor = string | CanvasGradient | CanvasPattern;

type BrushSettings = {
  color: CanvasStrokeColor;
  width: number;
  cap: CanvasLineCap;
  join: CanvasLineJoin;
};

export type { BrushSettings, CanvasStrokeColor };
