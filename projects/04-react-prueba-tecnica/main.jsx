import React from "react"
import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

// const element = React.createElement('p', {}, 'Hola')

const root = createRoot(document.getElementById('app'))


root.render(<App />)