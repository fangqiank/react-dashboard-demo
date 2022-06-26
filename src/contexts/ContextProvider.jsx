import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const initState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initState)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('ThemeMode', e.target.value)
  }

  const setColor = (e) => {
    setCurrentColor(e.target.value)
    localStorage.setItem('ColorMode', e.target.value)
  }

  const handleClick = (clicked) => {
    setIsClicked({
      ...initState,
      [clicked]: true,
    })
  }

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
