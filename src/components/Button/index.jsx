/* eslint-disable react/prop-types */
import { ButtonContainer } from './styles'

export function Button({ title, loading = false, ...rest }) {
  return (
    <ButtonContainer
      
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </ButtonContainer >
  )
}
