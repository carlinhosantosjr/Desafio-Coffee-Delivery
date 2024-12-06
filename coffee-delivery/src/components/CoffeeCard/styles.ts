import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CoffeeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
background-color: ${props => props.theme.gray['gray-200']};
max-width: 16rem;
max-height: 19.375rem;
border-radius: 5px 25px ;

img {
  margin-top: -1.25rem;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-family: ${props => props.theme['font-family'].baloo};
}

p {
  color: ${props => props.theme.brown['brown-200']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  margin: 0 0.625rem;
}
`

export const LabelContainer = styled.div`
display: flex;
gap: 0.325rem;

span {
  background-color: ${props => props.theme.yellow['yellow-100']};
  color: ${props => props.theme.yellow['yellow-700']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: bold;
  padding: 0.313rem;
  border-radius: 10px;
}
`

export const BottomContainer = styled.div`
display: flex;
align-items: center;
margin-inline: 0.625rem;
gap: 0.5rem;
padding: 1.563rem;

p {

  margin-left: 0;
  font-size: 0.875rem;
  margin-right: -0.313rem;
}

span {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 130%;
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-400']};
}
`
export const QuantityContainer = styled.div`
background-color: ${props => props.theme.gray['gray-400']};
align-items: center;
display: flex;
gap: 0.2rem;
padding: 0.625rem;
border-radius: 8px;
`

export const QuantityInput = styled.input`
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-800']};
font-size: 1rem;
display: flex;
text-align: center;
border: none;
background-color: transparent;
max-width: 1.4rem;
//pointer-events: none;
`

export const DecreaseButton = styled(Minus)`
color: ${props => props.theme.purple['purple-500']};
font-size: 0.875rem;
font-style: bold;
cursor: pointer;
`

export const IncreaseButton = styled(Plus)`
color: ${props => props.theme.purple['purple-500']};
font-size: 0.875rem;
font-style: bold;
cursor: pointer;
`

export const BuyButtonContainer = styled.div`
display: flex;
background-color: ${props => props.theme.purple['purple-700']};
border-radius: 5px;
padding: 0.313rem;
`

export const BuyButton = styled(ShoppingCartSimple)`
color: ${props => props.theme.white};
cursor: pointer;
`
