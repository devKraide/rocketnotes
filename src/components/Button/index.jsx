import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Button(props) {
  return (
    <Container type="button">
      {props.title}      
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
