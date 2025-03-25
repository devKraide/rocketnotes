//import { Fragment } from "react";
// fragment is a wrapper that allows you to return multiple elements without adding a div. The con of using a fragment is that it doesn't support keys or attributes => styled-components. Different from a div.

import { Container, Links, Content } from "./styles.js";
import { api } from "../../services/api.js";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>

      <Header />

      {data &&
        <main>
          <Content>

            <ButtonText title="Excluir nota" />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map((links) => (
                      <li key={String(links.id)}>
                        <a href={links.url} target="_blank" >
                          {links.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map((tag) => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Button
              title="Voltar"
              onClick={handleBack}
            />

          </Content>
        </main>
      }

    </Container>
  )
}
<Button />
