import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

useEffect(() => {
  fetch(url)
  .then((response) => response.json())
  .then((tours) => {
    // const { id, name, info, image, price } = tours
    setTours(tours)
    setLoading(false)
  })
  .catch((error) => console.log(error))
}, [])

  if(loading) {
      return(
        <main>
          <Loading />
        </main>
    )
  }
  return(
    <main>
      <Tours 
        tours={tours}
      />
    </main>
  )
}

export default App
