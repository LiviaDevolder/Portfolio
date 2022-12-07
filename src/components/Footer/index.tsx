import {
  Flex,
  Text,
  Link as ChakraLink,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Email from "../../../public/Email";
import GitHub from "../../../public/GitHub";
import Linkedin from "../../../public/Linkedin";

export default function Footer() {
  return (
    <Flex
      w={"100%"}
      bgColor={"#000852"}
      px={{ base: "60px", lg: "120px" }}
      py={{ base: "40px", lg: "80px" }}
      id={"contato"}
      marginTop={"32px"}
      flexDir={{ base: "column", lg: "row" }}
      gap={"32px"}
    >
      <Flex w={{ base: "100%", lg: "50%" }} color={"#FFF"} flexDir={"column"}>
        <Text fontSize={"28px"} fontWeight={"bold"}>
          Contatos
        </Text>
        <SimpleGrid
          alignItems={"center"}
          columns={2}
          spacing={"16px"}
          templateColumns={"repeat(2, minmax(40px, max-content))"}
        >
          <Email />
          <ChakraLink href={"mailto:liviadevolder@gmail.com"}>
            <u>liviadevolder@gmail.com</u>
          </ChakraLink>

          <Linkedin />
          <ChakraLink
            isExternal
            href={"https://linkedin.com/in/livia-devolder-pinheiro/"}
          >
            <u>www.linkedin.com/in/livia-devolder-pinheiro/</u>
          </ChakraLink>

          <Flex justifyContent={"center"} width={"40px"}>
            <GitHub />
          </Flex>

          <ChakraLink isExternal href={"https://github.com/LiviaDevolder"}>
            <u>www.github.com/LiviaDevolder</u>
          </ChakraLink>
        </SimpleGrid>
      </Flex>
      <Flex w={"50%"} color={"#FFF"} flexDir={"column"}>
        <Text marginBottom={'8px'} fontSize={"28px"} fontWeight={"bold"}>
          Menu
        </Text>
        <Flex gap={'8px'} flexDir={'column'}>
          <Link href={"#experiencia"}><u>Experiência</u></Link>
          <Link href={"#formacao"}><u>Formação</u></Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
