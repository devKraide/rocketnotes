//import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.

import { Container } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export function Details() {

  return (
    <Container>
      <Header/>
    <Button title="Voltar" />

    </Container>
  )
}
<Button/>
