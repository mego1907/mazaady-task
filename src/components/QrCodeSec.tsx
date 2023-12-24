"use client";
import { DownloadIcon, EyeIcon, ShareIcon } from "@/icons";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function QrCodeSec() {
  const [openQrCode, setOpenQrCode] = useState(false);

  return (
    <div className={`rounded-[21px] bg-white p-6 gap-4 flex flex-col`}>
      {/* Header */}
      <div className="flex justify-between md:gap-6 gap-4">
        <h5 className="font-bold text-[#333] md:text-2xl text-[16px]">
          QR Code
        </h5>
        <div className="flex md:gap-6 gap-4">
          <button type="button" className="w-6 h-6">
            <EyeIcon />
          </button>
          <button type="button" className="w-6 h-6">
            <ShareIcon />
          </button>
          <button type="button" className="w-6 h-6">
            <DownloadIcon />
          </button>
          <button
            type="button"
            className="md:hidden w-6 h-6 rounded-full bg-[#F6F4F5] flex items-center justify-center"
            onClick={() => setOpenQrCode(!openQrCode)}
          >
            {openQrCode ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
      </div>

      <div
        className={` flex-col gap-4 ${
          openQrCode ? "flex" : "md:flex hidden"
        } overflow-hidden`}
      >
        {/* Button */}
        <button
          type="button"
          className={`bg-secondary-100 p-3 flex items-center gap-1 rounded-[18px] `}
        >
          <div className="w-6 h-6 min-w-6 min-h-6">
            <DownloadIcon stroke="#FF951D" />
          </div>
          <p className="text-xs text-[#333] text-left">
            Download the QR code or share it with your friends.
          </p>
        </button>
        {/* QR code */}
        <div className="flex flex-col bg-custom-gradient rounded-[20px] p-5">
          <div className="bg-white flex flex-col justify-center items-center p-2 rounded-[18px]">
            <Image src="/logo.png" width={152} height={48} alt="logo" />

            <h3 className="text-2xl font-bold text-[#363333]">Hala Ahmed</h3>

            <Image src="/qr-code.jpg" width={135} height={135} alt="Qr code" />

            <p>Follow Us on Mazaady</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCodeSec;
