import { BrushType } from "@/constants/canvas/brush-type";
import { CanvasStrokeColor, BrushSettings } from "@/types/canvas/brush";
import { create } from "zustand";

interface BrushConfig {
  brush: BrushType;
  config: BrushSettings;
  setConfig: (newConfig: Partial<BrushSettings>) => void;
  setColor: (color: CanvasStrokeColor) => void;
  setWidth: (width: number) => void;
}

const useBrushConfig = create<BrushConfig>((set) => ({
  brush: BrushType.FREE_STROKE,
  config: {
    color: "#86efac",
    width: 10,
    cap: "round",
    join: "round",
  },
  setConfig: (newConfig: Partial<BrushSettings>) =>
    set((state) => ({
      config: Object.assign({}, state.config, newConfig),
    })),
  setColor: (color: CanvasStrokeColor) =>
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
