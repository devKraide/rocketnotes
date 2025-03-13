/* eslint-disable react/prop-types */
import { TextAreaContainer } from "./style";

export function TextArea({value, ...rest}) {
  return (
    <TextAreaContainer {...rest}>
      {value}
    </TextAreaContainer>
  )
}