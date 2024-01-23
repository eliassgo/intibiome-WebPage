import React from 'react'
import imageExample from '../../assets/images/image-mask-03.jpg'
import { ArticleComponent } from './styles'

const Article = () => {
  return (
    <ArticleComponent>
      <div>
        <img src={imageExample} alt="" />
      </div>
      <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </ArticleComponent>
  )
}

export default Article
