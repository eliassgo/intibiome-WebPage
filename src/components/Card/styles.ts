import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, fonts } from '../../styles'

export const CardComponent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    width: ${(props) => props.width + 'px'};
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 80%;
      font-size: ${fonts.unnamedFontSize31};
      line-height: ${fonts.unnamedLineSpacing40};
      letter-spacing: ${fonts.unnamedCharacterSpacing062};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`
