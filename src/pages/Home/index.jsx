import { Container, Brand, Search, Menu, Content, NewNote } from './styles.js';

import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {

  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos"  /></li>
        <li><ButtonText title="React" $isactive = {false}/></li>
        <li><ButtonText title="Node"$isactive = {false} /></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar notas"  />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );

};