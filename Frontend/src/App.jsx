import React from 'react'
import Card from './components/card'
import NewCard from './components/NewCard'

function App() {
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        {/* <Card /> */}
        <NewCard />
      </div>
    </>
  )
}

export default App