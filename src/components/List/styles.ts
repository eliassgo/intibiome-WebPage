import { styled } from 'styled-components'
import { breakpoints, colors, fonts } from '../../styles'

export const Container = styled.div`
  text-align: center;
  margin-bottom: 120px !important;
  span {
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 80px;
      font-size: ${fonts.unnamedFontSize31};
      line-height: ${fonts.unnamedLineSpacing40};
      letter-spacing: ${fonts.unnamedCharacterSpacing062};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 80px !important;
    margin-bottom: 64px !important;
  }
`
export const ListComponent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 33px;
  margin-top: 80px;

  li {
    height: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 0;

    li {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
`

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white} !important;
  text-align: center;
  text-transform: lowercase;
  width: 392px;
  padding: 20px 0;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  margin-top: 85px;

  @media (max-width: 760px) {
    width: 90%;
    margin-top: 40px;
    margin-bottom: 16px !important;
  }
`
