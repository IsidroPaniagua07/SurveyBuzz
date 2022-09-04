const Shirt = ({ shirt }) => {
  return (
    <div>
      asd
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/shirts`)
//   const shirts = await res.json()


//   const paths = shirts.map(shirt => {
//     return {
//       params: { id: shirt.id.toString()}
//     }
//   })
//   return {
//     paths, 
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id
//   const res = await fetch(`${server}/api/shirts/${id}`)
//   const shirt = await res.json()

//   return {
//     props: { shirt:shirt}
//   }
// }

export default Shirt