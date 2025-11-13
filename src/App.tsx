import { Container, Stack, type StackProps } from "@chakra-ui/react";
import SideBar from "@/components/side-bar/sidebar";
import CanvasPaint from "@/components/canvas/vanilla-container";
import { Toaster } from "@/components/chakra-ui/toaster";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

function App() {
  return (
    <Container as="main" role="app" w="dvw" h="dvh">
      <Stack {...stackProps}>
        <Header hideFrom="md" />
        <SideBar hideBelow="sm" />
        <CanvasPaint />
        <Footer hideFrom="md" />
      </Stack>
      <Toaster />
    </Container>
  );
}

const stackProps: StackProps & React.RefAttributes<HTMLDivElement> = {
  h: "100%",
  p: { smDown: "1rem", md: "2rem" },
  align: "center",
  justify: "center",
  direction: { smDown: "column", md: "row" },
};

export default App;
