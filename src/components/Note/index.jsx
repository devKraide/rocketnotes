import { NoteContainer } from './styles';

export function Note(data, ...rest) {
  return (
    <NoteContainer {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tag.map(tag => {
              <span key={tag.id}>
                {tag.name}
              </span>
            })
          }
        </footer>
      }

    </NoteContainer>

  );
};
