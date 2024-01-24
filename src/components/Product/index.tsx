import { CardTitle, Item } from './styles'

export type Props = {
  image: string
  description: string
  title: string
  imageDescription: string
  descriptionCardColor: string
}
const Product = ({
  image,
  description,
  title,
  imageDescription,
  descriptionCardColor
}: Props) => {
  return (
    <>
      <Item title={title}>
        <div>
          <img src={image} alt={imageDescription} rel="preload" />
        </div>
        <p className="p">{description}</p>
        <CardTitle descriptionCardColor={descriptionCardColor}>
          <span className="h4">{title}</span>
        </CardTitle>
      </Item>
    </>
  )
}

export default Product
