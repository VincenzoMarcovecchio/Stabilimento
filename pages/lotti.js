

export default function Lotti({ users }) {
  return (
    <>
      <h2>Lotti SERVER SIDE</h2>

      {users[0].name}
      {users[1].name}
      {users[2].name}
      {users[3].name}
      {users[4].name}

    </>

  )
}


export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {

  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();
  if (!data) {
  return {notFound: true,}
  }  
  return { props: { users } }
}
