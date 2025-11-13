import { ProgressCircle } from "@chakra-ui/react";

function Loader() {
  return (
    <ProgressCircle.Root value={null} size="md">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  );
}

export default Loader;
