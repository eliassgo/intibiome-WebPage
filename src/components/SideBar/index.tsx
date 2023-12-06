import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import * as S from './styles'
import Button from '../Button'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <p className="empty-text">SIDE BAR</p>
        <Button type={'button'} title={'button'}>
          Button
        </Button>
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
