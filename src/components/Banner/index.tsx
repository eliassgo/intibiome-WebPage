import Loader from '../Loader'
import Button from '../Button'

import * as S from './styles'
import { useEffect, useState } from 'react'

export type Props = {
  image: string
  title: string
  subtitle: string
  page: string
}

const Banner = ({ image, title, subtitle, page }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula um atraso de 2 segundos antes de definir o estado de loading para false
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <S.Image style={{ backgroundColor: `url(${image})` }}>
          <div className="container">
            <div>
              <S.Title>{title}</S.Title>
              <S.Prices>
                <span>{subtitle}</span> <br />
              </S.Prices>
            </div>
            <Button
              type="link"
              to={`/element/${page}`}
              title="Venha Aproveitar essa oferta"
            >
              Ir para page
            </Button>
          </div>
        </S.Image>
      )}
    </>
  )
}
export default Banner
