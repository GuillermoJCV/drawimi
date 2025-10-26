import { create, type StoreApi } from "zustand";
import { type ColorSource, type StrokeInput } from "pixi.js";

type Config = {
  config: StrokeInput;
};

type Actions = {
  setConfig: (newConfig: Partial<StrokeInput>) => void;
  setColor: (color: ColorSource) => void;
  setWidth: (width: number) => void;
};

const useBrushConfig: StoreApi<Config & Actions> = create((set) => ({
  config: {
    color: 0xff0000,
    width: 10,
    cap: "round",
  },
  setConfig: (newConfig: Partial<StrokeInput>) =>
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
