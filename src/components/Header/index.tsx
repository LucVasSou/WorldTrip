import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri"


export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/"

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        
        justifyContent="center"
        alignSelf="start"
        
      >

        {notHomePage && (
          <Link href="/">
            <a>
              <Icon 
              as={RiArrowLeftSLine} 
              fontSize={[20, 40]} 
              justifySelf="start" 
              />
            </a>
          </Link>
        )}

        <Image
          fontSize= "8"
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca World Trip"
          justifySelf="center"
          gridColumn="2"
          
        />
      </Grid>
    </Flex>
  )
}