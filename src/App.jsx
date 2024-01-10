import { useCallback, useState } from "react"
import Home from "./pages/Home"
import CustomCursor from "./utils/CustomCursor"
import CursorContext from "./utils/CursorContext"
import Navigation from "./components/Navigation"
import { darkTheme, lightTheme } from "./styles/themes"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  // state for current cursor mode
  const [cursorMode, setCursorMode] = useState("default")

  // state for current theme (light/dark mode)
  const [currentTheme, setCurrentTheme] = useState("light")

  const toggleCursorMode = useCallback(() => {
    setCursorMode((prevCursorMode) => (prevCursorMode === "default" ? "hover" : "default"))
  }, [])

  const toggleCurrentTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  console.log("app rerendered")

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
    <CursorContext.Provider value={toggleCursorMode}>
      <GlobalStyle />
      <CustomCursor cursorMode={cursorMode}/>

      <Navigation toggleCurrentTheme={toggleCurrentTheme}/>
      <Home />
    </CursorContext.Provider>
    </ThemeProvider>
  )
}

export default App
