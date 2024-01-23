import React from 'react'
import { CardTitle, Item } from './styles'

export type Props = {
  image: string
  description: string
  title: string
  imageDescription: string
}
const Product = ({ image, description, title, imageDescription }: Props) => {
  return (
    <>
      <Item title={title}>
        <div>
          <img src={image} alt={imageDescription} />
        </div>
        <p className="p">{description}</p>
        <CardTitle>
          <span className="h4">{title}</span>
        </CardTitle>
      </Item>
    </>
  )
}

export default Product
