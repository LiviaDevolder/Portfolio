import { Box, Flex, Text } from "@chakra-ui/react";
import Renault from "../../../public/Renault.png";
import Image from "next/image";
import CardExp from "./CardExp";

export default function Experience() {
  return (
    <Flex flexDir={"column"} gap={"12px"}>
      <Text
        color={"#000852"}
        fontFamily={"Baumans"}
        fontSize={{ base: "50px", md: "64px" }}
        id={"experiencia"}
      >
        Experiência
      </Text>
      <Flex justifyContent={"space-between"}>
        <Flex flexDir={"column"} maxW={"50%"} gap={"16px"}>
          <Text fontSize={"32px"} color={"#FFF"}>
            Desenvolvo aplicações web desde o back end, com <b>Node.js</b>,
            <b> Nest.js</b> e bancos de dados <b>SQL</b>, e front end, com
            <b> React.js</b>, <b>Next.js</b> e <b>ChakraUI</b>, além do uso do
            playground de desenvolvimento em <b>Storybook</b> e atomização de
            componentes.
          </Text>
          <CardExp />
        </Flex>
        <Flex maxW={"50%"} alignItems={"center"}>
          <Box width={"325px"}>
            <Image src={Renault} alt={"Carro Renault"} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
