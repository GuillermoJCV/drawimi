import { Container, HStack } from "@chakra-ui/react";
import SideBar from "@/components/side-bar/sidebar";
import CanvasPaint from "@/components/canvas/canvas";
import { Toaster } from "@/components/chakra-ui/toaster";

function App() {
  return (
    <Container as="main" maxW="dvw" maxH="dvh">
      <HStack>
        <SideBar />
        <CanvasPaint />
      </HStack>
      <Toaster />
    </Container>
  );
}

export default App;
