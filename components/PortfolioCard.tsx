import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  gitHubLink: string;
  liveLink: string;
};

const PortfolioCard = ({
  id,
  title,
  description,
  image,
  gitHubLink,
  liveLink,
}: Props) => {
  return (
    <div className="card flex flex-col justify-center items-center   shadow-xl hover:shadow-2xl ">
      <Link href={`/portfolio/${id}`}>
        <div className="overflow-hidden mx-10 rounded-lg">
          <img
            src={image}
            alt="Image"
            // layout="fill"
            // objectFit="cover"
            className="transform  transition-transform duration-500 hover:scale-125	"
          />
        </div>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <Link className="underline text-blue-500" href={gitHubLink}>
            GitHub
          </Link>
          <Link className="underline text-blue-500" href={liveLink}>
            Live Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
