import { Paragraph } from './styles'

export type Props = {
  children: JSX.Element
  width?: string
}
const Card = ({ children, width }: Props) => {
  return (
    <Paragraph width={width}>
      <>
        <span className="p-large">{children}</span>
      </>
    </Paragraph>
  )
}

export default Card
