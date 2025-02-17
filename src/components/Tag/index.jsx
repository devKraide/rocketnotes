import { TagContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export function Tag({ title }) {
  return (
    <TagContainer>
      {title}
    </TagContainer>
  );
}