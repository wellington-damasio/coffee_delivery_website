import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div {
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;

         & > div:last-child {
            max-width: 28rem;
        }   
    }
`