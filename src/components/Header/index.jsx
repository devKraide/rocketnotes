import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, Profile, Logout } from "./styles";

import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from "../../assets/avatar.jpg"


export function Header() {

  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <HeaderContainer>
      <Profile to="/profile">

        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>


      <Logout onClick={handleSignOut}>  
        <RiShutDownLine />
      </Logout>

    </HeaderContainer>
  )
}