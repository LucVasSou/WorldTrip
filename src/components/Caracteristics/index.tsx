import { Grid, GridItem } from "@chakra-ui/react";
import CaracteristicList from "./caracteristic";



export default function Caracteristic() {
  
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <CaracteristicList icon="Nightlife" text="Vida noturna"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="Beach" text="Praia"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="Modern" text="Modernidade"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="Classic" text="Clássica"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <CaracteristicList icon="More" text="E mais"/>
      </GridItem>
    </Grid>
  )
}