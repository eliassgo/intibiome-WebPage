import { Image } from './styles'

export type Props = {
  image: string
  imageDescription: string
  mobileBanner?: string
}

const Banner = ({ image, imageDescription, mobileBanner }: Props) => {
  return (
    <>
      <Image src={image} alt={imageDescription} mobileBanner={mobileBanner} />
    </>
  )
}
export default Banner
