import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ILanguage } from "../../interfaces/ILanguage";

export default function CardLang({ name, level, image }: ILanguage) {
  return (
    <Flex
      bgColor={"#D9D9D9"}
      boxShadow="1px 2px 10px rgba(0, 0, 0, 0.2)"
      borderRadius={"5px"}
      px={"20px"}
      flexDir={"column"}
      alignItems={"center"}
      gap={"12px"}
    >
      <Text color={"#000852"} fontFamily={"Baumans"} fontSize={"32px"}>
        {name}
      </Text>
      <Box maxW={"60%"}>
        <Image src={image} alt={`Country flag`} />
      </Box>
      <Text color={"#000852"} fontSize={'24px'}>{level}</Text>
    </Flex>
  );
}
