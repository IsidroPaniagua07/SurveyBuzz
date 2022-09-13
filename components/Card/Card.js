import Link from "next/link";
import Image from "next/image";
import masksImage from "../../public/images/masks-sample-450x450.jpg";

const Card = ({ name, url, description, size }) => {
  return (
    <div className="card">
      <Link href={url.toLowerCase()}>
        <a>
          <Image
            src={masksImage}
            height={size === "sm" ? 200 : 450}
            width={size === "sm" ? 200 : 450}
            alt={name}
            className="card-image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            {description ? (
              <p className="text-gray-700 text-base">{description}</p>
            ) : null}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
