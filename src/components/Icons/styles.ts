import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const IconsComponent = styled.div`
  img {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    img {
      width: 90%;
      margin: 0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
`
