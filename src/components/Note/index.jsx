/* eslint-disable react/prop-types */
import { NoteContainer } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <NoteContainer {...rest}>
      <h1>{data.title}</h1>
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
