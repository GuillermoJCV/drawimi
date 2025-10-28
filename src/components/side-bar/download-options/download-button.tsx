import { IconButton } from "@chakra-ui/react";
import useAppStore from "@/stores/app-store";
import { FaDownload } from "react-icons/fa";
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
    <IconButton onClick={downloadHandler} rounded="full" colorPalette="green">
      <FaDownload />
    </IconButton>
  );
}

export default DownloadButton;
