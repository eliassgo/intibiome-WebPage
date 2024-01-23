import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Container = styled.footer`
  padding: 56px 0;
  margin-top: 120px;
  background-color: ${colors.blue};
`
export const Links = styled.ul`
  display: flex;
  margin-top: 41px;
  justify-content: center;
  color: ${colors.white};

  li {
    font-style: ${fonts.unnamedFontStyleNormal};
    font-weight: ${fonts.unnamedFontWeightNormal};
    font-size: ${fonts.unnamedFontSize20};
    line-height: ${fonts.unnamedLineSpacing28};
    letter-spacing: ${fonts.unnamedCharacterSpacing04};
    opacity: 1;
    border-right: 2px solid #fff;
    text-align: center;
    padding: 0px 24px;
  }

  .noneBorder {
    border: none !important;
  }
`
export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;
  padding: 15px 24px;
`
export const FooterSection = styled.div`
  margin-top: 60px;
  ul {
    display: flex;
    justify-content: space-between;
  }
`
