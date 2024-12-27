import { useEffect, useState } from "react"
import styled from "styled-components"

const Evolucao = styled.div`
    background-color: #0000009d;   
    color: white;
    width: 100%;
    max-width: 450px;
    height: 100%;
    border-radius: 10px;
    h2{
        margin: 10px;
    }
    .container{
        display: flex;
        img{
            width: 150px;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 3;
            
        }
    }
`

const CardEvolucao = ({ idEvolution }: { idEvolution: string }) => {
    const [evolutions, setEvolutions] = useState([{
        url: '',
        nome: ''
    },
    ])
    // 67 chain da eevee

    const procurarMaisEvolucoes = (lista: any, sequencia: { nome: string; id: string; }[]) => {
        if (!lista || lista.length === 0) return;

        const nomeDoPokemon = lista[0].species.name
        const idPokemon = lista[0].species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')

        sequencia.push({ nome: nomeDoPokemon, id: idPokemon })
        if (lista[0].evolves_to.length > 0) {
            procurarMaisEvolucoes(lista[0].evolves_to, sequencia)
        }

    }

    const aoMudarEvolucao = () => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${idEvolution}`).then(res => res.json()).then(json => {
            let sequenciaFinal = [];
            // primeiro
            const primeiroPoke = json.chain.species.name
            const idPokemon = json.chain.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')
            sequenciaFinal.push({ nome: primeiroPoke, id: idPokemon })



            //fetch outros pokemons
            const listaEvolucoes = json.chain.evolves_to
            procurarMaisEvolucoes(listaEvolucoes, sequenciaFinal)
            console.log(sequenciaFinal)


            setEvolutions(sequenciaFinal.map(pokemon => ({ url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`, nome: pokemon.nome })))


        })
    }

    useEffect(() => { aoMudarEvolucao() }, [idEvolution])
    return (
        <Evolucao>
            <h2>Evolution Chain</h2>
            <div className="container">

                {evolutions.map((pokemon, index) => (
                    <div key={index}>
                        <img  src={pokemon.url} alt={pokemon.nome} />
                        <span>{pokemon.nome}</span>
                    </div>
                ))}



            </div>
        </Evolucao>
    )
}
export default CardEvolucao