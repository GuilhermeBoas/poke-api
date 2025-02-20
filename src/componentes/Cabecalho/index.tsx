import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    background-image: linear-gradient(to right, #A92F3A, #D43B47,#A92F3A);
    border-radius: 0 0 24px 24px;
    display: flex;
    justify-content: center;
    img{
        width: 150px;
    }
`

const Cabecalho = () =>{
    return(
        <CabecalhoEstilizado>
            <img src="/pokedex.png" alt="" />

        </CabecalhoEstilizado>

    )
}

export default Cabecalho