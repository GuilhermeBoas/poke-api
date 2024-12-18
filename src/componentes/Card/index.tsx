import { useEffect, useState } from "react"
import styled from "styled-components"
import Info from "./Info"

interface tipagemTipo {
    slot: number,
    type: {
        name: string
    }

}
interface tipagemAbilitis {
    slot: number,
    ability: {
        name: string
    }
}

interface tipagemDadosPokemon {
    nome: string,
    imagem: string,
    tipo: tipagemTipo[],
    abilities: tipagemAbilitis[],
    peso: number,
    altura: number,
    descricao: string

}

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

const SemiCircle = styled.div`
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
    
    background-color: #74CB48;
`
const Tags = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
`
const Card = ({idPokemon,setIdPokemon}:{idPokemon:number|string,setIdPokemon:(value: React.SetStateAction<string | number>) => void}) => {
    const [pokemon, setPokemon] = useState<tipagemDadosPokemon>({
        nome: '',
        imagem: '',
        tipo: [],
        abilities: [],
        peso: 0,
        altura: 0,
        descricao: ''


    })
// setar o idpokemon para a 'contagem' quando tiver a seta do pokemon para o lado

    const aoMudarPokemon = (idDoPokemon: number | string) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`).then(res => res.json()).then((json) => {
            
            fetch(json.species.url).then(res => res.json()).then(speciesJson => setPokemon({
                ...pokemon,
                nome: json.name,
                imagem: json.sprites.other.dream_world.front_default,
                tipo: json.types,
                abilities: json.abilities,
                peso: json.weight,
                altura: json.height,
                descricao:  speciesJson.flavor_text_entries[0].flavor_text

            }))
        });
    }
    // Solução: após fazer o .json() na response da api usar o json como o parametro e abrir uma arrow function com {} para usa-lo para fazer um novo fetch
    
    useEffect(() => { aoMudarPokemon(idPokemon); }, [idPokemon])

    //pesquisar como funcionar 
    //1 - Criar um jeito de encaixar os dados em uma interface
    //2 - mudar a tipagem dos dados  dentro do useState <tipagem>()

    return (

        <PokemonContainer>
            <SemiCircle />
            
            <h1>{pokemon.nome}</h1>
            <ImgPoke src={pokemon.imagem} />
            <Tags>
                {pokemon.tipo.map((tipo) => <p key={tipo.slot}>{tipo.type.name}</p>)}
            </Tags>

            <Info
                altura={pokemon.altura}
                peso={pokemon.peso}
                abilities={pokemon.abilities}
                descricao={pokemon.descricao}
            /> 
        </PokemonContainer>
    )

}

export default Card