import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { ISessions } from "../../interfaces";
import CristalH from "../../../public/CristalH";
import CloseBtn from "../../../public/CloseBtn";
import HamburgerMenu from "../../../public/HamburgerMenu";
import { sessions } from "../../data/session";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#000852"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"#767BAD"}
        align={"center"}
        box-shadow={isOpen ? "none" : "1px 2px 10px rgba(0, 0, 0, 0.1)"}
      >
        <Flex flex={{ base: 1 }} justify={"space-around"} alignItems={"center"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"Baumans"}
            fontSize={"40px"}
            color={"#ADB5FF"}
          >
            Lívia Devolder
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
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
          </Flex>
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseBtn /> : <HamburgerMenu />}
            variant={"unstyled"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={"#000852"} p={4} display={{ md: "none" }}>
      {sessions.map((item) => (
        <MobileNavItem key={item.name} {...item} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ name, link }: ISessions) => {
  return (
    <Flex gap={4} justifyContent={"center"}>
      <Flex
        py={2}
        as={Link}
        href={`#${link}` ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={"#D9D9D9"}
          fontSize={"20px"}
          fontFamily={"Baumans"}
        >
          {name}
        </Text>
      </Flex>
    </Flex>
  );
};
