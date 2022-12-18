import styled from 'styled-components'

const COLORS: any = {
    yellow: 'yellow-500',
    purple: 'purple-500'
}

export const FormContainer = styled.div`
    margin-inline: auto;

    h2 {
        margin-bottom: 1rem;
        font-size: ${props => props.theme['heading-xs-fs']};
        color: ${props => props.theme['brown-500']};
    }

    .first-half {
        display: grid;
        margin-bottom: 3rem;
    }

    .first-half,
    .second-half {
        padding: 2.5rem;
        border-radius: ${props => props.theme['border-radius-primary']};
        background-color: ${props => props.theme['gray-100']};
    }
`

export const InformationContainer = styled.div<any>`
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;
    margin-bottom: 1rem;

    .icon {
        color: ${props => props.theme[COLORS[props.iconColor]]}
    }

    h3 {
        font-family: ${props => props.theme['ff-text']};
        font-size: ${props => props.theme['text-md-fs']};
        font-weight: ${props => props.theme['fw-regular']};
        margin-bottom: 0.4rem;
    }

    p {
        font-size: ${props => props.theme['text-md-fs']};
        color: ${props => props.theme['brown-300']};
    }

    & > div {
        margin-top: -0.2rem;
    }
`

export const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.5rem;
    row-gap: 1rem;

    .optional-input {
        position: relative;
        display: block;

        // Positioning the 'Additional Info' input in the CSS Grid
        grid-column: 2 / -1;

        &::after {
            content: 'Opcional';
            position: absolute;
            top:  0.5rem;
            right: 0.5rem;
            font-size: ${props => props.theme['text-xxs-fs']};
            font-style: italic;
            color: ${props => props.theme['brown-200']};
        }
    }

    select {
        min-height: 2.625rem;
        font-size: ${props => props.theme['text-sm-fs']};
        background-color: ${props => props.theme['gray-200']};
        color: ${props => props.theme['brown-500']};
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 0 1px ${props => props.theme['gray-400']};
        width: 100%;
        padding: 0.75rem;
    }
`

export const TextInput = styled.input`
    min-height: 2.625rem;
    font-size: ${props => props.theme['text-sm-fs']};
    background-color: ${props => props.theme['gray-200']};
    color: ${props => props.theme['brown-500']};
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 0 1px ${props => props.theme['gray-400']};
    width: 100%;
    padding: 0.75rem;

    &::placeholder {
        color: ${props => props.theme['brown-200']};
    }

    /* Positioning Input in CSS Grid */
    &#cep {
        grid-column: 1 / -1;
    }

    &#street {
        grid-column: 1 / 4;
    }

    &#house-number {
        grid-column: 4 / 5;
    }

    &#neighbourhood {
        grid-column: 1 / 3;
    }

    &#city {
        grid-column: 3 / 5;
    }

    &#state {
        grid-column: 1 / 2;
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 1rem;

    & > span {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.625rem;
        background-color: ${props => props.theme['gray-400']};
        color: ${props => props.theme['brown-300']};
        font-size: ${props => props.theme['text-xs-fs']};
        text-transform: uppercase;
        padding: 1rem;
        border-radius: 6px;
        width: 100%;
        cursor: default;
        /* Avoid button moving when adding borders on hover' */
        border: 2px solid transparent;

        &:hover,
        &.focus {
            border-color: ${props => props.theme['purple-500']};
            background-color: ${props => props.theme['purple-100']};
        }
    }

    .icon {
        color: ${props => props.theme['purple-500']};
        font-size: 16px;
        line-height: 0;
    }

    input[type='radio'] {
        position: absolute;
        inset: 0;
        opacity: 0;

    }

    @media screen and (min-width: 750px) {
        flex-direction: row;
    }
`