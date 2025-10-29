import { Button } from "@chakra-ui/react";
import useAppStore from "@/stores/app-store";
import { useEffect } from "react";

type DownloadHandler = React.MouseEventHandler<HTMLButtonElement>;

function DownloadButton() {
  const app = useAppStore((state) => state.app);

  useEffect(() => {}, [app]);

  const downloadHandler: DownloadHandler = async (_) => {
    if (!app) return; //TODO : Handle the error proplerly

    app.renderer.extract.download({
      target: app.stage,
      filename: "drawimi.png",
      resolution: 1,
      antialias: true,
    });
  };

  return (
    <Button onClick={downloadHandler} colorPalette="green">
      Download
    </Button>
  );
}

export default DownloadButton;
