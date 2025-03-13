import { ProfileContainer, Form } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <ProfileContainer>

      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header>

      <Form>

        <Input 
          placeholder="Nome"
          icon={FiUser}
          type="text"
        />

        <Input 
          placeholder="E-mail"
          icon={FiMail}
          type="text"
        />

        <Input 
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
        />

        <Input 
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
        />

        <Button title="salvar"/>

      </Form>


    </ProfileContainer>
  );
}