import { Flex, Text } from "@chakra-ui/react";

interface IDataBox {
  text: string;
}

export default function DataBox({ text }: IDataBox) {
  return (
    <Flex
      px={"20px"}
      py={"5px"}
      bgColor={"#ADB5FF"}
      boxShadow={"1px 2px 10px rgba(0, 0, 0, 0.2)"}
      w={"max-content"}
    >
      <Text>{text}</Text>
    </Flex>
  );
}
