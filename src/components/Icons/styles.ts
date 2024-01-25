import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const IconsComponent = styled.div`
  img {
    margin: 40px 0 !important;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    img {
      width: 90%;
    }
  }
`
