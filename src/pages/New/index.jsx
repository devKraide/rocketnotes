import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {Link} from "react-router-dom";

import { NewContainer, Form } from "./style";

export function New() {
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
            <NoteItem value="https://apple.com" />
            <NoteItem isNew placeholder='Novo link' />
          </Section>


          <Section title="Marcadores">
            <div className="tags">

              <NoteItem value="React" />
              <NoteItem isNew placeholder='Novo marcador' />
            </div>

          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>

    </NewContainer>
  )

}