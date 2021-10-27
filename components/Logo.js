import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue, Link as UILink } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
&:hover img {
  transform: rotate(20deg);
  }
`
const Logo = () => {
  //const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`
  return (
    <Link href="/">
      <UILink>
        <LogoBox>
          {/* <Image src={footPrintImg}/> */}
          <Text 
            color={useColorModeValue("grey.800","whiteAlpha.900" )}
            fontFamily="'M PLUS Roounded 1c'"
            fontWeight="bold"
            ml={3}>
              Aobakwe Kodisang
          </Text>
        </LogoBox>
      </UILink>
    </Link>
  )
}

export default Logo