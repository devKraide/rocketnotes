/* eslint-disable react/prop-types */
import { NoteContainer, NoteTitle } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <NoteContainer  {...rest}>
      <NoteTitle>{data.title}</NoteTitle>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      } 
    </NoteContainer>
  );
};
