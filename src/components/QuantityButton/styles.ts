import styled from "styled-components";

export const QuantityButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: ${props => props.theme["gray-400"]};
    min-width:5.125rem;
    margin-left: auto;
    padding: 0.5rem;
    border-radius: ${props => props.theme["border-radius-primary"]};
    overflow: hidden;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        line-height: 0;
        background-color: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["purple-500"]};
        cursor: pointer;
    }
`