import { InputContainer } from "./style";

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest }) {

  return (
    <InputContainer>

      {Icon && <Icon  size={20} />}
      <input {...rest} />

    </InputContainer>
  )

} 