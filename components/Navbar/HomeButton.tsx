import React from "react";
import Image from "next/image";

const HomeButton = () => {
  return (
    <div
      className="flex items-center justify-evenly gap-2 bg-white rounded-full px-4 
      h-[46px] cursor-pointer"
    >
      <Image
        src="/images/home.svg"
        width={30}
        height={30}
        className="scale-[80%]"
        alt="Home"
      />
      <span className="translate-y-[1px] font-semibold">Home</span>
    </div>
  );
};

export default HomeButton;
