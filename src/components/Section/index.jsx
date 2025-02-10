import { SectionContainer } from './styles.js';



// eslint-disable-next-line react/prop-types
export function Section({ title, children }) {

  return (
    <SectionContainer>

      <h2>{title}</h2>

      {children}

    </SectionContainer>
  );


} 