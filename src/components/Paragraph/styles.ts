import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.div<Props>`
  width: ${(props) => props.width + 'px'};
  margin-top: 12px;
`
