import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, Profile, Logout } from "./styles";

import { useAuth } from '../../hooks/auth'

export function Header() {

  const { signOut } = useAuth()

  return (
    <HeaderContainer>
      <Profile to="/profile">

        <img
          src="https://github.com/devKraide.png"
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