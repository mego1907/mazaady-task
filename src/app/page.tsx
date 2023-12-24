import {
  Navbar,
  ProductItem,
  ProfileDetailsSec,
  QrCodeSec,
  CategoriesWithData,
} from "@/components";

import { instance } from "@/network/axiosConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazaady",
  icons: "/logo-2.png",
};

export default async function Home() {
  return (
    <main className="py-12">
      <div className="wrapper flex md:flex-row flex-col gap-[25px] items-start">
        <div className="md:w-[29%] lg:w-[35%] w-full flex flex-col gap-6 overflow-hidden">
          <ProfileDetailsSec />
          <QrCodeSec />
        </div>

        <div className="md:w-[71%] lg:w-[65%] w-full md:p-6 p-4 bg-white rounded-21px overflow-hidden">
          <CategoriesWithData />
        </div>
      </div>
    </main>
  );
}
