import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
}

const ListItem = ({ title, category, description, image }: Props) => {
  return (
    <S.Card
      title={`Clique aqui para ve mais detalhes: ${title}`}
      to={`/product`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        <Tag>{category}</Tag>
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{title}</Tag>
      <S.Description>{description}</S.Description>
    </S.Card>
  )
}

export default ListItem
