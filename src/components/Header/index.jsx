import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, Profile, Logout } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <Profile>

        <img
          src="https://github.com/devKraide.png"
          alt="profile image"
        />

        <div>
          <span>Welcome</span>
          <strong>devKraide</strong>
        </div>
      </Profile>


      <Logout>
        <RiShutDownLine />
      </Logout>

    </HeaderContainer>
  )
}