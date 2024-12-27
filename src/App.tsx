import styled from 'styled-components'
import Cabecalho from './componentes/Cabecalho'
import EstilosGlobais from './componentes/EstilosGlobais'
import PapelDeParede from './componentes/PapelDeParede'
import Card from './componentes/Card'
import BotaoFundo from './componentes/BotaoFundo'
import { useState } from 'react'
import next from './assets/next.png'
import back from './assets/back.png'
import BotaoAvanca from './componentes/BotaoAvanca'
import CardEvolucao from './componentes/CardEvolucao'


// Styled Components
const ContainerPrincipal = styled.div`
  position: relative;
`
const MainApp = styled.main`
  display: flex;
  justify-content: center;
  
`
const FormularioEstilizado = styled.form`
 margin: auto;
 width: 100%;
 max-width: 350px;
`
const InputPokemon = styled.input`
  margin: 10px auto ;
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
    left: 6%;
  }
`
const referenciaFundo = [
  'God',
  'City',
  'Waterfall',
]
const localFundo = localStorage.getItem('fundo')?localStorage.getItem('fundo'):'Waterfall';
const localId = localStorage.getItem('id')?localStorage.getItem('id'):1;

function App() {
  // States Usados
  const [inputValue, setInputlValue] = useState<string>('')
  const [fundo,setfundo] = useState(localFundo)
  const [idPokemon,setIdPokemon] = useState<string|number>(localId??1)
  const [idEvolution,setIdEvolution] = useState('1')
  // 650? ta em chines a descricão ate o 898, // 1025 max 1026==10002 ate o 10279
  const aoMudarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputlValue(e.target.value)
  }

  localStorage.setItem('fundo',fundo??'');
  if(!isNaN(Number(idPokemon))){
    localStorage.setItem('id',idPokemon.toString()); 
  }
   
  return (
    <>
      <EstilosGlobais />
      <ContainerPrincipal>
        <PapelDeParede classEscolhida={fundo} fundos={referenciaFundo} />
        <Cabecalho />

        <FormularioEstilizado
          onSubmit={(e) => {
            e.preventDefault();
            setIdPokemon(()=>(
              inputValue.trim().replace(' ',''))
              
            );
            setInputlValue('')
          }}
        >

          <InputPokemon value={inputValue}
            placeholder='Search'
            type="text"
            onChange={e => aoMudarInput(e)}
          />
        </FormularioEstilizado>
        <MainApp>
          
          <BotaoAvanca setIdPokemon={setIdPokemon} alt='back' imagem={back}/>
          <Card setIdEvolution={setIdEvolution} setIdPokemon={e=>setIdPokemon(e)} idPokemon={idPokemon} />
          {/* Colocar Animações tbm*/}
          {/* Importar as interfaces é mais simples que ficar escrevendo elas*/}
          {/* responsividade == cabecalho,semicicle e input não estão responsivos, pow, se der, colocar uma marginzinha no layout de cel, vlw padrinho*/}
          <BotaoAvanca setIdPokemon={setIdPokemon} alt='next' imagem={next}/>
          
          <CardEvolucao idEvolution={idEvolution} />
        </MainApp>

        <BotaoFundo retornoAoClicar={(e)=>setfundo(e)} botoes={referenciaFundo} />
       
      </ContainerPrincipal>
          
    </>
  )
}


export default App
