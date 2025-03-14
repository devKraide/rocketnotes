/* eslint-disable react/prop-types */
import { FiPlus, FiX } from 'react-icons/fi';

import { NoteItemContainer } from './style';

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <NoteItemContainer isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
      type="button" 
      onClick={onClick}
      className = {isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button> 
    </NoteItemContainer>
  )
}
