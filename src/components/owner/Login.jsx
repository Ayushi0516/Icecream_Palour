import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
// display="block" margin="auto"
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleSubmit=()=>{
    if(!email || !password){
      setError(true);
      return;
    }
    else{
      setError(false)
      navigate("/owner/inventory")
    }
  }
  return (
    
    <Box w="full"  mt="55" align="center" justifyContent="center" >
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Box textAlign="center">
        <Heading>Login</Heading>
      </Box>
      <Box my={4} textAlign="left"  >
        
        <form>
          <FormControl  >
            {/* <ErrorMessage>fill all the fields</ErrorMessage> */}
          {error && <div>fill</div> }
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}     placeholder="test@test.com" />
           
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Password</FormLabel>
            <Input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="*******" />
          </FormControl>
          <Button  onClick={handleSubmit} width="full" colorScheme="blue" mt={4} type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  </Box>
);
};

export default Login;
