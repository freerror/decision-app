import React from 'react'
import ReactDOM from 'react-dom/client'
import IndecisionApp from './components/IndecisionApp.jsx'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<IndecisionApp />)