import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p="5" border="1px solid red">
    <Box p='2'>
      <Heading size='md'>Chakra App</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
      <Button colorScheme='teal'>Sign Up</Button>
      <Button colorScheme='teal'>Log in</Button>
    </ButtonGroup>
  </Flex>
  )
}

export default Navbar