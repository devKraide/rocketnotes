import { ButtonTextContainer } from "./style";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, ...rest }) {
  return (
    <ButtonTextContainer
      type="button"
      {...rest}>

      {title}

    </ButtonTextContainer>
  );
}