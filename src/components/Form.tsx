"use client";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelectbox,
  CustomTable,
  CustomTitle,
} from "./custom";
import { instance } from "@/network/axiosConfig";
import CategoriesAndSubCategories from "./CategoriesAndSubCategories";

function Form({ categories }: { categories: [] | undefined }) {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState(undefined);
  const [nextProperty, setNextProperty] = useState(0);

  const [allCategories, setAllCategories] = useState(
    categories?.map(({ name, id, children }) => ({ name, id, children }))
  );

  const [allProperties, setAllProperties] = useState([]);
  // const [properties, setProperties] = useState({});
  const [customData, setCustomData] = useState([]);

  const [allShownProperties, setAllShownProperties] = useState([]);

  // =========================================
  async function getProcessType(id: any) {
    try {
      const res = await instance.get(`properties?cat=${id}`);

      setAllProperties(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  // =>> Handle Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    let item = {};
    let data = [];

    Array(nextProperty + 3)
      .fill(0)
      .map((_, index) => {
        if (e.target[index].value.split("-")[1]) {
          item = {
            ...item,
            [e.target[index].id]: e.target[index].value.split("-")[1],
          };
        } else {
          item = { ...item, [e.target[index].id]: e.target[index].value };
        }
      });

    data = [...customData, item];

    // const item = { ...properties, mainCategory, subCategory };

    // let data: { mainCategory: string; subCategory: undefined }[] = [
    //   ...customData,
    //   item,
    // ];
    // console.log("data :", data);

    setCustomData(data);
  };

  // console.log("customData :", customData);

  useEffect(() => {
    if (allProperties[nextProperty]) {
      setAllShownProperties([
        ...allShownProperties,
        allProperties[nextProperty],
      ]);
    }
  }, [nextProperty, allProperties, subCategory]);

  // => Handle Change
  // const handleChange = (e, prop, index) => {
  //   if (e.target.value.split("-")[1]) {
  //     setProperties({
  //       ...properties,
  //       [prop.name]: e.target.value.split("-")[1],
  //     });
  //   } else {
  //     setProperties({
  //       ...properties,
  //       [prop.name]: e.target.value,
  //     });
  //   }
  // };

  // console.log("nextProperty :", nextProperty);

  return (
    <div className="bg-white p-6 rounded-21px">
      <form
        className="flex flex-col gap-5 md:w-1/2 w-full"
        onSubmit={handleSubmit}
      >
        <CustomTitle desc="This is the only page is not responsive">
          Form
        </CustomTitle>

        <CategoriesAndSubCategories
          allMainCategories={allCategories}
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
          setSubCategory={setSubCategory}
          setAllShownProperties={setAllShownProperties}
          // setProperties={setProperties}
          getProcessType={getProcessType}
          setNextProperty={setNextProperty}
          setAllProperties={setAllProperties}
        />

        {allShownProperties.map((prop, index) => {
          if (prop) {
            return (
              <CustomSelectbox
                key={index}
                options={[
                  ...prop?.options,
                  { name: "Other", value: "other", id: "other" },
                ]}
                label={prop?.name}
                // onChange={(e) => handleChange(e, prop, index)}
                isLastSelect={allShownProperties.length === index + 1}
                setNextProperty={setNextProperty}
                nextProperty={nextProperty}
              />
            );
          }
        })}

        <CustomButton bgGradient={false} type="submit" className="bg-gray-700">
          Submit
        </CustomButton>
      </form>

      <CustomTable customData={customData} />
    </div>
  );
}

export default Form;
