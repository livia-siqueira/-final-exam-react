import styled from 'styled-components'

export const Container = styled.div`
    width: 75%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    color: #707070;
    overflow: hidden;
    padding-bottom: 20px;

    @media(max-width: 1226px){
        width: 90%;
    }

    @media(max-width: 720px){
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 0rem;
    }


`
export const Text = styled.p`
    font-style: italic;
    font-size: 0.8rem;
    font-weight: bold;
    color: #868686;


`
export const Title = styled.h2`
    font-size: 2rem;
    font-variant: small-caps;
    font-weight: normal;
    font-style: italic;
    margin: 0;

    span{
        font-variant: normal;
        font-size: 1.5rem;
    }
`

export const Main = styled.main`
    width: 100%;

`

export const ChoiceGame = styled.div` 
    display: flex;

`