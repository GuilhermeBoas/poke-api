import styled from 'styled-components'
import Cabecalho from './componentes/Cabecalho'
import EstilosGlobais from './componentes/EstilosGlobais'
import PapelDeParede from './componentes/PapelDeParede'
import Card from './componentes/Card'
import BotaoFundo from './componentes/BotaoFundo'

const ContainerPrincipal = styled.div`
  position: relative;
`
const MainApp = styled.main`
  display: flex;
  flex-direction: column;
`
function App() {


  return (
    <>
      <EstilosGlobais />
      <ContainerPrincipal>
        <PapelDeParede/>
        <Cabecalho />
        
        <MainApp>
          <input style={{margin:'0 auto'}} type="text"/>
          
          <Card/>
        </MainApp>
        
        <BotaoFundo/>
        {/* <BotaoFundo/> */}
      </ContainerPrincipal>
    </>
  )
}
// erro no @import da font  popiins no global, ver depois
// falta implementar funções que mudam o fundo, BotãoFundo estilizado
export default App
