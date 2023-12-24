import React from "react";

type CustomButtonProps = {
  type?: "submit" | "reset" | "button";
  className?: string;
  children: React.ReactNode;
  rounded?: "full" | "meduim";
  bgGradient?: boolean;
};

function CustomButton({
  type = "button",
  className,
  children,
  rounded = "meduim",
  bgGradient = true,
}: CustomButtonProps) {
  const roundedBtn =
    rounded === "full"
      ? "rounded-full"
      : rounded === "meduim"
      ? "rounded-[10px]"
      : "rounded-none";

  return (
    <button
      type={type}
      className={`p-2 px-4 text-white font-bold ${
        bgGradient ? "bg-custom-gradient" : ""
      } ${roundedBtn} ${className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
