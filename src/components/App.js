/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import React from 'react'
import DatapackCreator from './DatapackCreator'

export default function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
          }
          #app {
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
          }
        `}
      />
      <h1>Datapack Creator</h1>
      <main>
        <DatapackCreator />
      </main>
      <footer>
        <span>&copy;{new Date().getFullYear()} Ethan Stewart</span>
      </footer>
    </React.Fragment>
  )
}
