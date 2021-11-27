import styled from "styled-components";

export const Container = styled.div`  
width: 75%;
margin: 50px auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 200px;

@media(max-width: 720px){
    grid-template-columns: 1fr;
  }

`
