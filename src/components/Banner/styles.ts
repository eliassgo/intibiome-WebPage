import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { Props } from '.'

export const Image = styled.img<Omit<Props, 'imageDescription' | 'image'>>`
  width: 100%;

  @media (max-width: 760px) {
    ${(props) =>
      props.mobileBanner ? `content: url(${props.mobileBanner});` : ''}
  }
`
