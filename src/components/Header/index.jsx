import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, Profile, Logout } from "./styles";

export function Header() {

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


      <Logout>
        <RiShutDownLine />
      </Logout>

    </HeaderContainer>
  )
}