import styled from "styled-components";

export const ButtonTextContainer = styled.button`

  color: ${({ theme, isactive }) =>   isactive ? theme.COLORS.ORANGE: theme.COLORS.GRAY_100 };

  background: none;
  border: none;
  font-size: 16px;

  

`;