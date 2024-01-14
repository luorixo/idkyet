import gradient from "../assets/gradient.png"
import lightModeButton from '../assets/lightmode-button.svg'
import darkModeButton from '../assets/darkmode-button.svg'

// light theme
export const lightTheme = {
    textColor: '#DE3C76',
    background: '#DAE4D7',
    backgroundImage: gradient,
    filter: 'saturate(140%) hue-rotate(0deg) blur(0px) brightness(100%) invert(0%) contrast(95%)',

    toggleButton: lightModeButton,

    cursorColor: '#ff3e6891',
    cursor: {
        primary: '#ffffff00',
        secondary: '#FFC70000',
        tertiary: '##ff5e0000'
    }   
}

// dark theme
export const darkTheme = {
    textColor: '#fff',
    background: '#5B6259',
    backgroundImage: gradient,
    filter: 'saturate(800%) hue-rotate(290deg) blur(1000px) brightness(80%) invert(100%) contrast(90%)',

    toggleButton: darkModeButton,

    cursorColor: '#ffffff55',
    cursor: {
        primary: '#ffffff',
        secondary: '#ffb247',
        tertiary: '#0ff'
    }
}