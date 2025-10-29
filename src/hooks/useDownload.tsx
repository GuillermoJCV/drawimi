import useAppStore from "@/stores/app-store";
import { ExtractDownloadOptions } from "pixi.js";
import { useCallback } from "react";

function useDownload() {
  const app = useAppStore((state) => state.app);
  const callback = useCallback(
    (options: Partial<ExtractDownloadOptions>) => {
      if (!app) {
        //Send an advice instead
        console.log("Cloudn't create the image");
        return;
      }

      const defaultOptions = {
        target: app.stage,
        filename: "drawimi.png",
        resolution: 1,
        antialias: true,
      };

      app.renderer.extract.download(Object.assign({}, defaultOptions, options));
    },
    [app],
  );

  return callback;
}

export default useDownload;
