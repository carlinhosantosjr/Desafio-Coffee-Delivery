import { CoffeeCartItem } from './components/CoffeeCartItem'
import { DeliveryInfo } from './components/DeliveryInfo'
import {
  CheckoutContainer, ConfirmCheckoutButtom, SelectedCoffees,
  SelectedCoffeesBottom,
  SelectedCoffeesContainer,
} from './styles'

import expresso from '../../assets/coffees/expresso.svg'

const cafeTeste = {
  id: 1,
  name: 'Expresso Tradicional',
  image: expresso,
  value: 500.90,
}

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryInfo />
      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>
        <SelectedCoffees>
          <CoffeeCartItem
            id={cafeTeste.id}
            image={cafeTeste.image}
            name={cafeTeste.name}
            value={cafeTeste.value}
          />
          <CoffeeCartItem
            id={cafeTeste.id}
            image={cafeTeste.image}
            name={cafeTeste.name}
            value={cafeTeste.value}
          />
          <SelectedCoffeesBottom>
            <label>Total de itens</label>
            <span>R$ 29,70</span>
            <label>Entrega</label>
            <span>R$ 3,50</span>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
            <ConfirmCheckoutButtom to="/success" title="OrderSuccess">
              <p>CONFIRMAR PEDIDO</p>
            </ConfirmCheckoutButtom>
          </SelectedCoffeesBottom>
        </SelectedCoffees>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
