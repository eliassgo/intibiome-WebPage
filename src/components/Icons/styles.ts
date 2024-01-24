import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const IconsComponent = styled.div`
  margin: 40px 0 !important;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 40px !important;
    display: flex;
    justify-content: center;
    img {
      width: 90%;
    }
  }
`
