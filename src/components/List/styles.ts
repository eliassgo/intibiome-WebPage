import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  text-align: center;

  h2 {
    margin-top: 120px;
  }
`
export const ListComponent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 33px;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white} !important;
  text-align: center;
  text-transform: lowercase;
  padding: 32px 178px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`
