import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme['purple-500']};
        border-radius: 4px;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme['brown-300']};
        font-weight: ${props => props.theme['fw-regular']};
        padding-bottom: 5rem;
    }

    body, input, textarea, button {
        font-family: ${props => props.theme['ff-text']};
        line-height: ${props => props.theme['default-line-height']};
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme['ff-heading']}
    }

    .container {
        width: 90%;
        max-width: 70rem;
        margin-inline: auto;
    }
`

export default GlobalStyle