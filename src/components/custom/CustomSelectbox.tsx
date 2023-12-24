"use client";
import React, { ChangeEventHandler, useState } from "react";
import CustomInput from "./CustomInput";

type CustomSelectboxProps = {
  options?: { name: string; id: number }[];
  label: string;
  defaultValue?: string;
  onChange?: any;
  isOther?: boolean;
  children?: any;
};

function CustomSelectbox({
  options,
  label,
  defaultValue,
  onChange,
  isOther,
}: CustomSelectboxProps) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="inline-block relative w-full">
      {label && <label htmlFor={label}>{label}</label>}
      <div className="relative w-full">
        <select
          id={label}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            onChange && onChange(e);

            if (e.target.value.split("-")[0] === "other") {
              setShowInput(true);
            } else {
              setShowInput(false);
            }
          }}
        >
          <option value={undefined}> ---- </option>
          {options?.map((opt: { name: string; id: number }) => (
            <option
              key={opt?.id}
              value={`${opt?.id}-${opt?.name}`}
              id={opt?.name}
            >
              {opt?.name}
            </option>
          ))}
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

      {showInput && (
        <div className="mt-3">
          <CustomInput onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default CustomSelectbox;
