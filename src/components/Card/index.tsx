import React from 'react'
import { CardComponent } from './styles'

export type Props = {
  children: JSX.Element
  title: string
  margin: string
  width?: string
}

const Card = ({ title, margin, children, width }: Props) => {
  return (
    <CardComponent
      className="container"
      margin={margin}
      title={title}
      width={width}
    >
      <>
        <h2 className="h2">{title}</h2>
        {children}
      </>
    </CardComponent>
  )
}

export default Card
