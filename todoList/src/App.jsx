import { useState } from 'react'
import AppLayout from './applayout/AppLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppLayout />
    </>
  )
}

export default App;
