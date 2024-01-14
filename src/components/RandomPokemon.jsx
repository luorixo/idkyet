import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import CursorContext from '../utils/CursorContext'
import styled from 'styled-components';

const pokemonIdRange = 1010

const CurrentPokemon = styled.img`
    min-height: 3%.5;
    max-height: 4vmax;
    max-width: 4vmax;
    opacity: 0.75;
    cursor: pointer;
    filter: contrast(140%) brightness(110%) drop-shadow(0 0.05vmax 0.6vmax #fff);
`

const RandomPokemon = ({ className }) => {

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

    return <span className={className}>
        <CurrentPokemon onMouseOver={toggleCursorMode} onMouseLeave={toggleCursorMode} src={frontSprite}/>
    </span>
}

RandomPokemon.propTypes = {
    className: PropTypes.any
}

export default RandomPokemon