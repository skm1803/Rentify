import { useState } from 'react'
// import Example from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PropertyForm from './components/PropertyForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Example/> */}
      {/* <SignIn/> */}
      <SignUp/>
      {/* <PropertyForm/> */}

    </>
  )
}

export default App
