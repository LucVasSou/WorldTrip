import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Caracteristic from "../components/Caracteristics";
import Header from "../components/Header";
import Separador from "../components/Separador";


import Slider from "../components/Slider";


export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristic />
      <Separador />

      <Heading 
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br /> Então escolha o seu continente
      </Heading>

      <Slider />

    </Flex>
  )
}
