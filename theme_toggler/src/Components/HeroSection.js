import React, { useContext } from 'react'
import AppTheme from '../Colors'
import ThemeContext from '../Context/ThemeContext'
function HeroSection() {
    const [theme, setTheme] = useContext(ThemeContext);

    /* light or dark */
    // const currentTheme = theme === 'light' ? AppTheme['light'] : AppTheme['dark'];
    const currentTheme = AppTheme[theme];
    const {backgroundColor1, color1,  border1} = currentTheme
    // AppTheme.theme

    /* dynamic object -> JS */
  return (
    <div
        style={{
            backgroundColor: backgroundColor1,
            color:color1 ,
            border: border1,
        }}
        /* Es6 ->  */
    >
        <h1>Hero Section of Theme Toggler</h1>
        <p>This is our first Theme toggler</p>
        <button
            onClick={()=> {
                setTheme(theme === "light" ? "dark" : "light")
            }}
        >Click Me</button>
    </div>
  )
}

export default HeroSection