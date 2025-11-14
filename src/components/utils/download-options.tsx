import { DownloadFormat } from "@/constants/utils/download-formats";
import useDownload from "@/hooks/useDownload";
import {
  Drawer,
  CloseButton,
  Portal,
  IconButton,
  Button,
  Input,
  InputGroup,
  Field,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaDownload } from "react-icons/fa6";
import SelectFormats from "./download-options/select-formats";

interface FormValues {
  filename: string;
}

type Args = Omit<Drawer.RootProps, "children">;

function DownloadOptionsPanel(props: Args) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [format, setFormat] = useState<DownloadFormat>("png");
  const downloadHandler = useDownload();

  const onSubmit = handleSubmit((data) => {
    const { filename } = data;
    downloadHandler({ filename, format: format });
  });

  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger data-testid={TestId.TRIGGER} asChild>
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
        <Drawer.Positioner data-testid={TestId.POSITIONER}>
          <Drawer.Content>
            <form onSubmit={onSubmit}>
              <Drawer.Header>
                <Drawer.Title>Download</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Field.Root invalid={!!errors.filename}>
                  <Field.Label>First name</Field.Label>
                  <InputGroup
                    endElement={<SelectFormats setFormat={setFormat} />}
                  >
                    <Input {...register("filename")} />
                  </InputGroup>
                  <Field.ErrorText>{errors.filename?.message}</Field.ErrorText>
                </Field.Root>
              </Drawer.Body>
              <Drawer.Footer
                css={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" colorPalette="green">
                  Download
                </Button>
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

enum TestId {
  TRIGGER = "downloadOptions-trigger-testid",
  POSITIONER = "downloadOptions-positioner-testid",
}
export default DownloadOptionsPanel;
export { TestId };
