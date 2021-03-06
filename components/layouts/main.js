import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelLaptop from "../VoxelLaptop";
import NoSsr from "../no-ssr";

const Main = ({ children, router }) => {
  return(
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aobakwe's homepage" />
        <meta name="author" content="Aobakwe Kodisang" />
        <meta name="author" content="okayaobakwe" />
        <title>Aobakwe Kodisang - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelLaptop />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main;