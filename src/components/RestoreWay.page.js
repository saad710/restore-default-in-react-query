import { useQuery } from 'react-query'
import axios from 'axios'

const fetchFoods = () => {
  return axios.get('http://localhost:4000/foods')
}

export const RestoreWay = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'foods',
    fetchFoods
  )

  console.log({ isLoading, isFetching })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>Restore Foods Item Page</h2>
      <button onClick={refetch}>Fetch Foods</button>
      {data?.data.map(item => {
        return <div key={item.name}>{item.name}</div>
      })}
    </>
  )
}
