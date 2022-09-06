import Link from "next/link";
import Image from "next/image";
import masksImage from "../../public/images/masks-sample-450x450.jpg";

const Card = ({ name, url, description }) => {
  return (
    <div className="card">
      <Link href={url}>
        <a>
          <Image
            src={masksImage}
            height={450}
            width={450}
            alt={name}
            className="card-image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            {description?<p className="text-gray-700 text-base">{description}</p>:null}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
