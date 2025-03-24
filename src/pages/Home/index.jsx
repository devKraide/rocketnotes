import { Container, Brand, Search, Menu, Content, NewNote } from './styles.js';

import { FiPlus } from 'react-icons/fi';

import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {

  const [tags, setTags] = useState('')
  const [selectedTags, setSelectedTags] = useState('')

  function handleSelectedTag(tagName) {
    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }

    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>

      <Header />

      <Menu>

        <li>
          <ButtonText
            title="Todos"
            isActive={selectedTags.length === 0}
            onClick={() => handleSelectedTag('all')}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li
              key={String(tag.id)}
            >
              <ButtonText
                onClick={() => handleSelectedTag(tag.name)}
                title={tag.name}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))
        }

      </Menu>

      <Search>
        <Input placeholder="Pesquisar notas" />
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