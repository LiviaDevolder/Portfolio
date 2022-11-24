import { Flex, Text } from "@chakra-ui/react";
import { ISessions } from "../../interfaces";
import DesktopNav from "./DesktopNav";

const sessions: ISessions[] = [
  { name: "experiência", link: "experiencia"},
  { name: "formação", link: "formacao"},
  { name: "projetos", link: "projetos"},
  { name: "contato", link: "contato"},
];

export default function Menu() {
  return (
    <Flex justifyContent={"space-around"} bgColor={"#000852"} py={"16px"}>
      <Text fontFamily={"Baumans"} fontSize={"40px"} color={"#ADB5FF"}>
        Lívia Devolder
      </Text>
      <DesktopNav sessions={sessions} />
    </Flex>
  );
}
