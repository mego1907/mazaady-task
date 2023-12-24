"use client";
import { AddReviewIcon } from "@/icons";
import React, { useState } from "react";
import { CustomButton } from "./custom";
import ProductItem from "./ProductItem";
import { data } from "@/data";
import { getDataByCategory } from "@/utils";

function CategoriesWithData() {
  const [selectedCategory, setSelectedCategory] = useState("Products");

  const categories = ["Products", "Articles", "Reviews"];

  const dataByCategory = getDataByCategory(data, selectedCategory);

  return (
    <>
      {/* Categories */}
      <div className="flex md:justify-between justify-center">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-[10px]">
          {categories.map((category) => {
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 md:px-6 rounded-[14px] flex justify-center items-center border ${
                  selectedCategory === category
                    ? "bg-secondary-100 border-secondary-500 text-secondary-500"
                    : "border-[#E0E0E0] text-[#828282]"
                }  p-2`}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* Button */}
        <CustomButton className="md:flex items-center gap-1 hidden">
          <AddReviewIcon />
          <span>Add Review</span>
        </CustomButton>
      </div>

      {/* items */}
      <div>
        <h2 className="text-[32px] text-[#333] font-bold mt-6 mb-3">
          {selectedCategory}
          <span className="text-[14px] font-normal text-[#828282]">
            ( {dataByCategory?.length} )
          </span>
        </h2>
        <div className="flex flex-col gap-6">
          {dataByCategory?.map((item: object) => {
            return (
              <>
                {selectedCategory === "Products" && <ProductItem {...item} />}
              </>
            );
          })}
        </div>

        {dataByCategory.length === 0 && (
          <p className="text-gray-400">There is no {selectedCategory} here</p>
        )}
      </div>
    </>
  );
}

export default CategoriesWithData;
