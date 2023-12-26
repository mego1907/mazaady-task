"use client";
import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import { instance } from "@/network/axiosConfig";

type CustomSelectboxProps = {
  options?: { name: string; id: number; child: boolean }[];
  label: string;
  defaultValue?: string;
  onChange?: any;
  children?: any;
  isLastSelect?: boolean;
  setNextProperty?: any;
  nextProperty?: number;
};

function CustomSelectbox({
  options,
  label,
  onChange,
  isLastSelect,
  setNextProperty,
  nextProperty,
}: CustomSelectboxProps) {
  const [showInput, setShowInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState(undefined);

  const [newSelectData, setNewSelectData] = useState(undefined);

  // console.log("selectedOption :", selectedOption)

  async function getChildOptions(id: any) {
    try {
      const res = await instance.get(`get-options-child/${id}`);

      setNewSelectData(res.data.data[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="inline-block relative w-full">
      <div>
        {label && <label htmlFor={label}>{label}</label>}
        <div className="relative w-full">
          <select
            id={label}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              onChange && onChange(e);

              const selectedOpt = options.find(
                (item) => item.id == e.target.value.split("-")[0]
              );

              if (selectedOpt.child) {
                setSelectedOption(selectedOpt);
                getChildOptions(selectedOpt?.id);
              }

              if (e.target.value.split("-")[0] === "other") {
                setShowInput(true);
              } else {
                setShowInput(false);
              }

              if (isLastSelect && !selectedOpt.child) {
                setNextProperty(nextProperty + 1);
              }
            }}
          >
            <option value={undefined}> ---- </option>
            {options?.map(
              (opt: { name: string; id: number; child: boolean }) => {
                return (
                  <option
                    key={opt?.id}
                    value={`${opt?.id}-${opt?.name}`}
                    id={opt?.name}
                  >
                    {opt?.name}
                  </option>
                );
              }
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {newSelectData ? (
        <div>
          {newSelectData.name && (
            <label htmlFor={newSelectData.name}>{newSelectData.name}</label>
          )}
          <div className="relative w-full">
            <select
              id={newSelectData.name}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                onChange && onChange(e);

                if (e.target.value.split("-")[0] === "other") {
                  setShowInput(true);
                } else {
                  setShowInput(false);
                }
                setNextProperty(nextProperty + 1);
              }}
            >
              <option value={undefined}> ---- </option>
              {newSelectData?.options?.map(
                (opt: { name: string; id: number; child: boolean }) => {
                  return (
                    <option
                      key={opt?.id}
                      value={`${opt?.id}-${opt?.name}`}
                      id={opt?.name}
                    >
                      {opt?.name}
                    </option>
                  );
                }
              )}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {showInput && (
        <div className="mt-3">
          <CustomInput onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default CustomSelectbox;
