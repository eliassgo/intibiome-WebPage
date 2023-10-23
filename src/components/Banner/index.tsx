import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { ImagemDiv, Precos, Titulo } from './styles'
import { Game } from '../../pages/Home'

import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((resp) => resp.json())
      .then((resp) => setGame(resp))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <ImagemDiv style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size={'large'}>Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            Por {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Venha Aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </ImagemDiv>
  )
}
export default Banner
