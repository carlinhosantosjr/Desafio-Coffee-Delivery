import { useState } from 'react'
import { QuantityInput } from './QuantityInput'
import {
  BottomContainer, BuyButton, BuyButtonContainer, CoffeeContainer,
  LabelContainer,
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
  const [quantity, setQuantity] = useState(1)

  function increaseQuantity() {
    if (quantity >= 10) {
      setQuantity(10)
    } else { setQuantity((state) => state + 1) }
  }

  function decreaseQuantity() {
    if (quantity <= 1) {
      setQuantity(1)
    } else { setQuantity((state) => state - 1) }
  }

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
        <span>{(data.value * quantity).toFixed(2).replace('.', ',')}</span>
        <QuantityInput
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity} value={quantity}
        />
        <BuyButtonContainer>
          <BuyButton size={22} weight="fill" />
        </BuyButtonContainer>
      </BottomContainer>
    </CoffeeContainer>
  )
}
