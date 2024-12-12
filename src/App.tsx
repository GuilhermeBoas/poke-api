import styled from 'styled-components'
import Cabecalho from './componentes/Cabecalho'
import EstilosGlobais from './componentes/EstilosGlobais'
import Main from './componentes/Main'
import PapelDeParede from './componentes/PapelDeParede'
import Pokemon from './componentes/Pokemon'

const ContainerPrincipal = styled.div`
  position: relative;
`

function App() {


  return (
    <>
      <EstilosGlobais />
      <ContainerPrincipal>
        <PapelDeParede/>
        
        <Cabecalho />
        <Pokemon/>
        <Main/>
        
      </ContainerPrincipal>
    </>
  )
}

export default App
