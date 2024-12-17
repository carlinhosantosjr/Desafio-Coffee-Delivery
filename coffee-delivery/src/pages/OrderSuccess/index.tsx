import {
  CurrencyIconContainer,
  GradientBorderContainer,
  MainSuccessContainer,
  MapPinIconContainer,
  OrderInfoContainer, OrderSuccessContainer,
  PhraseContainer,
  TimerIconContainer,
  TitleInfoContainer,
} from './styles'
import successImg from '../../assets/successImg.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function OrderSuccess() {
  return (
    <MainSuccessContainer>
      <OrderSuccessContainer>
        <TitleInfoContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </TitleInfoContainer>
        <GradientBorderContainer>
          <OrderInfoContainer>
            <PhraseContainer>
              <MapPinIconContainer>
                <MapPin size={16} weight="fill" color="white" />
              </MapPinIconContainer>
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </PhraseContainer>
            <PhraseContainer>
              <TimerIconContainer>
                <Timer size={16} weight="fill" color="white" />
              </TimerIconContainer>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </PhraseContainer>
            <PhraseContainer>
              <CurrencyIconContainer>
                <CurrencyDollar size={16} color="white" />
              </CurrencyIconContainer>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </PhraseContainer>
          </OrderInfoContainer>
        </GradientBorderContainer>
        <img src={successImg} alt="" />
      </OrderSuccessContainer>
    </MainSuccessContainer>
  )
}
