import styled from "styled-components";
import {Link} from "react-router-dom";


// ...existing code...
export const NoteContainer = styled.button`
  // Replace direct prop usage with $-prefixed props
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;


export const HLink = styled(Link)` 
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  align-self: flex-start;
`;