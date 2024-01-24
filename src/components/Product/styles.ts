import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 356px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0px 3px 16px ${colors.lightGray};
  opacity: 1;

  img {
    border-radius: 16px;
  }
  p {
    margin: 24px 32px;
  }
`
export const CardTitle = styled.div<
  Omit<Props, 'image' | 'description' | 'title' | 'imageDescription'>
>`
  padding: 20px 24px;
  background-color: ${(props) =>
    props.descriptionCardColor === 'blue'
      ? colors.blue
      : props.descriptionCardColor === 'red'
      ? colors.red
      : colors.green};
  color: ${colors.white};
  width: 100%;
  border-radius: 0px 0px 16px 16px;
`
