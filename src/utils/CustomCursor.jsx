import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorDiv = styled(motion.div)`
    opacity: 1;
    border-radius: 100px;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 30px;
    height: 30px;
    box-shadow: 
      0 0 40px 20px ${({ theme: {cursor} }) => cursor.primary},
      0 0 80px 30px ${({ theme: {cursor} }) => cursor.secondary},
      0 0 140px 40px ${({ theme: {cursor} }) => cursor.tertiary};
    background-color: ${({ theme }) => theme.cursorColor };
    transition: background-color 1s, box-shadow 1s;
`

const CustomCursor = ({cursorMode}) => {
    // ** custom cursor **
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const onMouseMove = ({clientX, clientY}) => {
      setMousePosition({
        x: clientX,
        y: clientY
      })
    }
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  const cursorVariants = {
    default: {
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
    },
    hover: {
        scale: 0.5,
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        // boxShadow: '0 0 40px 20px #fff, 0 0 80px 30px #ffffff, 0 0 140px 40px #0ff',
        // boxShadow: '0 0 40px 20px #fff, 0 0 80px 30px #47ffcb, 0 0 140px 40px #ff00f7',
        // mixBlendMode: "difference",
    }
  }

  const transitions = {
    x: { duration: 0.1 },
    y: { duration: 0.1 },
    boxShadow: { duration: 0.4 },
    opacity: { duration: 0.4 },
    scale: { duration: 0.2 }
  }

  return (
  <CursorDiv 
    variants={cursorVariants}
    animate={cursorMode}
    transition={transitions}
  />
  )
}

CustomCursor.propTypes = {
  cursorMode: PropTypes.string
}

export default CustomCursor