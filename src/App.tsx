import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/themes/defaultTheme'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import GlobalStyle from './styles/globals'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
