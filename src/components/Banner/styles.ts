import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { Props } from '.'

export const Image = styled.img<Omit<Props, 'imageDescription' | 'image'>>`
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 40px;
    ${(props) =>
      props.mobileBanner ? `content: url(${props.mobileBanner});` : ''}
  }
`
