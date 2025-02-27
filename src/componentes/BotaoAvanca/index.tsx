import styled from "styled-components"

const Botao = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  img{
    width: 20px;
  }
  &.next:hover{
    animation: next 500ms ease-in-out infinite
    /* timing-function delay iteration-count direction fill-mode; */
  }
  &.back:hover{
    animation: back 500ms ease-in-out infinite
    /* timing-function delay iteration-count direction fill-mode; */
  }

  @keyframes next {
    0%{
      transform: translate(0,0);
    }
    50%{
      transform: translate(20%,0);
    }
    100%{
      transform: translate(0,0);
    }
  }

  @keyframes back {
    0%{
      transform: translate(0,0);
    }
    50%{
      transform: translate(-20%,0);
    }
    100%{
      transform: translate(0,0);
    }
  }

`

const BotaoAvanca = ({setIdPokemon,imagem,alt}:{imagem:string,alt:string,setIdPokemon: React.Dispatch<React.SetStateAction<string|number>>})=>{
    const mudarDePokemon = (evento:React.MouseEvent)=>{
      evento.preventDefault()
      alt === 'next'?setIdPokemon(anterior =>typeof anterior ==="number"? anterior+1:anterior):setIdPokemon(anterior =>typeof anterior ==="number"? anterior-1:anterior)
    }

    return(
        <Botao className={alt} onClick={e=>mudarDePokemon(e)}>
            <img src={imagem} alt={`icone da seta ${alt}`} />
        </Botao>
    )
}

export default BotaoAvanca