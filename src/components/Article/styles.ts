import styled from 'styled-components'
import { colors } from '../../styles'

export const ArticleComponent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 16px;
  width: 356px;
  height: 100%;
  box-shadow: 0px 3px 16px ${colors.lightGray};
  img {
    border-radius: 16px 16px 0px 0px;
  }
`
export const Description = styled.a`
  padding: 24px 32px 50px 32px;
  text-decoration: none;
`
