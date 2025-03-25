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

  const [search, setSearch] = useState('')
  const [note, setNote] = useState([])

  const [selectedTags, setSelectedTags] = useState([])
  const [tags, setTags] = useState([])


  function handleSelectedTag(tagName) {
    if (tagName === 'all') {
      return setSelectedTags([])
    }

    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {

      const newSelectedTags = [...selectedTags, tagName]

      if (newSelectedTags.length === tags.length) {
        setSelectedTags([])
      } else {
        setSelectedTags(newSelectedTags)
      }

    }
  }


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNote(response.data)
    }

    fetchNotes()
  }, [selectedTags, search])

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
        <Input
          placeholder="Pesquisar notas"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            note.map(note => (
              <Note
                key={String(note.id)}
                data={note}
              />
            ))
          }

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );

};