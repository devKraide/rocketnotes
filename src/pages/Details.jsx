import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.
export function Details() {
  
  return (
    <Fragment>
  <h1>Hello World!</h1>  
  <span>Made by Nicolas Kraide A.K.A the best developer of his house</span>
  </Fragment>
  )
}
