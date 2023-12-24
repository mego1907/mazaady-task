"use client";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelectbox,
  CustomTitle,
} from "./custom";
import { instance } from "@/network/axiosConfig";

async function getProcessType(id: any) {
  const res = await instance.get(`properties?cat=${id}`);

  return res.data.data;
}

function Form({ categories }: { categories: [] | undefined }) {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState(undefined);

  const [allCategories, setAllCategories] = useState(
    categories?.map(({ name, id, children }) => ({ name, id, children }))
  );

  const [allProperties, setAllProperties] = useState([]);
  const [properties, setProperties] = useState({});

  const subCategoryFunc = (category: number | string): object | undefined =>
    allCategories?.find((cat) => cat.id === +category);

  useEffect(() => {
    const getData = async () => {
      const data = await getProcessType(13);
      setAllProperties(data);
    };

    getData();
  }, [subCategory]);

  const [customData, setCustomData] = useState([]);

  // =>> Handle Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const item = { ...properties, mainCategory, subCategory };

    let data: { mainCategory: string; subCategory: undefined }[] = [
      ...customData,
      item,
    ];

    setCustomData(data);
  };

  const tableHeaders = customData[0] && Object.keys(customData[0]);

  const tableRows = customData?.map((item, index) => {
    return (
      <tr key={index}>
        {tableHeaders?.map((header, index) => (
          <td className="text-center border border-slate-700 p-2" key={index}>
            {item[header]}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="bg-white p-6 rounded-21px">
      <form
        className="flex flex-col gap-5 md:w-1/2 w-full"
        onSubmit={handleSubmit}
      >
        <CustomTitle desc="This is the only page is not responsive">
          Form
        </CustomTitle>

        <CustomSelectbox
          options={allCategories}
          label="Main Category"
          defaultValue="Nader"
          onChange={(e: any) => setMainCategory(e.target.value.split("-")[0])}
        />

        <CustomSelectbox
          options={subCategoryFunc(mainCategory)?.children}
          label="Sub Category"
          onChange={(e: any) => setSubCategory(e.target.value.split("-")[0])}
        />

        {allProperties.map((prop, index) => {
          if (prop.options.length > 0) {
            return (
              <CustomSelectbox
                key={index}
                options={[
                  ...prop?.options,
                  { name: "Other", value: "other", id: "other" },
                ]}
                label={prop?.name}
                onChange={(e) =>
                  setProperties({
                    ...properties,
                    [prop.name]: e.target.value.split("-")[1]
                      ? e.target.value.split("-")[1]
                      : e.target.value,
                  })
                }
              />
            );
          }
        })}

        <CustomButton bgGradient={false} type="submit" className="bg-gray-700">
          Submit
        </CustomButton>
      </form>

      <table className="border-collapse border border-slate-500 w-full mt-5">
        <thead>
          <tr>
            {tableHeaders?.map((header, i) => (
              <th
                key={i}
                className="text-center border border-slate-700 bg-gray-200 p-1"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Form;