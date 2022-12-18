import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
    max-width: 16rem;
    border-radius: 6px 36px 6px 36px;
    background-color: ${props => props.theme["gray-100"]};
    padding: 0 1.25rem 1.25rem 1.25rem;

    img {
        height: 7.5rem;
        aspect-ratio: 1 / 1;
        margin-top: -1.75rem;
        margin-bottom: 0.75rem;
        object-fit: cover;
    }

    .tags {
        display: flex;
        gap: 0.4rem;
    }

    .tag {
        font-size: ${props => props.theme["text-xs-fs"]};
        line-height: 13px;
        font-weight: ${props => props.theme["fw-bold"]};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        color: ${props => props.theme["yellow-700"]};
        background-color: ${props => props.theme["yellow-100"]};
        margin-bottom: 1rem;
    }

    h3 {
        font-size: ${props => props.theme["heading-sm-fs"]};
        color: ${props => props.theme["brown-500"]};
        margin-bottom: 0.5rem
    }

    p {
        font-size: ${props => props.theme["text-sm-fs"]};
        color: ${props => props.theme["brown-200"]};
        margin-bottom: 2rem;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    .price {
        font-family: ${props => props.theme["ff-heading"]};
        font-size: ${props => props.theme['heading-md-fs']};
        font-weight: ${props => props.theme["fw-bold"]};
        color: ${props => props.theme["brown-500"]};

        &::before {
            content: 'R$';
            font-family: ${props => props.theme["ff-text"]};
            font-size: ${props => props.theme["text-sm-fs"]};
            font-weight: ${props => props.theme["fw-regular"]};
            margin-right: 0.25rem;
        }
    }   
`

export const BuyButton = styled.button`
    border: none;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["purple-700"]};
    padding: 0.55rem;
    line-height: 0;
    border-radius: ${props => props.theme["border-radius-primary"]};
    cursor: pointer;
`