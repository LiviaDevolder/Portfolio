import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Photo from "../../../public/Photo.png";

export default function Intro() {
  return (
    <Flex alignItems={{ base: "center", lg: "center" }} justifyContent={'space-between'} flexDir={{ base: "column", lg: "row"}}>
      <Box maxW={"350px"}>
        <Image src={Photo} alt={"Autora do Site"} />
      </Box>

      <Flex flexDir={"column"} maxW={'500px'}>
        <Text color={"#000852"} fontFamily={"Baumans"} fontSize={{ base: "50px", lg: "64px"}}>
          Desenvolvedora Full Stack
        </Text>
        <Text
          fontWeight={"100"}
          fontStyle={"italic"}
          fontSize={"32px"}
          color={"#FFF"}
        >
          “Ninguém é tão grande que não possa aprender, nem tão pequeno que não
          possa ensinar”
        </Text>
        <Text
          fontWeight={"300"}
          fontStyle={"italic"}
          fontSize={"32px"}
          color={"#FFF"}
          textAlign={"right"}
          marginRight={"80px"}
        >
          - Esopo
        </Text>
      </Flex>
    </Flex>
  );
}
