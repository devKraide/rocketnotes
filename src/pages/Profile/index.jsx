import { ProfileContainer, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';

import { useNavigate } from "react-router-dom";
import { useState } from 'react'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from "../../assets/avatar.jpg"


export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <ProfileContainer>

      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>

        <Avatar>

          <img
            src={avatar}
            alt="User image"
          />

          <label htmlFor="avatar">
            <FiCamera />


            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
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

        <Button title="salvar" onClick={handleUpdate} />

      </Form>


    </ProfileContainer>
  );
}