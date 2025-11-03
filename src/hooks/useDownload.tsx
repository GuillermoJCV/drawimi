import { DownloadFormat } from "@/constants/sidebar/download-formats";
import useCanvasStore from "@/stores/canvas-store";
import { DownloadOptions } from "@/types/canvas/download";
import { useCallback } from "react";

//TODO: Handle again the download
function useDownload() {
  const canvas = useCanvasStore((state) => state.canvas);
  const callback = useCallback(
    (options: DownloadOptions) => {
      if (!canvas) return;
      const imgURL = canvas.toDataURL("image/png", 1.0);

      const downloadAnchore = document.createElement("a");
      downloadAnchore.href = imgURL;
      downloadAnchore.download = `${options.filename}.png`;

      document.body.appendChild(downloadAnchore);
      downloadAnchore.click();
      document.body.removeChild(downloadAnchore);
    },
    [canvas],
  );

  return callback;
}

export default useDownload;
