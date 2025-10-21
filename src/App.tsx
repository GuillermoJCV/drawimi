import { Container } from "@chakra-ui/react";
import SideBar from "@/components/side-bar/sidebar";

function App() {
  return (
    <Container as="main" w="dvw" h="dvh" p="0">
      <SideBar></SideBar>
      <Container></Container>
    </Container>
  );
}

export default App;
