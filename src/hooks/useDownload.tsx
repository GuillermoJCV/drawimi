import useCanvasStore from "@/stores/canvas-store";
import { DownloadOptions } from "@/types/canvas/download";
import { useCallback } from "react";

//TODO: Handle again the download
function useDownload() {
  const canvas = useCanvasStore((state) => state.canvas);
  const callback = useCallback(
    async (options: DownloadOptions) => {
      if (!canvas) return;
      const imgURL = canvas.toDataURL(`image/${options.format}`, 1.0);

      const downloadAnchore = document.createElement("a");
      downloadAnchore.href = imgURL;
      downloadAnchore.download = `${options.filename}.${options.format}`;

      document.body.appendChild(downloadAnchore);
      downloadAnchore.click();
      document.body.removeChild(downloadAnchore);
    },
    [canvas],
  );

  return callback;
}

export default useDownload;
