import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import RouterElement from 'src/routes'
// import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export default function App() {
  return (
    <>
      {/* <ToastContainer
        hideProgressBar
        position='bottom-right'
        limit={3}
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
      /> */}
      <MemoryRouter>
        <main>
          <RouterElement />
        </main>
      </MemoryRouter>
    </>
  )
}
