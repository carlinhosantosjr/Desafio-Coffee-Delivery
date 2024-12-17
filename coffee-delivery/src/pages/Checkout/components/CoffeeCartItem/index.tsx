import { QuantityInput } from '../../../../components/CoffeeCard/QuantityInput'
import {
  CoffeeCartItemButtonContainer,
  CoffeeCartItemContainer,
  CoffeeItemInfoContainer,
  RemoveButton,
  RemoveButtonContainer,
} from './styles'

export interface CoffeeCartItemProps {
  id: number,
  name: string,
  image: string,
  value: number,
}

export function CoffeeCartItem(data: CoffeeCartItemProps) {
  return (
    <CoffeeCartItemContainer>
      <CoffeeItemInfoContainer>
        <img src={data.image} alt="" />
        <h3>{data.name}</h3>
        <CoffeeCartItemButtonContainer>
          <QuantityInput />
          <RemoveButtonContainer>
            <RemoveButton size={16} />
            <label>REMOVER</label>
          </RemoveButtonContainer>
        </CoffeeCartItemButtonContainer>
      </CoffeeItemInfoContainer>
      <span>R$ {data.value.toFixed(2).replace('.', ',')}</span>
    </CoffeeCartItemContainer>
  )
}
