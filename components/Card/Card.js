import Link from "next/dist/client/link";
import Image from "next/image";

const Card = ({data}) => {
  return (
    <div>
        {data.name}
    </div>
  )
}

export default Card