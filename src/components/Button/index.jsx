import { Container } from "./styles";
import PropTypes from 'prop-types';

//proptypes is a library that allows you to define the type of props that a component should receive. It is a good practice to use it to avoid bugs in the future.

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
}

export function Button({title, loading = false, ...rest}) {
  return (
    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
      {loading ? 'loading...' : title}      
    </Container>
  )
}

// The button component receives two props, title and loading. The title is a string and is required, while loading is a boolean and is not required. If loading is true, the button will be disabled. If loading is false, the button will be enabled and will display the title.