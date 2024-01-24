import React from 'react'
import { ArticleComponent, Description } from './styles'

export type Props = {
  image: string
  imageDescription: string
  description: string
  link: string
  id: string
}
const Article = ({ image, imageDescription, description, link, id }: Props) => {
  return (
    <ArticleComponent id={id}>
      <div>
        <img src={image} alt={imageDescription} rel="preload" />
      </div>
      <Description href={link}>
        <span className="p">{description}</span>
      </Description>
    </ArticleComponent>
  )
}

export default Article
