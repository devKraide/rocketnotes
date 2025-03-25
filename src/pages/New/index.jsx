import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { NewContainer, Form } from "./style";

export function New() {
  //title and description
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  //link
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))

  }

  //tags

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))

  }

  //sending note

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNewNote() {

    if (!title) {
      return alert("Por favor, insira o título da nota")
    }

    if (newTag || newLink) {
      return alert("Links ou Tags não confirmados serão perdidos! Por favor, revise os campos de texto.")

    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert('Nota cadastrada com sucesso!')
    navigate(-1)
  }


  return (
    <NewContainer>
      <Header />

      <main>
        <Form>

          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title='Voltar'
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
          />


          <Section title="Links úteis">

            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => { handleRemoveLink(link) }}
                />
              ))
            }

            <NoteItem
              isNew
              placeholder='Novo link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)} />
                ))
              }

              <NoteItem
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                isNew
                placeholder='Novo marcador'
              />
            </div>

          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>

    </NewContainer>
  )

}