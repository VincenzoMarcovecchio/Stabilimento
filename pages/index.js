import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.text())
 // const { data, error } = useSWR('/api/cookies', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>




export default function Index() {
 
  return (
  <h2>ciao</h2>
)
}
