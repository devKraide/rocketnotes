import { TagContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export function Tag({ title, ...rest }) {
  return (
    <TagContainer {...rest}>
      {title}
    </TagContainer>
  );
}