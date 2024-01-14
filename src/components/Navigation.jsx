import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import CursorContext from '../utils/CursorContext'
import styled from 'styled-components';
import RandomPokemon from './RandomPokemon';
import ThemeToggleButton from './ThemeToggleButton';

const StyledThemeToggleButton = styled(ThemeToggleButton)`
    position: fixed;
    right: 3vmax;
    top: 2vmax;
`

const StyledRandomPokemon = styled(RandomPokemon)`
    position: fixed;
    bottom: 3vmax;
    left: 3.3vmax;
`

const Navigation = React.memo(({toggleCurrentTheme}) => {
    
    const toggleCursorMode = useContext(CursorContext)

    return <>
        <StyledThemeToggleButton toggleCurrentTheme={toggleCurrentTheme}/>
        <StyledRandomPokemon />
    </>
})

Navigation.propTypes = {
    toggleCurrentTheme: PropTypes.func.isRequired,
}

Navigation.displayName = 'Navigation'

export default Navigation