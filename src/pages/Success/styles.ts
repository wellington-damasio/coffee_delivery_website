import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    text-align: center;

    h2 {
        color: ${props => props.theme["yellow-700"]};
        font-size: ${props => props.theme["heading-lg-fs"]};
    }

    p {
        font-size: ${props => props.theme["text-lg-fs"]};
    }
    
    img {
        display: block;
        width: 100%;
        max-width: 450px;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-end;
        margin-block: auto;
        padding-bottom: 7rem;
        text-align: left;
        
        // Repositioning the image to maintain alignment with the info container
        img {
            margin-bottom: -1rem;
        }
    }
`

interface ColorProps {
    iconColor: string
}

const COLORS: any = {
    'purple': 'purple-500',
    'yellow': 'yellow-500',
    'dark-yellow': 'yellow-700',
}

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    background-color: ${props => props.theme.background};
    padding: 2.5rem;
    border-radius: 4px 32px;
    margin-top: 2.5rem;
    text-align: left;

    & > div {
        display: flex;
        align-items: center;
        gap: 0.625rem;

        & > p {
            font-size: ${props => props.theme["text-md-fs"]};
            display: flex;
            flex-direction: column;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background-image: linear-gradient(
            to right,
            ${props => props.theme["yellow-500"]},
            ${props => props.theme["purple-500"]}
        );
        border-radius: 6px 36px;
        z-index: -1;
    }

    .bold {
        font-weight: ${props => props.theme["fw-bold"]};
    }
`

export const IconContainer = styled.span<ColorProps>`
    color: ${props => props.theme.background};
    background-color: ${(props: any) => props.theme[COLORS[props.iconColor]]};
    line-height: 0;
    padding: 0.5rem;
    border-radius: 50%;
`