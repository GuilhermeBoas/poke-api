import { useEffect, useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import tipagemTipo from '../../interfaces-tipes';
import tipagemAbilitis from '../../interfaces-tipes';

// Styled Components
const PokemonContainer = styled.figure`
        background-color: #0000009d;    
        color: white;
        width: 100%;
        max-width: 600px;
        height: 100%;  
        position: relative;
        text-align: center;
        z-index: 0;
        padding: 10px ;
        border-radius: 10px;
        margin: 0;
    `
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
//interfaces
interface tipagemDadosPokemon {
    nome: string,
    imagem: string,
    tipo: tipagemTipo[],
    abilities: tipagemAbilitis[],
    peso: number,
    altura: number,
    descricao: string,

}
interface Cor {
    $cor: string
}


const Card = ({ setIdEvolution, idPokemon, setIdPokemon }: { idPokemon: number | string, setIdPokemon: (value: React.SetStateAction<string | number>) => void, setIdEvolution: React.Dispatch<React.SetStateAction<string>> }) => {

    const [pokemon, setPokemon] = useState<tipagemDadosPokemon>({
        nome: '',
        imagem: '',
        tipo: [],
        abilities: [],
        peso: 0,
        altura: 0,
        descricao: '',
        
    })

    const aoMudarPokemon = (idDoPokemon: number | string) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`).then(res => res.json()).then((json) => {
            setIdPokemon(json.id);

            fetch(json.species.url).then(res => res.json()).then(speciesJson => {
                fetch(speciesJson.evolution_chain.url).then(res => res.json()).then(evolutionJson => {
                    setIdEvolution(evolutionJson.id)
                    setPokemon({
                        ...pokemon,
                        nome: json.name,
                        imagem: json.sprites.other['official-artwork'].front_default,
                        tipo: json.types,
                        abilities: json.abilities,
                        peso: json.weight,
                        altura: json.height,
                        descricao: speciesJson.flavor_text_entries[0].flavor_text
                    })
                })
            })
        }).catch((error) => alert(`Something went wrong:   ${error}`));
    } // Solução: após fazer o .json() na response da api usar o json como o parametro e abrir uma arrow function com {} para usa-lo para fazer um novo fetch
    useEffect(() => { aoMudarPokemon(idPokemon); }, [idPokemon])
    //1 - Criar um jeito de encaixar os dados em uma interface
    return (

        <PokemonContainer>
            <SemiCircle $cor={pokemon.tipo[0] ? pokemon.tipo[0].type.name : ''} />

            <h1>{pokemon.nome}</h1>
            <ImgPoke src={pokemon.imagem} />
            <Tags>
                {pokemon.tipo.map((tipo) => <Tag $cor={tipo.type.name} key={tipo.slot}>{tipo.type.name}</Tag>)}
            </Tags>

            <Info
                cor={pokemon.tipo[0] ? pokemon.tipo[0].type.name : 'grass'}
                altura={pokemon.altura}
                peso={pokemon.peso}
                abilities={pokemon.abilities}
                descricao={pokemon.descricao}
            />
        </PokemonContainer>
    )

}

export default Card