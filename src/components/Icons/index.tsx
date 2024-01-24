import React from 'react'
import IconsImage from '../../assets/images/icons.jpg'
import { IconsComponent } from './styles'

const Icons = () => {
  return (
    <IconsComponent className="container">
      <img src={IconsImage} alt="intibione's benefits icons" rel="preload" />
    </IconsComponent>
  )
}

export default Icons
