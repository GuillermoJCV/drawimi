import { Application, Renderer } from "pixi.js";
import { create } from "zustand";

interface App {
  canvas: HTMLCanvasElement | null;
  setCanvas: (canvas: HTMLCanvasElement) => void;
}

const useCanvasStore = create<App>((set) => ({
  canvas: null,
  setCanvas: (canvas) =>
    set(() => ({
      canvas,
    })),
}));

export default useCanvasStore;
