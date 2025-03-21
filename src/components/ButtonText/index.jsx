import { ButtonTextContainer } from "./style";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <ButtonTextContainer
      type="button"
      $isactive = {isActive}
      {...rest}>

      {title}

    </ButtonTextContainer>
  );
}