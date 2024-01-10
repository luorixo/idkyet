import { useContext, useEffect, useState } from 'react'
import CursorContext from '../utils/CursorContext'
import styled from 'styled-components';

const pokemonIdRange = 898

const CurrentPokemon = styled.img`
    height: 3vw;
    opacity: 0.9;
    cursor: pointer;
`

const RandomPokemon = () => {

    const [frontSprite, setFrontSprite] = useState(null)

    const fetchRandomPokemon = async () => {
        try {
            for (let i=0; i<10; i++) {
                const randomPokemonId = Math.floor(Math.random() * pokemonIdRange) + 1

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
                const data = await response.json()

                const frontSprite = data.sprites.other.showdown.front_default
                const backSprite = data.sprites.other.showdown.back_default

                console.log(frontSprite)
                console.log(backSprite)

                if (frontSprite && backSprite) {
                    setFrontSprite(frontSprite)

                    return
                }
            }
        } catch(error) {
            console.log(`Error fetching pokemon: ${error} :(`)
        }
    }

    const toggleCursorMode = useContext(CursorContext)

    useEffect(() => {
        fetchRandomPokemon()
    }, [])

    return <>
        <div>hello</div>
        <CurrentPokemon onMouseOver={toggleCursorMode} onMouseLeave={toggleCursorMode} src={frontSprite}/>
    </>
}

export default RandomPokemon