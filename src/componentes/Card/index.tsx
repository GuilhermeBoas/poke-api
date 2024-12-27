import { useEffect, useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import tipagemTipo from '../../interfaces-tipes';
import tipagemAbilitis from '../../interfaces-tipes';


//interfaces
interface tipagemDadosPokemon {
    nome: string,
    imagem: string,
    tipo: tipagemTipo[],
    abilities: tipagemAbilitis[],
    peso: number,
    altura: number,
    descricao: string
}
interface Cor {
    $cor: string
}
// Styled Components
const PokemonContainer = styled.figure`
    background-color: #0000009d;    
    height: 200px;
    color: white;
    width: 360px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 0;
    padding: 0.8em ;
    border-radius: 10px;
`
const ImgPoke = styled.img`
    width: 100%;
    max-width: 200px;
    height: 200px;
`
const SemiCircle = styled.div<Cor>`
    max-width: 360px;
    width: 100%;
    height: 200px;

    z-index: -1;
    position: absolute;
   
    background-image: url('../../../Info/Pokeball.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px  100% 100%;
    /* tentar ajeitar depois com mais pesquisa mas por enquato o resultado esta satisfatório */
    
    background-color: ${({$cor})=>`var(--${$cor}-color);`};
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


const Card = ({ idPokemon, setIdPokemon }: { idPokemon: number | string, setIdPokemon: (value: React.SetStateAction<string | number>) => void }) => {

    const [pokemon, setPokemon] = useState<tipagemDadosPokemon>({
        nome: '',
        imagem: '',
        tipo: [],
        abilities: [],
        peso: 0,
        altura: 0,
        descricao: ''


    })
    
    const aoMudarPokemon = (idDoPokemon: number | string) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`).then(res => res.json()).then((json) => {

            fetch(json.species.url).then(res => res.json()).then(speciesJson => setPokemon({
                ...pokemon,
                nome: json.name,
                imagem: json.sprites.other['official-artwork'].front_default,
                tipo: json.types,
                abilities: json.abilities,
                peso: json.weight,
                altura: json.height,
                descricao: speciesJson.flavor_text_entries[0].flavor_text

            }))
        }).catch((error)=>alert(`Something went wrong:   ${error}`));
    }
    // Solução: após fazer o .json() na response da api usar o json como o parametro e abrir uma arrow function com {} para usa-lo para fazer um novo fetch

    useEffect(() => { aoMudarPokemon(idPokemon); }, [idPokemon])

    //pesquisar como funcionar 
    //1 - Criar um jeito de encaixar os dados em uma interface
    //2- setar o idpokemon para a 'contagem' quando tiver a seta do pokemon para o lado

    return (

        <PokemonContainer>
            <SemiCircle $cor={pokemon.tipo[0] ? pokemon.tipo[0].type.name : ''}/>

            <h1>{pokemon.nome}</h1>
            <ImgPoke src={pokemon.imagem} />
            <Tags>
                {pokemon.tipo.map((tipo) => <Tag $cor={tipo.type.name} key={tipo.slot}>{tipo.type.name}</Tag>)}
            </Tags>

            <Info
                cor = {pokemon.tipo[0] ? pokemon.tipo[0].type.name : 'grass'}
                altura={pokemon.altura}
                peso={pokemon.peso}
                abilities={pokemon.abilities}
                descricao={pokemon.descricao}
            />
        </PokemonContainer>
    )

}

export default Card