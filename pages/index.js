import React from "react"
import { Container, Box, Heading, Text, Image, Button, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section";
import Paragraph from "../components/Paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Bio"

const Home = () => {
  return(
    <Container>
      <Box borderRadius="lg" p={3} align="center" bg={useColorModeValue("whiteApha.500", "whiteAplha.300")}>
        Hello, I am a developer based on a place called Earth
      </Box>
      <Box display={{ md: "flex"}}>
        <Box flexGrow={1} justifyContent="center">
          <Heading as="h2" variant="page-title"> Aobakwe Kodisang</Heading>
          <Text>A human being!</Text>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align="center">
          <Image 
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jfif"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">About me</Heading>
        <Paragraph>
          A developer, I like building things and all the cute stuff.
          I like doing pretty much everything, obsessed with low level things, the finer details and all that
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button rightIcon={<ChevronRightIcon />}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2020-present</BioYear>
          Worked at Smart Macmane, as a developer
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I like...
        </Heading>
        <Paragraph>
          Robotics, Football, AI, insert buzzword here...
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Home;