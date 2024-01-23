import styled from 'styled-components'
import { Props } from '.'

export const CardComponent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h2 {
    margin-bottom: ${(props) => props.margin + 'px'};
    width: ${(props) => props.width + 'px'};
  }
`
