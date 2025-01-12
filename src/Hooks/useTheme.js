import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

export default function useTheme() {

     
  return (
    useContext(ThemeContext)
  )
}
