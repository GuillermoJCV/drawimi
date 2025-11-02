import { create } from "zustand";
import { type ColorSource } from "pixi.js";

type StrokeStyle = {
  color: string | CanvasGradient | CanvasPattern;
  width: number;
  cap: CanvasLineCap;
  join: CanvasLineJoin;
};

interface BrushConfig {
  config: StrokeStyle;
  setConfig: (newConfig: Partial<StrokeStyle>) => void;
  setColor: (color: ColorSource) => void;
  setWidth: (width: number) => void;
}

const useBrushConfig = create<BrushConfig>((set) => ({
  config: {
    color: "#86efac",
    width: 10,
    cap: "round",
    join: "round",
  },
  setConfig: (newConfig: Partial<StrokeStyle>) =>
    set((state) => ({
      config: Object.assign({}, state.config, newConfig),
    })),
  setColor: (color: ColorSource) =>
    set((state) => ({
      config: Object.assign({}, state.config, { color }),
    })),
  setWidth: (width: number) =>
    set((state) => ({
      config: Object.assign({}, state.config, { width }),
    })),
}));

export default useBrushConfig;

export type { BrushConfig };
