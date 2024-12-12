import { useEffect, useState } from "react"
import styled from "styled-components"


const PokemonContainer = styled.figure`
    background-color: #0000009d;
    width: 1000px;
    max-width: 100%;
    height: 200px;
    img{
        width: 100%;
        max-width: 100px;
    }
`
interface tipagemDadosPokemon {
    nome: string,
    imagem: string,
    tipo: string,


}


const Pokemon = () => {
    const [pokemon, setPokemon] = useState<tipagemDadosPokemon>({
        nome: '',
        imagem: '',
        tipo: '',

    })

    const aoMudarPokemon = (idDoPokemon:number|string)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`).then(res => res.json()).then(json => setPokemon({
            ...pokemon,
            nome: json.name,
            imagem: json.sprites.other.home.front_default,
            tipo: json.types[0].type.name

        }))
    }

    useEffect(()=>aoMudarPokemon(1), [])
    
    console.log(pokemon)


    //1 - Criar um jeito de encaixar os dados em uma interface
    //2 - criar um const dentro do UseEfecct para armazenar os dados separados da feth API
    //3 - mudar a tipagem dos dados  dentro do useState <tipagem>()

    return (
        <PokemonContainer>
            <img src={pokemon.imagem} />
            <figcaption>
                <p style={{ color: 'white' }}>{pokemon.nome}</p>
                <p style={{ color: 'white' }}>{pokemon.tipo}</p>
                <p style={{ color: 'white' }}>ola mundo de novo</p>
            </figcaption>
        </PokemonContainer>

    )

}

export default Pokemon