import { ProfileContainer, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';

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

        <Avatar>

          <img 
          src="https://github.com/devKraide.png" 
          alt="User image" 
          />

          <label htmlFor="avatar">
          <FiCamera/>
          

          <input
           type="file" 
           id="avatar"
          />
          </label>

        </Avatar>

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