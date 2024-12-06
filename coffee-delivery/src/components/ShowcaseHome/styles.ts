import styled from 'styled-components'

export const ShowcaseContainer = styled.section`
width: 100%;
display: flex;
height: 34rem;
background: radial-gradient(
      ellipse at 25% 65%,
      rgba(235, 193, 54, 0.1),
      transparent 20%
    ),radial-gradient(
      ellipse at 70% 50%,
      rgba(235, 193, 54, 0.1),
      transparent 40%
    ),radial-gradient(
      ellipse at 30% 30%,
      rgba(235, 193, 54, 0.1),
      transparent 40%
    ),radial-gradient(
      ellipse at 25% 20%,
      rgba(128, 71, 248, 0.04),
      transparent 100%
    );

img {
  margin: auto auto auto 40px;
}

@media (max-width:768px){
  display: none;
}
`
export const ShowcaseTitle = styled.div`
  width: 588px;
  margin: auto 0 auto auto;

  h1 {
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-800']};
  font-size: 48px;
  font-weight: 900;
  line-height: 130%;
}

h3 {
  font-family: ${props => props.theme['font-family'].roboto};
  color: ${props => props.theme.brown['brown-600']};
  font-weight: normal;
  font-size: 20px;
  line-height: 130%;
  margin-top: 15px;
}
`

export const ShowcaseIcons = styled.div`
display: grid;
align-items: left;
margin-top: 50px;
grid-template-columns: 0.8fr 1fr;

p {
  color: ${props => props.theme.brown['brown-400']};
  font-family: ${props => props.theme['font-family'].roboto};
}

span {
  display: inline-flex;
  border-radius: 20px;
  padding: 8px;
  margin-right: 10px;
  margin-top: 16px;
}

  p:nth-child(1) span {
    background-color: ${props => props.theme.yellow['yellow-700']};
}

p:nth-child(2) span {
    background-color: ${props => props.theme.brown['brown-400']};
}
p:nth-child(3) span {
    background-color: ${props => props.theme.yellow['yellow-500']};
}
p:nth-child(4) span {
    background-color: ${props => props.theme.purple['purple-500']};
}
`
