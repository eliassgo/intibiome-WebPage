import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size={'large'}>Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            Por {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Venha Aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
export default Banner
