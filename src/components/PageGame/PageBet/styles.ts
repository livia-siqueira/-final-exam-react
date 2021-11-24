import styled from 'styled-components'

export const Container = styled.div`
    width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 80px;
    color: #707070;

    max-height: 100px;

    @media(max-height: 90px ){
        width: 1400px;
    }


`

export const Title = styled.h2`
    font-size: 2rem;
    font-variant: small-caps;
    font-weight: normal;
`

export const Main = styled.main`
    width: 100%;

`