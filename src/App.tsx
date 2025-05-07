import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <HStack>
          <NavBar />
          
        </HStack>
      </GridItem>

      <GridItem area="aside"  display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
