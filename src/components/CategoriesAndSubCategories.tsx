import React from "react";
import { CustomSelectbox } from "./custom";

const CategoriesAndSubCategories = ({
  allMainCategories,
  setMainCategory,
  mainCategory,
  setSubCategory,
  setAllShownProperties,
  // setProperties,
  getProcessType,
  setNextProperty,
  setAllProperties,
}) => {
  // Handle Select Main Category
  const handleSelectMainCategory = (e: any) => {
    setAllShownProperties([]);
    // setProperties({});
    setAllProperties([]);
    setNextProperty(0);
    setMainCategory(e.target.value.split("-")[0]);
  };

  // Handle Select Sub Category
  const handleSelectSubCategory = (e: any) => {
    setAllShownProperties([]);
    // setProperties({});
    setAllProperties([]);
    setNextProperty(0);
    setSubCategory(e.target.value.split("-")[0]);
    getProcessType(e.target.value.split("-")[0]);
  };

  return (
    <div>
      <CustomSelectbox
        options={allMainCategories}
        label="Main Category"
        onChange={handleSelectMainCategory}
      />

      <CustomSelectbox
        options={
          allMainCategories?.find((cat) => cat.id == mainCategory)?.children
        }
        label="Sub Category"
        onChange={handleSelectSubCategory}
      />
    </div>
  );
};

export default CategoriesAndSubCategories;
