import { Flex, Text } from "@chakra-ui/react";
import { stack } from "../../data/stack";
import DataBox from "../DataBox";

export default function CardEdu() {
  return (
    <Flex
      bgColor={"#D9D9D9"}
      boxShadow="1px 2px 10px rgba(0, 0, 0, 0.2)"
      borderRadius={"5px"}
      p={"24px"}
    >
      <Flex flexDir={"column"} gap={"12px"}>
        <Text color={"#000852"} fontSize={"24px"}>
          Tecnologia em Sistemas da Computação
        </Text>
        <Flex alignItems={"center"} gap={"16px"}>
          <Text color={"#000852"} fontSize={"16px"}>
            Universidade Federal Fluminense
          </Text>
          <DataBox text={"2021 - 2023"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
