import Link from "next/link";
import Image from "next/image";
import masksImage from "../../public/images/masks-sample-450x450.jpg";

const Card = ({ name, url, description, size, image }) => {
  return (
    <div className="card">
      <Link href={url.toLowerCase()}>
        <a>
          <Image
            src={!image?masksImage:'http://res.cloudinary.com/caudillscrafts/image/upload/v1663467409/My%20Uploads/vhsrip4xj3ebi82r6xrn.jpg'}
            // layout='fill'
            height={size === "sm" ? 200 : 450}
            width={size === "sm" ? 200 : 450}
            alt={name}
            className="card-image"
          />
          <div className="h-[100px]px-6 py-4">
            <div className="font-bold text-xl flex justify-center items-center">{name}</div>
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
