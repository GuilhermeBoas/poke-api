import styled from "styled-components"

const Botao = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  img{
    width: 20px;
  }
`

const BotaoAvanca = ({setIdPokemon,imagem,alt}:{imagem:string,alt:string,setIdPokemon: React.Dispatch<React.SetStateAction<string | number>>})=>{
    const mudarDePokemon = (evento:React.MouseEvent)=>{
        evento.preventDefault()
        alt === 'next'?setIdPokemon(anterior =>typeof anterior ==="number"? anterior+1:anterior):setIdPokemon(anterior =>typeof anterior ==="number"? anterior-1:anterior)
    }

    return(
        <Botao onClick={e=>mudarDePokemon(e)}>
            <img src={imagem} alt={`icone da seta ${alt}`} />
        </Botao>
    )
}

export default BotaoAvanca