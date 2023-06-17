// import React from 'react'

// const ErrorMessage = ({children}) => {
//   return (
//     <div style={{width :"100%", padding:10, marginBottom:10, borderRadius:4, textAlign:"center",backgroundColor:"red", }}>{children}</div>
//   )
// }

// export default ErrorMessage


import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
 function ErrorMessage({ message }) {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}

export default ErrorMessage