import styled from "styled-components";

export const NoteItemContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({isNew, theme}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};  

  border: ${({isNew, theme}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    background: none;
    border: none;

    font-size: 22px;
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.ORANGE};
  }
  .button-delete {
    color: ${({theme}) => theme.COLORS.RED};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;  