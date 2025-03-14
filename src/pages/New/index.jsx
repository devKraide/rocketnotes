import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {TextArea} from "../../components/TextArea";
import {NoteItem} from "../../components/NoteItem";
import {Section} from "../../components/Section";

import { NewContainer, Form } from "./style";

export function New () {
  return (
    <NewContainer>
      <Header/>

      <main>
        <Form>

          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder= 'Título'/>
          <TextArea placeholder= 'Observações'/>

          <Section title = "Links úteis">	
          <NoteItem value="https://apple.com"/>  
          <NoteItem isNew placeholder='Novo link'/>  
          </Section>

        </Form>
      </main>

    </NewContainer>
  )
  
}