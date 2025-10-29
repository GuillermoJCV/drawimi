import useDownload from "@/hooks/useDownload";
import {
  Drawer,
  CloseButton,
  Portal,
  IconButton,
  Button,
  Input,
  Field,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaDownload } from "react-icons/fa6";

interface FormValues {
  fileName: string;
}

function DownloadOptionsPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const downloadHandler = useDownload();

  const onSubmit = handleSubmit((data) => {
    const { fileName } = data;
    downloadHandler({ filename: fileName + ".png" });
  });

  return (
    <Drawer.Root size="xs">
      <Drawer.Trigger asChild>
        <IconButton
          variant="subtle"
          size="sm"
          w="2.5rem"
          h="2.5rem"
          aria-label="Configure the brush"
          colorPalette="green"
          rounded="full"
        >
          <FaDownload />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <form onSubmit={onSubmit}>
              <Drawer.Header>
                <Drawer.Title>Download</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Field.Root invalid={!!errors.fileName}>
                  <Field.Label>First name</Field.Label>
                  <Input {...register("fileName")} />
                  <Field.ErrorText>{errors.fileName?.message}</Field.ErrorText>
                </Field.Root>
              </Drawer.Body>
              <Drawer.Footer
                css={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" colorPalette="green">
                  Download
                </Button>
                {/*<DownloadButton />*/}
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </form>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default DownloadOptionsPanel;
