import {
  Box,
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { AuthContext } from "../../context/AuthContext";
// display="block" margin="auto"
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false)
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email ) {
      setError("Email required ");
      setForm(" ")
      return;
    }
    else if(!form.password){
      setError(" password required");
    }
    
    else if( form.password.length < 6 ){
      setError("Password must be greater than the 6 characters");
    }
     else {
      try{
        setLoading(true)
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify(form)
        })
          .then((res) => res.json())
          .then((res) => {
           
            auth.handleLogin(res.token)
            setLoading(false)
            console.log(res.token)
            navigate("/owner/inventory");
            
           
          })
      }
      catch(err){
        setLoading(false);
        setError("Error");
        console.log(err);
        setForm("")
      }
     
  
     }
  };
  return (
    <Box w="full" mt="55" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl >
              {/* <ErrorMessage>fill all the fields</ErrorMessage> */}
           {/* Invalid Username & Password */}
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="test@test.com"
              />
            </FormControl>
            <FormControl mt={3} >
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="*******"
              />
            </FormControl>
            <Button width="full" colorScheme="blue" mt={4} type="submit">
             {loading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Login'
            )}
            
             
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
