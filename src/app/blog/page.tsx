import { CustomTitle } from "@/components/custom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mazaady - Blog",
  icons: "/logo-2.png",
};

function page() {
  return (
    <div className="py-12">
      <div className="wrapper">
        <div className="bg-white w-full p-6 rounded-21px">
          <CustomTitle>Blog</CustomTitle>
        </div>
      </div>
    </div>
  );
}

export default page;
