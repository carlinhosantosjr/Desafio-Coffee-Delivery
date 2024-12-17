import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CheckoutContainer = styled.div`
background-color: ${props => props.theme.gray['gray-100']};
display: flex;
margin: auto;
justify-content: space-between;
margin-top: 9rem ;
max-width: 80%;
min-height: 700px;
gap: 2rem;

h1 {
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-600']};
  font-size: 18px;
  line-height: 130%;
  font-weight: bold;
}
`

export const SelectedCoffeesContainer = styled.div`
display: flex;
flex-direction: column;
width: 60%;
gap: 1rem;
`

export const SelectedCoffees = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
width: 90%;
border-radius: 8px 35px ;
`
export const SelectedCoffeesBottom = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto;
margin: -20px 40px 40px 40px;
gap: 0.7rem;
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-400']};


span {
  display: flex;
  justify-content: end;
  font-size: 16px;
}

label {
  display: flex;
  font-size: 14px;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-size: 20px;
}

h3:nth-of-type(2) {
  display: flex;
  justify-content: end;
}
`
export const ConfirmCheckoutButtom = styled(NavLink)`
text-decoration: none;
grid-column: 1 / -1;
background-color: ${props => props.theme.yellow['yellow-500']};
border-radius: 6px;
margin: 6px 0;
height: 100%;

cursor: pointer;

&:hover {
  background-color: ${props => props.theme.yellow['yellow-700']};
}

p {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.white};
  font-size: 14px;
  line-height: 160%;
  font-weight: bold;
  }
`
