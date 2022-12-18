import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/themes/defaultTheme'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import GlobalStyle from './styles/globals'
import { OrdersContextProvider } from './contexts/OrdersContext'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <OrdersContextProvider>
            <AppRouter />
          </OrdersContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
