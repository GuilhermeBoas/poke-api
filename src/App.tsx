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
import Formulario from './componentes/Formulario'

// Styled Components
const ContainerPrincipal = styled.div`
  position: relative;
`
const MainApp = styled.main`
  display: flex;
  justify-content: center;
`
const referenciaFundo = [
  'God',
  'City',
  'Waterfall',
]
//Salvamento em localStorage do Id do pokemon e do Papel de parede
const localFundo = localStorage.getItem('fundo') ? localStorage.getItem('fundo') : 'Waterfall';
const localId = localStorage.getItem('id') ? localStorage.getItem('id') : 1;

function App() {
  // States Usados
  
  const [fundo, setfundo] = useState<string>(localFundo===typeof "string"?localFundo:'Waterfall')
  const [idPokemon, setIdPokemon] = useState<string | number>(localId ?? 1)
  const [idEvolution, setIdEvolution] = useState('1')
  localStorage.setItem('fundo', fundo ?? '');
  
  if (!isNaN(Number(idPokemon))) {
    localStorage.setItem('id', idPokemon.toString());
  }

  return (
    <>
      <EstilosGlobais />
      <ContainerPrincipal>
        <PapelDeParede classEscolhida={fundo} fundos={referenciaFundo} />
        <Cabecalho />
        <Formulario setIdPokemon={setIdPokemon}/>
        
        <MainApp>
          <BotaoAvanca setIdPokemon={setIdPokemon} alt='back' imagem={back} />
          <Card setIdEvolution={setIdEvolution} setIdPokemon={e => setIdPokemon(e)} idPokemon={idPokemon} />

          <BotaoAvanca setIdPokemon={setIdPokemon} alt='next' imagem={next} />

          <CardEvolucao idEvolution={idEvolution} />
        </MainApp>

        <BotaoFundo retornoAoClicar={(e) => setfundo(e)} botoes={referenciaFundo} />
      </ContainerPrincipal>

    </>
  )
}


export default App
{/* responsividade == cabecalho,semicicle e input não estão responsivos, pow, se der, colocar uma marginzinha no layout de cel, vlw padrinho*/ }
{/* 650 ta em chines a descricão vai até o 898 */ }
