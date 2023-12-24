import React, { ChangeEventHandler } from "react";

type CustomInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
};

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="w-full mb-6 md:mb-0">
      {label && (
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={label}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
  );
};

export default CustomInput;
