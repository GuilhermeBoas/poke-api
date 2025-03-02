import styled from "styled-components"

interface BotaoAvancaProps{
  imagem: string, 
  alt: string, 
  setIdPokemon: React.Dispatch<React.SetStateAction<string | number>>
}

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
const BotaoAvanca = ({setIdPokemon, imagem, alt} : BotaoAvancaProps) => {
  const checkNumeroMaximo = (numero:string | number,alt:string)=>{
    if(typeof numero === "number"){      
      //somando numero
      if (alt==='next'){
        if(numero+1===1026){
          return 10001
        }
        if(numero+1===10280){
          return 1
        }
        return numero+=1
      }//subtraindo
      else{
        if(numero-1===10000){
          return 1025
        }
        if(numero-1===0){
          return 10279
        }
        return numero-=1
      }
    }else{
      return numero
    }
  }


  const mudarDePokemon = (evento: React.MouseEvent) => {
    evento.preventDefault()
    setIdPokemon(anterior=> checkNumeroMaximo(anterior,alt) )
    
    
    
  }

  return (
    <Botao className={alt} onClick={e => mudarDePokemon(e)}>
      <img src={imagem} alt={`icone da seta ${alt}`} />
    </Botao>
  )
}

export default BotaoAvanca