import styled from 'styled-components'

export const HomeContainer = styled.div`
margin: auto;
margin-top: 6.5rem ;
width: 100%;
background-color: ${props => props.theme.gray['gray-100']};
padding-bottom: 80px;

h2 {
  grid-column: 1 / 5;
  font-size: 32px;
  line-height: 130%;
  font-weight: 900;
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-600']};
}
`

export const CoffeeListContainer = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  row-gap: 3rem;

`
