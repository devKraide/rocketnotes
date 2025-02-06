import { Container } from "./styles";
import PropTypes from 'prop-types';

//proptypes is a library that allows you to define the type of props that a component should receive. It is a good practice to use it to avoid bugs in the future.

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export function Button({title}) {
  return (
    <Container type="button">
      {title}      
    </Container>
  )
}

