import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

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
          <Input/>
        </Form>
      </main>

    </NewContainer>
  )
  
}