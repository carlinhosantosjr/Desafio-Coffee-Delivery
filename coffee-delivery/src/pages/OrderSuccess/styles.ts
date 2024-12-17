import styled from 'styled-components'

export const MainSuccessContainer = styled.div`
display: flex;
margin: auto;
min-height: 700px;
`

export const OrderSuccessContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, auto);
margin: auto;
margin-top: 12rem;
gap: 3rem;
`

export const TitleInfoContainer = styled.div`
grid-column: 1 / -1;

h1 {
  color: ${props => props.theme.yellow['yellow-700']};
  font-family: ${props => props.theme['font-family'].baloo};
  font-size: 32px;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 20px;
  font-weight: 500;
}
`

export const OrderInfoContainer = styled.div`
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-direction: column;
gap: 2.5rem;
border: 1px solid transparent;
border-radius: 5px 35px;
padding: 40px;
background-color: ${props => props.theme.gray['gray-100']};
height: 100%;
`

export const GradientBorderContainer = styled.div`
  border-radius: 5px 35px;
  background: linear-gradient(45deg, #ff7f50, #1e90ff);
  padding: 1px;
`

export const PhraseContainer = styled.div`
display: grid;
grid-template-columns: 10% 90%;
grid-template-rows: repeat(2, auto);
row-gap: 0.1rem;
column-gap: 0.525rem;
font-size: 16px;

span {
  font-weight: bold;
}
`

const IconContainer = styled.div`
display: flex;
justify-content: center;
grid-row: 1 / 3;
padding: 8px;
border-radius: 999px;
margin: 4px;
`

export const MapPinIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.purple['purple-500']};
`

export const TimerIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.yellow['yellow-500']};
`

export const CurrencyIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.yellow['yellow-700']};
`
