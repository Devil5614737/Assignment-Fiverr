import Image from "next/image";
import React, { FC } from "react";
import * as CardStyles from "@/styles/CardStyles";
import { IData } from "@/interfaces/IData";
import { LikeComp } from "./LikeComp";

export const Card: FC<{ dog: IData }> = ({ dog }) => {
  // Destructuring styles from CardStyles file
  const { address, imgSrc, name, price, subname } = dog;

  // Destructuring styles from CardStyles file
  const {
    CardBody,
    CardBox,
    CardFooter,
    CardFooterPricing,
    CardLocation,
    CardTitle,
    CardType,
    ImageWrapper,
  } = CardStyles;

  // Rendering card with dog information
  return (
    <CardBox>
      <ImageWrapper>
        <Image fill loading="lazy" src={imgSrc} alt="a cute dog" />
      </ImageWrapper>
      <CardBody className="body">
        <CardTitle>{name}</CardTitle>
        <CardType className="">
          <p>{subname}</p>
          <p>Top Ad</p>
        </CardType>
        <CardFooter>
          <CardFooterPricing>
            <p>$ {price}</p>
            {/* Like component to render like button */}
            <LikeComp />
          </CardFooterPricing>
          <CardLocation>{address}</CardLocation>
        </CardFooter>
      </CardBody>
    </CardBox>
  );
};
