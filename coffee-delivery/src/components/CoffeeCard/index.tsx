import {
  BottomContainer, BuyButton, BuyButtonContainer, CoffeeContainer,
  DecreaseButton, IncreaseButton, LabelContainer, QuantityContainer,
  QuantityInput,
} from './styles'

interface tagsInterface {
  id: number,
  tag: string
}

export interface CoffeeCardProps {
  id: number,
  name: string,
  description: string,
  image: string,
  value: number,
  tags: tagsInterface[]
}

export function CoffeeCard(data: CoffeeCardProps) {
  return (
    <CoffeeContainer>
      <img src={data.image} alt="" />
      <LabelContainer>
        {data.tags.map((tag) =>
          <span key={tag.id}>
            {tag.tag}
          </span>,
        )}
      </LabelContainer>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <BottomContainer>
        <p>R$</p>
        <span>{data.value.toFixed(2).replace('.', ',')}</span>
        <QuantityContainer>
          <DecreaseButton />
          <QuantityInput />
          <IncreaseButton />
        </QuantityContainer>
        <BuyButtonContainer>
          <BuyButton size={22} weight="fill" />
        </BuyButtonContainer>
      </BottomContainer>
    </CoffeeContainer>
  )
}
