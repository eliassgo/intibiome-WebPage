import * as S from './styles'

export type Props = {
  image: string
  imageDescription: string
}

const Banner = ({ image, imageDescription }: Props) => {
  return (
    <>
      <S.Image src={image} alt={imageDescription} />
    </>
  )
}
export default Banner
