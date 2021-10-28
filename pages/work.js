import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/GridItem"

const Work = () => {
  return(
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>Work</Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            name="r/" 
            title="reddit-clone"
            id="https://github.com/OkayAobakwe/reddit-clone" 
          >
            A reddit clone.
            This is full-stack project that I built
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Work