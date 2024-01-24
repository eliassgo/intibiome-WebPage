import { Image } from './styles'

export type Props = {
  image: string
  imageDescription: string
  mobileBanner?: string
}

const Banner = ({ image, imageDescription, mobileBanner }: Props) => {
  return (
    <div id="home">
      <Image
        rel="preload"
        src={image}
        alt={imageDescription}
        mobileBanner={mobileBanner}
      />
    </div>
  )
}
export default Banner
