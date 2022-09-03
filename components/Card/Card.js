import Link from "next/link";
import Image from "next/image";
import masksImage from "../../public/images/masks-sample-450x450.jpg";

const Card = ({ name, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href={url}>
        <a>
          <Image
            src={masksImage}
            height={450}
            width={450}
            alt={name}
            className="rounded shadow"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">Description</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
