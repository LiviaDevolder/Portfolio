import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { language } from "../../data/language";
import { ILanguage } from "../../interfaces/ILanguage";
import CardLang from "./CardLang";

export default function Languages() {
  return (
    <Flex flexDir={"column"} gap={"12px"}>
      <Text
        color={"#000852"}
        fontFamily={"Baumans"}
        fontSize={{ base: "50px", lg: "64px" }}
      >
        Idiomas
      </Text>
      <SimpleGrid columns={{ base: 2, lg: 4}} spacing={"24px"}>
        {language.map((item: ILanguage, index) => {
          return (
            <CardLang
              key={index}
              name={item.name}
              image={item.image}
              level={item.level}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
