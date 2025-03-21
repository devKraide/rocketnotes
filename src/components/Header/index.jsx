import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, Profile, Logout } from "./styles";

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from "../../assets/avatar.jpg"


export function Header() {

  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <HeaderContainer>
      <Profile to="/profile">

        <img
          src={avatarUrl}
          alt="profile image"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>devKraide</strong>
        </div>
      </Profile>


      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </HeaderContainer>
  )
}