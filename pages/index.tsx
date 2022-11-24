import { Box, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import Menu from "../src/components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio pessoal de Lívia Devolder" />
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
        <link href="https://fonts.googleapis.com/css2?family=Baumans&display=swap" rel="stylesheet" />
      </Head>
      <ColorModeScript initialColorMode={"light"} />
      <Box>
        <Menu />
      </Box>
    </div>
  );
}
