import Loader from '../Loader'
import Item from '../ListItem'

import * as S from './styles'
import { useEffect, useState } from 'react'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const List = ({ background, title }: Props) => {
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
        <S.Container background={background}>
          <div className="container">
            <h2>{title}</h2>
            <S.List>
              <li>
                <Item
                  category={'exemplo'}
                  description={'exemplo'}
                  image={'exemplo'}
                  title={'exemplo'}
                />
              </li>
            </S.List>
          </div>
        </S.Container>
      )}
    </>
  )
}
export default List
