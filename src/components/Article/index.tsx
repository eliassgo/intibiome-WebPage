import React from 'react'
import { ArticleComponent, Description } from './styles'

export type Props = {
  image: string
  imageDescription: string
  description: string
}
const Article = ({ image, imageDescription, description }: Props) => {
  return (
    <ArticleComponent>
      <div>
        <img src={image} alt={imageDescription} />
      </div>
      <Description>
        <span className="p">{description}</span>
      </Description>
    </ArticleComponent>
  )
}

export default Article
