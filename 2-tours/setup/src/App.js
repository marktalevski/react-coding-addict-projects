import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

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
if(tours.length === 0) {
  return(
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        {/* <button onClick={() => setTours(tours)}>
          Refresh 
        </button> */}
      </div>
    </main>
  )
}

  return(
    <main>
      <Tours 
        tours={tours}
        removeTour={removeTour}
      />
    </main>
  )
}

export default App
