import styled from "styled-components";
import bgImg from '../../../../assets/images/hero-bg.png'

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    h1 {
        font-size: ${props => props.theme["heading-lg-fs"]};
        font-weight: ${props => props.theme["fw-extra_bold"]};
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
        max-width: 35rem;
        margin-inline: auto;
    }

    width: 90%;
    max-width: 70rem;
    margin-inline: auto;
    margin-bottom: 2rem;

    @media screen and (min-width: 700px) {
        h1 {
            font-size: ${props => props.theme["heading-xl-fs"]}
        }
    }

    @media screen and (min-width: 1100px) {
        flex-direction: row;
        align-items: center;
        text-align: left;
    }
`

export const BackgroundContainer = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    padding-block: 2.5rem;

    /* To make the title below the hero go down */
    margin-bottom: 2rem;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1100px) {
        p  {
            align-self: flex-start;
        }
    }
`

export const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    align-items: center;
    margin-top: 2rem;

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
        margin-top: 4rem;
    }
`

const COLORS = [
    'yellow-700',
    'yellow-500',
    'brown-300',
    'purple-500'
] as const

export const BenefitContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding-left: 0.5rem;

    .icon {
        padding: 0.5rem;
        line-height: 0;
        border-radius: 50%;
    }

    .icon-1 {
        background-color: ${props => props.theme[COLORS[0]]}
    }

    .icon-2 {
        background-color: ${props => props.theme[COLORS[1]]}
    }

    .icon-3 {
        background-color: ${props => props.theme[COLORS[2]]}
    }

    .icon-4 {
        background-color: ${props => props.theme[COLORS[3]]}
    }

    @media screen and (min-width: 900px) {
        padding-left: 0;
    }
`