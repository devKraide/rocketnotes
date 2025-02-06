//import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.

import { Container } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
export function Details() {

  return (
    <Container>

      <Header />

      <Section title="Links úteis">
        <ul>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
      </Section>

      <Button title="Voltar" />

    </Container>
  )
}
<Button />
