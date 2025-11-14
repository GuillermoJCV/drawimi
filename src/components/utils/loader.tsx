import { ProgressCircle } from "@chakra-ui/react";

function Loader() {
  return (
    <ProgressCircle.Root data-testid={TestId.ROOT} value={null} size="md">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  );
}

enum TestId {
  ROOT = "loader-progressCircle-testid",
}
export default Loader;
export { TestId };
