import styled from "styled-components"
import tipagemAbilitis from '../../../interfaces-tipes';
import Chart from "./Charts";

const InfoEstilizada = styled.figcaption`
    background-color: white;
    color: #1D1D1D;
    border-radius: 10px;
    box-shadow: inset  0 0 5px #000;
    padding: 10px 7px;
    
`
const TituloEstilizado = styled.h2<Cor>`
    margin: 0 0 10px 0 ;
    color: ${({$cor})=> `var(--${$cor}-color)`} ;
    font-family: PoppinsBold;
    font-size: 20px;
`
const StatusFisicos = styled.div`
    display: flex;
    justify-content: center;
    
    .div_meio{
        border-left: 2px solid #E0E0E0;
        border-right: 2px solid #E0E0E0;
    }
`
const Status = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const DivisãoStatus = styled.div`
    padding: 8px 10px 0 10px; 
    display:flex ;
    flex-direction: column;
    justify-content: space-evenly;
    
    gap: 10px;
    width: 100%;
    p{
        margin: 0;
        font-size: 16px;
    }

    .legenda_Cinza{
        color:#666666;
        
        
    }

    .moves{
        display: flex;
        flex-direction: column;
    }
`
const ContainerGraficos= styled.div`
    width: 100%;
    height: 200px;
   
`

interface tipagemCard {
    altura:number,
    peso:number,
    abilities:tipagemAbilitis[]
    descricao:string,
    cor:string
}
interface Cor{
    $cor:string
}

const Info = ({altura,peso,abilities,descricao,cor}:tipagemCard) => {
    return (
        <InfoEstilizada>
            <TituloEstilizado $cor={cor} >About</TituloEstilizado>
            <StatusFisicos>

                <DivisãoStatus>
                    <Status>
                        <img src="/Info/weight.png" alt="" />
                        <p>{peso/10} kg</p>
                    </Status>
                    
                    <p className="legenda_Cinza">Weight</p>
                </DivisãoStatus>


                <DivisãoStatus className="div_meio">
                    <Status>
                        <img src="/Info/straighten.png" alt="" />
                        <p>{altura/10} m</p>
                    </Status>
                    
                    <p className="legenda_Cinza">height</p>
                </DivisãoStatus>


                <DivisãoStatus>
                    <Status className="moves">
                        {abilities.map(item => <p key={item.slot}>{item.ability.name}</p>)}
                    </Status>
                    
                    <p className="legenda_Cinza">Move</p>
                </DivisãoStatus>
            </StatusFisicos>

            {/* fazer usehook para descrição */}

            <p>{descricao}</p>


            {/* Criar componente separado para implementar os graficos 
            consulta os sites salvos de charts*/}

            <ContainerGraficos>
                <TituloEstilizado $cor={cor}>Base Stats</TituloEstilizado>
                <Chart cor={cor}/>
            </ContainerGraficos>
        </InfoEstilizada>
    )
}

export default Info