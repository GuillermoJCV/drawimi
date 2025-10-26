import { create, type StoreApi } from "zustand";
import { type StyleInput, type ColorSource } from "pixi.js";

interface BrushConfig {
  config: StyleInput;
  setConfig: (newConfig: StyleInput) => void;
  setColor: (color: ColorSource) => void;
  setWidth: (width: number) => void;
}

const useBrushConfig: StoreApi<BrushConfig> = create((set) => ({
  config: {
    color: 0xff0000,
    width: 10,
    cap: "round",
  },
  setConfig: (newConfig: StyleInput) =>
    set((state) => Object.assign({}, state.config, newConfig)),
  setColor: (color: ColorSource) =>
    set((state) => Object.assign({}, state.config, color)),
  setWidth: (width: number) =>
    set((state) => Object.assign({}, state.config, width)),
}));

export default useBrushConfig;
