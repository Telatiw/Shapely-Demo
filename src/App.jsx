import React from 'react'
import Routes from './Router/Router'
import { useRoutes } from 'react-router'
function App() {
  let router = useRoutes(Routes)
  return (
    <>
      {router}
    </>
  )
}

export default App