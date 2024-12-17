import {
  DecreaseButton, IncreaseButton, QuantityContainer,
  QuantityInputContainer,
} from './styles'

interface quantityProps {
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  value: number
}

export function QuantityInput(data: quantityProps) {
  return (
    <QuantityContainer>
      <DecreaseButton onClick={data.onDecreaseQuantity} />
      <QuantityInputContainer value={data.value} readOnly />
      <IncreaseButton onClick={data.onIncreaseQuantity} />
    </QuantityContainer>
  )
}
