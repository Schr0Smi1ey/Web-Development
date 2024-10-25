
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch';
function App() {
  const [watches, setwatches] = useState([]);

  useEffect(() => {
    fetch('Watches.json')
    .then(res => res.json())
    .then(data => setwatches(data))
  },[])
  return (
    <>
      <h1>Explore Modules & Data Integration</h1>
      <div>
        {
          watches.map((watch) => <Watch watch={watch} key = {watch.id}></Watch>)
        }
      </div>
    </>
  )
}

export default App
