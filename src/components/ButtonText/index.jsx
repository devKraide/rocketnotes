import { ButtonTextContainer } from "./style";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isActive = true, ...rest }) {
  return (
    <ButtonTextContainer
      type="button"
      isActive = {isActive}
      {...rest}>

      {title}

    </ButtonTextContainer>
  );
}