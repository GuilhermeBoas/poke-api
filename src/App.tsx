import styled from 'styled-components'
import Cabecalho from './componentes/Cabecalho'
import EstilosGlobais from './componentes/EstilosGlobais'
import PapelDeParede from './componentes/PapelDeParede'
import Card from './componentes/Card'
import BotaoFundo from './componentes/BotaoFundo'
import { useState } from 'react'

const ContainerPrincipal = styled.div`
  position: relative;
`
const MainApp = styled.main`
  display: flex;
  flex-direction: column;
`

const FormularioEstilizado = styled.form`
 margin: auto;
 width: 100%;
 max-width: 350px;
`

const InputPokemon = styled.input`
  margin: 12px auto;
  border-radius: 16px;
  background-image: url('/icons/search.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: 20px;
  width: 100%;
  height: 32px;
  text-align: center;
  &::placeholder{
    opacity: 1;
    position: absolute;
    left: 6%;
  }
`
// botar um container para add o botão de submit 
const referenciaFundo = [
  'God',
  'City',
  'Waterfall',
]

function App() {
  const [inputValue, setInputlValue] = useState<string>('')
  const [fundo,setfundo] = useState('God')
  const [idPokemon,setIdPokemon] = useState<string|number>(1)
  // 650? ta em chines a descricão ate o 898

  const aoMudarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputlValue(e.target.value)
  }

  return (
    <>
      <EstilosGlobais />
      <ContainerPrincipal>
        <PapelDeParede classEscolhida={fundo} fundos={referenciaFundo} />
        <Cabecalho />

        <MainApp>
          <FormularioEstilizado 
            onSubmit={(e)=>{e.preventDefault();
            setIdPokemon(inputValue);
            setInputlValue('')}
          }>

            <InputPokemon
              value={inputValue}
              placeholder='Search'
              type="text"
              onChange={e => aoMudarInput(e)
              }
            />
          </FormularioEstilizado>

          <Card setIdPokemon={e=>setIdPokemon(e)} idPokemon={idPokemon} />
          {/* Falta so o card meu padrino - fazer tags de Tipo */}
          {/* mudar cor do semi-Circulo para ser compativel com o tipo de pokemom */}
          {/* Falta trabalhar com o local Storage */}
          
          {/* adicionar setas para trocar pokemon do lado*/}
        </MainApp>

        <BotaoFundo retornoAoClicar={(e)=>setfundo(e)} botoes={referenciaFundo} />
       
      </ContainerPrincipal>
    </>
  )
}


export default App
