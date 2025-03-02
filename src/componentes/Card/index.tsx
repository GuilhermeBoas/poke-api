import { useEffect, useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import tipagemTipo from '../../interfaces-tipes';
import tipagemAbilitis from '../../interfaces-tipes';
import PokemonHeader from "./PokemonHeader";

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
//interfaces
interface CardProps{
    idPokemon: number | string,
    setIdPokemon: (value: React.SetStateAction<string | number>) => void,
    setIdEvolution: React.Dispatch<React.SetStateAction<string>>
}
interface tipagemDadosPokemon {
    nome: string,
    imagem: string,
    tipo: tipagemTipo[],
    abilities: tipagemAbilitis[],
    peso: number,
    altura: number,
    descricao: string,
}

const Card = ({ setIdEvolution, idPokemon, setIdPokemon }: CardProps) => {

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
        fetch(`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`).then(res => res.json()).then( (json) => {
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
    } // após fazer o .json() no primeiro response da api usar o json como o parametro e abrir uma arrow function com {} para usa-lo para fazer um novo fetch
    useEffect(() => { aoMudarPokemon(idPokemon); }, [idPokemon])
    
    return (

        <PokemonContainer>

            <PokemonHeader 
                tipo={pokemon.tipo}
                nome={pokemon.nome}
                imagem={pokemon.imagem}
            />


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