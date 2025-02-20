import styled from "styled-components"

const PosiçãoDoPapelDePareda = styled.video`
    position: fixed;
    z-index: -5;
    bottom: 0;
    max-width: 100%;
    
    min-height: 100%;
    @media (max-aspect-ratio: 16/9) {
        max-width: none;
        width: auto;
        height: 100%;
        text-align: center;
    }
`
const ContainerWallpaper = styled.div`
    .hidden{
        display: none;
    }
`
//video ja ficar estatico alinhado com o vh, falta fazer reposividade do video e escolha

const PapelDeParede = ({ fundos,classEscolhida }: { fundos: string[],classEscolhida:string|null}) => {
    return (
        <ContainerWallpaper>

            {fundos.map((titulo,index) => (
                
                <PosiçãoDoPapelDePareda key={index} id={titulo} className={classEscolhida==titulo? '': 'hidden'} autoPlay muted loop>
                    <source src={`/gif/${titulo}.mp4`} type="video/mp4" />
                </PosiçãoDoPapelDePareda>
                
            ))}



        </ContainerWallpaper>)
}

export default PapelDeParede