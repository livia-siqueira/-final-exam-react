import styled from 'styled-components'

export const Container = styled.div`
    width: 75%;
    margin: 2px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    color: #707070;
    overflow: hidden;
    padding-bottom: 20px;


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