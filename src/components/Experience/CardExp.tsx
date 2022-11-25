import { Flex, Text } from "@chakra-ui/react";

export default function CardExp() {
  return (
    <Flex
      bgColor={"#D9D9D9"}
      boxShadow="1px 2px 10px rgba(0, 0, 0, 0.2)"
      borderRadius={"5px"}
      p={"24px"}
    >
      <Flex flexDir={"column"} gap={"12px"}>
        <Text color={"#000852"} fontSize={"24px"}>
          Renault Group | 2021 | Desenvolvedor Júnior
        </Text>
        <Text color={"#000852"} fontSize={"16px"}>
          Desenvolvo no projeto do e-commerce de diversos países da América
          Latina, sempre buscando as tecnologias mais recentes.
        </Text>
      </Flex>
    </Flex>
  );
}
