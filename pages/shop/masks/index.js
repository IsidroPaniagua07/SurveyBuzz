import { server } from "../../../config"

const index = ({ masks }) => {
  console.log(masks)
  return (
    <div>
      {masks.map(mask => {
        return (
          <div key={mask.name}>
            {mask.name}
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/masks`)
  const masks = await res.json()

  return {
    props: {
      masks
    }
  }
}

export default index