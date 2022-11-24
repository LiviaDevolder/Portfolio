import { Flex, Link } from "@chakra-ui/react";
import CristalH from "../../../public/CristalH";
import { IMenu } from "../../interfaces";

export default function DesktopNav({ sessions }: IMenu) {
  return (
    <Flex alignItems={"center"} gap={"24px"}>
      {sessions.map((item, index) => {
        return (
          <>
            <Link
              href={`#${item.link}`}
              _hover={{ textDecor: "none" }}
              fontSize={"24px"}
              fontFamily={"Baumans"}
              color={"#FFF"}
            >
              {item.name}
            </Link>
            {index !== 3 ? <CristalH /> : null}
          </>
        );
      })}
    </Flex>
  );
}
