import styled from "styled-components"
import tipagemTipo from "../../../interfaces-tipes"

interface PokemonHeaderProps {
    nome: string,
    imagem: string,
    tipo: tipagemTipo[],
}
interface Cor {
    $cor: string
}


const ImgPoke = styled.img`
    width: 100%;
    max-width: 200px;
    height: 200px;
`
const SemiCircle = styled.div<Cor>`
    width: 100%;
    max-width: 600px;
    height: 200px;

    z-index: -1;
    position: absolute;
    
    background-image: url('../../../Info/Pokeball.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px  100% 100%;
    background-color: ${({ $cor }) => `var(--${$cor}-color);`};
`
const Tags = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;    
`
const Tag = styled.p<Cor>`
    background-color: ${({ $cor }) => `var(--${$cor}-color)`};;
    padding: 2px 8px;
    border-radius: 10px;
`

const PokemonHeader = ({tipo,nome,imagem}: PokemonHeaderProps)=>{
    return (
        <>
            <SemiCircle $cor={tipo[0] ? tipo[0].type.name : ''} />

            <h1>{nome}</h1>

            <ImgPoke src={imagem} />

            <Tags>
                {tipo.map((tipo: tipagemTipo) => <Tag $cor={tipo.type.name} key={tipo.slot}>{tipo.type.name}</Tag>)}
            </Tags>
        </>
    )
}
export default PokemonHeader