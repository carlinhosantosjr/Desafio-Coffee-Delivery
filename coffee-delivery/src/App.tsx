import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import irlandes from './assets/logo.svg'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>hahahaha</h1>
        <img src={irlandes} alt="" />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
