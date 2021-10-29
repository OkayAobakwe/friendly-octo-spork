import NextLink from "next/link"
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import Paragraph from "../components/Paragraph"

export const GridItem = ({ children, href, title, thumbnail }) => {
  return(
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image 
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Paragraph>{children}</Paragraph>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, name }) => {
   return (
     <Box w="100%" align="center" bg="blur">
       <NextLink href={id}>
         <LinkBox cursor="pointer">
           <Heading as="h2">{name}</Heading>
          <LinkOverlay href={id}>
            <Text mt={2} fontSize={20}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
         </LinkBox>
       </NextLink>
     </Box>
   )
}

export const GridItemStyle = () => (
  <Global 
    styles={
      `.grid-item-thumbnail {
        border-radius: 12px;
      }`
    }
  />
)