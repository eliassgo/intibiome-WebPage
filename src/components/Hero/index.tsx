import Tag from '../Tag'
import * as S from './styles'

type Props = {
  image: string
  tag: string
  text: string
}

const Hero = ({ image, tag, text }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div>
          <Tag>{tag}</Tag>
        </div>
        <S.Infos>{text}</S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
