import { Box, ColorModeScript, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Education from "../src/components/Education";
import Experience from "../src/components/Experience";
import Footer from "../src/components/Footer";
import Intro from "../src/components/Intro";
import Languages from "../src/components/Languages";
import Menu from "../src/components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Portfolio pessoal de Lívia Devolder"
        />
        <link rel="icon" href="/favicon.ico" key="icon" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="base-googlefonts"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          key="base-googlestatic"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baumans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ColorModeScript initialColorMode={"light"} />
      <Box>
        <Menu />
        <Flex
          px={{ base: "40px", lg: "120px" }}
          paddingTop={{ base: "50px", lg: "64px" }}
          gap={"50px"}
          flexDir={"column"}
        >
          <Intro />
          <Experience />
          <Education />
          <Languages />
        </Flex>
        <Footer />
      </Box>
    </div>
  );
}
