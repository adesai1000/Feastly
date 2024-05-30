import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-chick-red -m-2 pt-4 pb-4 pl-4 pr-2">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[calc(60vh-1rem)] border-2 border-chick-red sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-4 flex flex-col justify-between group hover:bg-gray-50 hover:shadow m-2"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-lg uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-chick-red text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
