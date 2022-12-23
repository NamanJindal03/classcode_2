import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'

function ThemeToggler() {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
  return (
    <div
        onClick={()=> {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}
    >
        <span>{themeMode}</span>
    </div>
  )
}

export default ThemeToggler