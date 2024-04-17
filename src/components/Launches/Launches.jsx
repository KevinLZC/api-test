import { useEffect, useState } from 'react'
import { LaunchCard } from '../LaunchCard/LaunchCard';
import './Launches.css'

export function Launches() {
  const [launches, setLaunches] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v5/launches")
        if (!res.ok) throw new Error(`Error HTTP: status ${res.status}`)
        const data = await res.json()
        setLaunches(data)
      } catch (err) {
        console.error('Error al cargar datos:', err)
        setError(err)
      }
    }
    handleFetch()
  }, []);

  if (error) {
    return <div>Error: {error}</div>
  } else if (!launches.length) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1>SpaceX Launches 🚀</h1>
      <div id='grid-launches'>
        {
          launches.map(launch => (
            <LaunchCard key={launch.id} launch={launch} />
          ))
        }
      </div>
    </>
  )
}
