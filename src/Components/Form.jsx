import { useState } from 'react';
import { FormControl, FormLabel, Flex, Box, Heading, Input, Container, useToast, Text } from "@chakra-ui/react";
import FormButton from "./FormButton";

const initialData = {
    oldPassword: "",
    newPassword: "",
    passwordConfirmation: "",
}

  const Form = () => {
    const toast = useToast();
    const [state, setState] = useState({
        data: initialData,
        error: "",
        loading: false,
        disabled: true,
      });

    const handleChange = (e) =>
      setState({
        ...state,
        data: { ...state.data, passwordConfirmation: "", [e.target.name]: e.target.value },
        error: "",
    });

    const handleConfirmChange = (e) => {
        setState({
            ...state,
            data: { ...state.data, [e.target.name]: e.target.value },
            error: state.data.newPassword === e.target.value ? "" : "Password is no equals to password confirmation",
            disabled: state.data.newPassword === e.target.value ? false : true
        });
    }

    const sendingData = () => {
       setState({
          data: initialData,
          error: "",
          loading: false,
          disabled: true,
        });
        toast({
            title: "Password is changed.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
      }
      
    const handleSubmit = (e) => {
      e.preventDefault();
      setState({
        ...state,
        loading: true
      })
      setTimeout(sendingData, 1000);
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center" mb="10" p="15">
            <Heading as="h4" size="lg">CREATE YOUR NEW PASSWORD</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={(e) => handleSubmit(e)} >
              <FormControl mt={4}>
                <FormLabel color="gray.500">Old password</FormLabel>
                <Input 
                    type="password" 
                    variant="flushed" 
                    placeholder="" 
                    color="gray.500"  
                    name="oldPassword"
                    value={state.data.oldPassword}
                    onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="gray.500">New password</FormLabel>
                <Input 
                    type="password" 
                    variant="flushed" 
                    placeholder="" 
                    color="gray.500" 
                    name="newPassword"
                    isInvalid={state.error !== ""}
                    errorBorderColor="crimson"
                    value={state.data.newPassword} 
                    onChange={(e) => handleChange(e)} />
                    {state.error !== "" ? <Text color="crimson">{state.error}</Text> : null}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="gray.500">Confirm new password</FormLabel>
                <Input 
                    type="password" 
                    variant="flushed" 
                    size="lg" 
                    placeholder="" 
                    color="gray.500" 
                    name="passwordConfirmation"
                    isInvalid={state.error !== ""}
                    errorBorderColor="crimson"
                    value={state.data.passwordConfirmation} 
                    onChange={(e) => handleConfirmChange(e)} />
                    {state.error !== "" ? <Text color="crimson" >{state.error}</Text> : null}
              </FormControl>
              <Container width="full" centerContent mt={4} p="15">
                <FormButton disabled={state.disabled} loading={state.loading} />
              </Container>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Form;