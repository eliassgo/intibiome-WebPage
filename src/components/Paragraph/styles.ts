import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const Paragraph = styled.div<Props>`
  width: ${(props) => props.width + 'px'};
  margin-bottom: 8px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`
