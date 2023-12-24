"use client";
import Image from "next/image";
import React, { useState } from "react";

import { PiHeart, PiHeartFill } from "react-icons/pi";

type ProductItemProps = {
  title?: string;
  startingPrice?: string;
  image?: string;
  imgBanner?: string;
  lotStartsIn?: [];
};

function ProductItem({
  title,
  startingPrice,
  image,
  imgBanner,
  lotStartsIn,
}: ProductItemProps) {
  const [fav, setFav] = useState(false);

  return (
    <div className="relative flex w-full p-2">
      <div>
        <div className="flex flex-wrap">
          {/* Image */}
          <div className="relative md:w-[145px] md:h-[127px] min-w-[87px] h-[72px]">
            <img
              src={image}
              // width={145}
              // height={127}
              // layout="responsive"
              className="md:rounded-[28px] rounded-[15px] md:w-[145px] md:h-[127px] w-[87px] h-[72px]"
              alt="product name"
            />
            <div className="absolute right-0 bottom-0 bg-primary text-white md:w-[114px] md:h-[37px] w-[66px] h-[20px] rounded-tl-[34px] rounded-br-[34px] md:text-xs text-xxxs flex items-center justify-center">
              {imgBanner}
            </div>
          </div>
          {/* Product details */}
          <div className="flex flex-col justify-center gap-3 md:ml-4 ml-2 md:mt-0 mt-2">
            <p className="md:text-lg text-xs text-[#333] capitalize whitespace-normal">
              {title}
            </p>
            {/* Price */}
            <span className="flex items-center text-[#828282] md:text-lg text-xs gap-1.5">
              starting price
              <h3 className="md:text-[24px] text-sm font-bold text-[#333]">
                {startingPrice}
              </h3>
            </span>
            {/* Days */}
            <div className="flex md:flex-row flex-col md:items-center gap-4">
              <span className="text-[#828282] md:text-lg text-xs">
                Lot starts in
              </span>
              <div className="flex gap-2">
                {lotStartsIn?.map(
                  ({ count, type }: { count: number; type: string }) => (
                    <>
                      <span className=" py-[6px] px-[14px] rounded-[24px] flex items-center justify-center bg-secondary-100 font-bold text-secondary-500 md:text-xl text-xs">
                        {count}
                        <span className="pl-1 md:text-sm text-xxs font-bold">
                          {type}
                        </span>
                      </span>
                    </>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div
        className="absolute top-3 md:right-2 left-3 md:left-auto w-6 h-6 flex items-center justify-center bg-white rounded-full cursor-pointer"
        onClick={() => setFav(!fav)}
      >
        {fav ? (
          <PiHeartFill color="#f00" className="md:text-2xl text-sm" />
        ) : (
          <PiHeart className="md:text-2xl text-sm" />
        )}
      </div>
    </div>
  );
}

export default ProductItem;
