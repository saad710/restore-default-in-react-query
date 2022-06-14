import { useState, useEffect } from 'react'
import axios from 'axios'

export const NormalWay = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4000/foods')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Foods Item Page</h2>
      {data.map(item => {
        return <div key={item.name}>{item.name}</div>
      })}
    </>
  )
}
