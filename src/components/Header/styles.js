import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

`;

export const Profile = styled.div`

  display: flex;
  align-items: center;

  > img {
    
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 16px;

  }

  > div {

    display: flex;
    flex-direction: column;

     span {

      font-size: 12px;
      color: ${(props) => props.theme.COLORS.GREY_100};
      line-height: 15px;
    }

     strong {

      font-size: 18px;
      color: ${(props) => props.theme.COLORS.WHITE};

    }
  }

`;

export const Logout = styled.button`
  
  background-color: transparent;
  border: none;

  >svg {
    
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: 36px;

}

`;