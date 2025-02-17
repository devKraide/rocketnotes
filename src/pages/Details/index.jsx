//import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.

import { Container, Links } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
export function Details() {

  return (
    <Container>

      <Header />

      <Section title="Links úteis">
        <Links>
        <li>
          <a href="#">link1</a>
        </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <button>express</button>
        <button>nodejs</button>

      </Section>


      <Button title="Voltar" />

    </Container>
  )
}
<Button />
