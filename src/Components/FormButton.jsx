import { Button } from "@chakra-ui/react";
import PropTypes from 'prop-types';

  const FormButton = ({ loading, disabled }) => {
    return (
        <Button 
        width="60" 
        height="full" 
        type="submit" 
        p="5" 
        bgColor="blue.600" 
        color="white"
        isLoading={loading}
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="start"
        disabled={disabled}
        _hover={ !disabled ? { bg: "blue.400" } : ''}
    >
        SAVE CHANGES
    </Button>
    );
  }

  FormButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired
  }
  
  export default FormButton;