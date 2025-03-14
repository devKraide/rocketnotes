/* eslint-disable react/prop-types */
import { NoteContainer, HLink } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <NoteContainer  {...rest}>
      <HLink to="/details/:id">{data.title}</HLink>
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
