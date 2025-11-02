import { Container, HStack } from "@chakra-ui/react";
import SideBar from "@/components/side-bar/sidebar";
import CanvasPaint from "@/components/canvas/vanilla-container";
import { Toaster } from "@/components/chakra-ui/toaster";

function App() {
  return (
    <Container as="main" w="dvw" h="dvh">
      <HStack h="100%" pt="2rem" pb="2rem" pr="1rem" align="stretch">
        <SideBar />
        <CanvasPaint />
      </HStack>
      <Toaster />
    </Container>
  );
}

export default App;
