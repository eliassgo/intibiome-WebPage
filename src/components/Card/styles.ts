import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, colors, fonts } from '../../styles'

export const CardComponent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    width: ${(props) => props.width + 'px'};
    margin: 40px 0 40px 0;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0px 0 40px 0;
      width: 80%;
      font-size: ${fonts.unnamedFontSize31};
      line-height: ${fonts.unnamedLineSpacing40};
      letter-spacing: ${fonts.unnamedCharacterSpacing062};
    }
  }
`
