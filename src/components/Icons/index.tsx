import React from 'react'
import IconsImage from '../../assets/images/icons.jpg'
import { IconsComponent } from './styles'

const Icons = () => {
  return (
    <IconsComponent className="container">
      <img
        src={IconsImage}
        alt="intibione's benefits icons"
        style={{ margin: '40px 0' }}
        rel="preload"
      />
    </IconsComponent>
  )
}

export default Icons
