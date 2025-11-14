import {
  DownloadFormat,
  downloadFormats,
} from "@/constants/utils/download-formats";
import { NativeSelect, For } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Args = {
  setFormat: Dispatch<SetStateAction<DownloadFormat>>;
};

function SelectFormats({ setFormat }: Args) {
  return (
    <NativeSelect.Root
      data-testid={TestId.ROOT}
      size="xs"
      variant="plain"
      width="auto"
      me="-1"
    >
      <NativeSelect.Field defaultValue=".com" fontSize="sm">
        <For each={downloadFormats}>
          {(item: DownloadFormat, index: number) => (
            <option
              key={index}
              onClick={() => setFormat(item)}
              value={`.${item}`}
            >
              .{item}
            </option>
          )}
        </For>
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}

enum TestId {
  ROOT = "native-select-root",
}
export default SelectFormats;
export { TestId };
