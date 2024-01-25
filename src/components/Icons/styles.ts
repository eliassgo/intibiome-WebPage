import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const IconsComponent = styled.div`
  img {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    img {
      width: 90%;
      margin: 0;
    }
  }
`
