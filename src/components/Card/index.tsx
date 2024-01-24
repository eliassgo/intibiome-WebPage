import { CardComponent } from './styles'

export type Props = {
  children: JSX.Element
  title: string
  width?: string
}

const Card = ({ title, children, width }: Props) => {
  return (
    <CardComponent className="container" title={title} width={width}>
      <>
        <span className="h2 title">{title}</span>
        {children}
      </>
    </CardComponent>
  )
}

export default Card
