import {
  Bank, CreditCard, CurrencyDollar, MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressComplementInput,
  CepInput,
  CityInput, DeliveryInfoContainer,
  DistrictInput,
  FormContainer,
  HeaderFormContainer,
  HeaderPaymentContainer,
  NumberInput,
  PaymentButton,
  PaymentMethodContainer,
  StateInput,
  StreetInput,
} from './styles'
import { useTheme } from 'styled-components'

export function DeliveryInfo() {
  const theme = useTheme()

  return (
    <DeliveryInfoContainer>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <HeaderFormContainer>
          <MapPinLine
            size={22} weight="regular"
            color={theme.yellow['yellow-700']}
          />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderFormContainer>
        <CepInput placeholder="CEP" />
        <StreetInput placeholder="Rua" />
        <NumberInput placeholder="Número" />
        <AddressComplementInput placeholder="Complemento" />
        <DistrictInput placeholder="Bairro" />
        <CityInput placeholder="Cidade" />
        <StateInput placeholder="UF" />
      </FormContainer>
      <PaymentMethodContainer>
        <HeaderPaymentContainer>
          <CurrencyDollar
            size={22} weight="regular"
            color={theme.purple['purple-500']}
          />
          <div>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a
              forma que deseja pagar
            </span>
          </div>
        </HeaderPaymentContainer>
        <PaymentButton>
          <CreditCard size={16} color={theme.purple['purple-500']} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton>
          <Bank size={16} color={theme.purple['purple-500']} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton>
          <Money size={16} color={theme.purple['purple-500']} />
          DINHEIRO
        </PaymentButton>
      </PaymentMethodContainer>
    </DeliveryInfoContainer>
  )
}
