import styled from 'styled-components'

export const DeliveryInfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 55%;

p {
  color: ${props => props.theme.brown['brown-600']};
  font-size: 16px;
}

span {
  color: ${props => props.theme.brown['brown-400']};
  font-size: 14px;
}
`

export const FormContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 0 0 40px 50px;
`

export const HeaderFormContainer = styled.div`
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-basis: 100%;
line-height: 130%;
padding: 25px 0 0;
gap: 0.525rem;
`

const BaseInput = styled.input`
background-color: ${props => props.theme.gray['gray-300']};
height: 42px;
border-radius: 6px;
border: 1px solid ${props => props.theme.gray['gray-400']};
padding: 10px;
font-size: 14px;
line-height: 130%;
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
outline: none;

&:focus {
  border: thin solid ${props => props.theme.yellow['yellow-700']};
}
`

export const CepInput = styled(BaseInput)`
width: 35%;
`

export const StreetInput = styled(BaseInput)`
width: 90%;
`

export const NumberInput = styled(BaseInput)`
width: 35%;
`

export const AddressComplementInput = styled(BaseInput)`
width: 52.5%;
`

export const DistrictInput = styled(BaseInput)`
width: 35%;
`

export const CityInput = styled(BaseInput)`
width: 41.8%;
`

export const StateInput = styled(BaseInput)`
width: 8%;
`

export const PaymentMethodContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 10px 0 70px 50px;
`

export const HeaderPaymentContainer = styled.div`
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-basis: 100%;
line-height: 130%;
padding: 25px 0 10px;
gap: 0.525rem;
`

export const PaymentButton = styled.button`
background-color: ${props => props.theme.gray['gray-400']};
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
align-items: center;
gap: 0.5rem;
padding-left: 14px;
justify-content: start;
font-size: 12px;
height: 45%;
width: 29%;
border: none;
border-radius: 6px;
cursor: pointer;

&:hover {
  background-color: ${props => props.theme.brown['brown-100']};
}

&:active {
  border: 1px solid ${props => props.theme.purple['purple-500']};
  background-color: ${props => props.theme.purple['purple-100']};
}
`
