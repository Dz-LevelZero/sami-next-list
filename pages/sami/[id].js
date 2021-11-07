export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  const paths = data.map(sami => {
    return {
      params: { id: sami.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const data = await res.json()
  return {
    props: {sami: data}
  }
}

const Details = ({ sami }) => {
  return ( 
    <div>
      <h1> { sami.name } </h1>
      <p> { sami.email }</p>
      <p> { sami.website } </p>
      <p> { sami.address.city } </p>
    </div>
   );
}
 
export default Details;