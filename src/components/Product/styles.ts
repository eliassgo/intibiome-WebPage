import styled from 'styled-components'
import { colors } from '../../styles'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 356px;
  text-align: center;
  box-shadow: 0 0 10px 2px ${colors.lightGray};
  opacity: 1;
  border-radius: 16px;

  p {
    margin: 24px 32px;
  }
`
export const CardTitle = styled.div`
  padding: 20px 24px;
  background-color: ${colors.blue};
  color: ${colors.white};
  width: 100%;
  border-radius: 0px 0px 16px 16px;
`
