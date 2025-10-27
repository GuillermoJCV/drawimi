import { Application, Renderer } from "pixi.js";
import { create } from "zustand";

interface App {
  app: Application<Renderer> | null;
  setApp: (app: Application<Renderer>) => void;
}

const useAppStore = create<App>((set) => ({
  app: null,
  setApp: (app) =>
    set(() => ({
      app,
    })),
}));

export default useAppStore;
