import { Box, Flex, Text } from "@chakra-ui/react";
import UFF from "../../../public/UFF.png";
import Image from "next/image";
import CardEdu from "./CardEdu";

export default function Education() {
  return (
    <Flex flexDir={"column"} gap={"12px"}>
      <Text
        color={"#000852"}
        fontFamily={"Baumans"}
        fontSize={{ base: "50px", lg: "64px" }}
        id={"formacao"}
      >
        Formação
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={{ base: "center", lg: "top" }}
        gap={{ base: "32px", lg: "none" }}
      >
        <Flex
          flexDir={"column"}
          maxW={{ base: "100%", lg: "50%" }}
          gap={"16px"}
        >
          <Text fontSize={"32px"} color={"#FFF"}>
            Atualmente estou me graduando em{" "}
            <b>Tecnologia em Sistemas de Informação</b>, mas pretendo continuar
            minha vida acadêmica estudando profundamente sobre{" "}
            <b>desenvolvimento de software e educação</b>. Além disso, costumo
            procurar cursos e artigos para me habituar com novas tecnologias e
            descobertas.
          </Text>
          <CardEdu />
        </Flex>
        <Flex maxW={"50%"} alignItems={"center"}>
          <Box width={"325px"}>
            <Image src={UFF} alt={"Carro Renault"} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
