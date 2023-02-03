import { HeartIcon } from "@/styles/CardStyles";
import Image from "next/image";
import React, { useState } from "react";

// A component to handle the "like" button behavior
export const LikeComp = () => {
  // Use state to keep track of the "like" status
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the "like" status
  const handleLike = () => {
    setIsLiked((prev) => prev != true);
  };

  // Render the "heart" icon depending on the "like" status
  return isLiked ? (
    // Display a filled heart if the status is "liked"
    <HeartIcon onClick={handleLike}>
      <Image
        src="/assets/heart-filled.svg"
        width={24}
        height={24}
        alt="heart icon"
      />
    </HeartIcon>
  ) : (
    // Display an outlined heart if the status is not "liked"
    <HeartIcon onClick={handleLike}>
      <Image
        src="/assets/heart-outlined.svg"
        width={24}
        height={24}
        alt="heart icon"
      />
    </HeartIcon>
  );
};
