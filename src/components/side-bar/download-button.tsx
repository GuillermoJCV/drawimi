import { IconButton } from "@chakra-ui/react";
import useAppStore from "@/stores/app-store";
import { FaDownload } from "react-icons/fa";

function DownloadButton() {
  const app = useAppStore((state) => state.app);

  const downloadHandler: React.MouseEventHandler<HTMLButtonElement> = (_) => {
    if (!app) return; //TODO : Handle the error
    app.renderer.extract.image(app.stage);
  };

  return (
    <IconButton onClick={downloadHandler}>
      <FaDownload />
    </IconButton>
  );
}

export default DownloadButton;
