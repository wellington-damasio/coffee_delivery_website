import styled from 'styled-components'

export const CardsContainer = styled.div`
    h2{
        font-size: ${props => props.theme['heading-lg-fs']};
        margin-bottom: 3.725rem;
        color: ${props => props.theme['brown-500']};
    }

    div.container {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 4rem;
        justify-items: center;

        @media screen and (min-width: 600px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 900px){
            grid-template-columns: repeat(3, 1fr);
        }

        @media screen and (min-width: 1450px){
            grid-template-columns: repeat(4, 1fr);
        }
    }

    margin-bottom: 5rem;
`