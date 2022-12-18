import styled from "styled-components";

export const Container = styled.div`
    margin-inline: auto;

    h2 {
        margin-bottom: 1rem;
        font-size: ${props => props.theme['heading-xs-fs']};
        color: ${props => props.theme['brown-500']};
    }
`
export const FormContainer = styled.div`
    background-color: ${props => props.theme["gray-100"]};
    padding: 2.5rem;
    border-radius: 6px 44px;

    button[type='submit'] {
        font-size: ${props => props.theme["text-sm-fs"]};
        font-weight: ${props => props.theme["fw-bold"]};
        text-align: center;
        text-transform: uppercase;
        border: none;
        width: 100%;
        min-height: 46px;
        padding: 0.625rem;
        color: ${props => props.theme["white"]};
        background-color: ${props => props.theme["yellow-500"]};
        border-radius: ${props => props.theme["border-radius-primary"]};
        cursor: pointer;
    }
`
export const CoffeeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    gap: 1.25rem;
    color: ${props => props.theme["brown-500"]};
    /* Paddin 2.5rem only in small screens to acomomodate the price below */
    padding-bottom: 2.5rem;
    border-bottom: 1px solid ${props => props.theme["brown-200"]};
    margin-bottom: 1.5rem;

    img {
        object-fit: cover;
        max-width: 3.5rem;
    }

    .edit-order {
     display: flex;   
     flex-direction: column;
     gap: 0.2rem;

     & > div {
        display: flex;
        gap: 0.5rem;
        height: 2rem;
     }
    }

    .remove-btn {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-size: ${props => props.theme["text-xs-fs"]};
        text-transform: uppercase;
        border: none;
        color: ${props => props.theme["brown-500"]};
        background-color: ${props => props.theme["gray-400"]};
        padding: 0.5rem;
        border-radius: ${props => props.theme["border-radius-primary"]};

        .icon {
            color: ${props => props.theme["purple-500"]};
            font-size: 1rem;
            line-height: 0;
        }
    }

    .price {
        /* Positioning price below when in small screens */
        position: absolute;
        right: 0;
        bottom: 0.25rem;


        margin-left: auto;
        font-weight: ${props => props.theme["fw-bold"]};

        &::before {
            content: 'R$';
            margin-right: 0.2rem;
        }
    }

    /* Reseting the price to it's original place */
    @media screen and (min-width: 500px) {
        padding-bottom: 1.5rem;

        .price {
            position: relative;
            bottom: 0;
        }
    }
`
export const PriceContainer = styled.div`
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme["brown-500"]};

        & > span:last-child::before {
            content: 'R$';
            margin-right: 0.2rem;
        }
    }

    & > div:not(:last-child) {
        margin-bottom: 0.625rem;

        span:first-child {
            font-size: ${props => props.theme["text-sm-fs"]};
        }

        span:last-child {
            font-size: ${props => props.theme["text-md-fs"]};
        }
    }

    & > div:last-child {
        font-size: ${props => props.theme["text-lg-fs"]};
        font-weight: ${props => props.theme["fw-bold"]};
        margin-bottom: 1.5rem;
    }
`