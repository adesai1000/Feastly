import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-chick-red">
      {/* WRAPPER */}
      <div className="text-4xl font-bold text-chick-red p-5">Best Sellers</div>
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4   md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full cursor-pointer">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4 pt-5">
              <h1 className="text-3xl font-bold uppercase xl:text-2xl 2xl:text-3xl ">{item.title}</h1>
              <p className="p-2 2xl:p-8 text-start font-bold">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-chick-red text-white p-4 rounded-full font-bold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
