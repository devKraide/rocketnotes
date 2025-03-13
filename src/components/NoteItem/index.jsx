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

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </NoteItemContainer>
  )
}
