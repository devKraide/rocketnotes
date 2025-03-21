import { useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

import { NewContainer, Form } from "./style";

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))

  }


  return (
    <NewContainer>
      <Header />

      <main>
        <Form>

          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder='Título' />
          <TextArea placeholder='Observações' />

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

              <NoteItem value="React" />
              <NoteItem isNew placeholder='Novo marcador' />
            </div>

          </Section>

          <Button title="Salvar" />
        </Form>
      </main>

    </NewContainer>
  )

}