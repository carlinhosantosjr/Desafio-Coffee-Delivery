import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 10rem);

  background: ${props => props.theme['gray']['gray-200']};
  border-radius: 8px;
  display: flex;
  margin: auto;

`
