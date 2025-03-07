import { NoteContainer } from './style';
import { Tag } from '../Tag';

// eslint-disable-next-line react/prop-types
export function Note({ title, tag, ...rest }) {
  return (
    <NoteContainer {...rest}>
    
      <h1>{title}</h1>

      {
        tag &&
        <footer>
          {
            // eslint-disable-next-line react/prop-types
            tag.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      } 

    </NoteContainer>
  );
};
