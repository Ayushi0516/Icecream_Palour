import React from 'react'
import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
        <Flex minWidth='max-content' alignItems='center' gap='2' p="3" boxShadow='lg'  rounded='md' bg='white' >
    <Box p='2' display="flex" alignItems="center" justifyContent="space-between">
      <Image src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f368.svg" w="30px"/>
      <Heading size='md'>Masai Ice-cream Parlor</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
      <Button colorScheme='blue'   >Login</Button>
      <Button colorScheme='blue'>Inventory</Button>
      <Button colorScheme='blue'>Add IceCream</Button>
    </ButtonGroup>
  </Flex>
    </div>
  )
}

export default Navbar