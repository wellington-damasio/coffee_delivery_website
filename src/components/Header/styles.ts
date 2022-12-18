import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 3.875rem;
`

export const LocationContainer = styled.div`
    font-size: ${props => props.theme["text-sm-fs"]};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: ${props => props.theme["purple-100"]};
    color: ${props => props.theme["purple-700"]};
    border-radius: ${props => props.theme["border-radius-primary"]};
    margin-left: auto;
`

export const CartContainer = styled.div`
    position: relative;
    background-color: ${props => props.theme["yellow-100"]};
    padding: 0.5rem;
    border-radius: ${props => props.theme["border-radius-primary"]};
    line-height: 0;

    .cart-quantity {
        position: absolute;
        top: -0.4rem;
        right: -0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${props => props.theme["text-sm-fs"]};
        font-weight: ${props => props.theme["fw-bold"]};
        color: ${props => props.theme.white};
        background-color: ${props => props.theme["yellow-700"]};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
    }
`