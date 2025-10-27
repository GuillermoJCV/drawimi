import { create } from "zustand";
import { type ColorSource, type StrokeStyle } from "pixi.js";

interface BrushConfig {
  config: StrokeStyle;
  setConfig: (newConfig: Partial<StrokeStyle>) => void;
  setColor: (color: ColorSource) => void;
  setWidth: (width: number) => void;
}

const useBrushConfig = create<BrushConfig>((set) => ({
  config: {
    color: 0x86efac,
    width: 10,
    cap: "round",
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
