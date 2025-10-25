import { Container, HStack, Flex } from "@chakra-ui/react";
import SideBar from "@/components/side-bar/sidebar";
import CanvasPaint from "@/components/canvas/canvas";

function App() {
  return (
    <Container as="main" maxW="dvw" maxH="dvh">
      <HStack>
        <SideBar />
        <CanvasPaint />
      </HStack>
    </Container>
  );
}

export default App;
