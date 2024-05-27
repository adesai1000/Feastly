import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-3xl font-bold xl:text-5xl text-left">Explore the full menu
</h1>
        <p className="text-white xl:text-xl text-left">
        Whether you're hungry for a Chick-fil-A® Chicken Sandwich or salads prepared fresh daily, we're here to serve you delicious food made with quality ingredients every day (except Sunday).
        </p>
        <button className="bg-chick-red text-white rounded-full font-bold py-3 px-6">Find Something to eat</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
