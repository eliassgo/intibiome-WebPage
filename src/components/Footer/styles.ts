import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Container = styled.footer`
  padding-top: 56px;
  background-color: ${colors.blue};
  padding-bottom: 64px;
  @media (max-width: 760px) {
    margin-top: 80px;
  }
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
    text-align: center;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;
`
export const FooterSection = styled.div`
  margin-top: 60px;
  ul {
    display: flex;
    justify-content: space-between;

    @media (max-width: 760px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`

export const Line = styled.span`
  width: 2px;
  height: 24px;
  display: block;
  background-color: ${colors.white};
  margin: 0 34px;

  @media (max-width: 760px) {
    width: 24px;
    height: 2px;
    margin: 34px 0px;
  }
`
