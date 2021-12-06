import React from 'react'
import Amplify from 'aws-amplify'

import config from './aws-exports'
import './App.css'

import Header from './layouts/Header'
import { Plant } from './plants/Plant'
import { Plants } from './plants/Plants'

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Plant></Plant>
      </section>
      <Plants />
    </div>
  )
}

export default App
