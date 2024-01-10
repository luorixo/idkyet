import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import CursorContext from '../utils/CursorContext'
import styled from 'styled-components';
import RandomPokemon from './RandomPokemon';

const ThemeToggleButton = styled.button`
    position: absolute;
    right: 0;
`

const Navigation = React.memo(({toggleCurrentTheme}) => {
    
    const toggleCursorMode = useContext(CursorContext)

    return <>
        <ThemeToggleButton onClick={toggleCurrentTheme} onMouseOver={toggleCursorMode} onMouseLeave={toggleCursorMode}>Theme Toggle</ThemeToggleButton>
        <RandomPokemon />
    </>
})

Navigation.propTypes = {
    toggleCurrentTheme: PropTypes.func.isRequired,
}

Navigation.displayName = 'Navigation'

export default Navigation