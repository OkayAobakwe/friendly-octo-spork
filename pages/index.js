import { Container, Box, Heading, Text } from "@chakra-ui/react"

const Home = () => {
  return(
    <Container>
      <Box borderRadius="lg" p={3} align="center">
        Hello, I am a developer based on a place called Earth
      </Box>
      <Box display={{ md: "flex"}}>
        <Box flexGrow={1} justifyContent="center">
          <Heading as="h2" variant="page-title"> Aobakwe Kodisang</Heading>
          <Text>A human being!</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;