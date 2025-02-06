//import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.

import { Container } from "./styles.js";
import { Button } from "../../components/Button";

export function Details() {

  return (
    <Container>

      <h1>Hello World!</h1>
      <p>made by Nicolas Kraide, A.K.A best developer of his house</p>

    <Button/>
    </Container>
  )
}
