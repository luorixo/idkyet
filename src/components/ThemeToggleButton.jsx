import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useContext } from 'react';
import CursorContext from '../utils/CursorContext';

const ToggleButton = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;
`;

const ButtonImage = styled.img`
	content:url(${({ theme }) => theme.toggleButton});
	width: 3.5vmax;
	height: 3.5vmax;
`

const ThemeToggleButton = ({ className, toggleCurrentTheme }) => {

	const toggleCursorMode = useContext(CursorContext)

    return <ToggleButton className={className}>
		<ButtonImage onClick={toggleCurrentTheme} onMouseOver={toggleCursorMode} onMouseLeave={toggleCursorMode}></ButtonImage>
	</ToggleButton>
}

ThemeToggleButton.propTypes = {
    className: PropTypes.any,
	toggleCurrentTheme: PropTypes.func,
}

export default ThemeToggleButton