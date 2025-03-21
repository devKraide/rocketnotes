import { ProfileContainer, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Link } from "react-router-dom";


import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return (
    <ProfileContainer>

      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>

          <img
            src="https://github.com/devKraide.png"
            alt="User image"
          />

          <label htmlFor="avatar">
            <FiCamera />


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
          value={name}

          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          value={email}

          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"

          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"

          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="salvar" />

      </Form>


    </ProfileContainer>
  );
}