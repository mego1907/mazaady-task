import { FollowingIcon, RateIcon } from "@/icons";
import Image from "next/image";
import React from "react";
import { CustomButton } from "./custom";

function ProfileDetailsSec() {
  return (
    <div className="rounded-[21px] bg-white md:p-6 p-4 flex flex-col">
      <Image src={"/hala.png"} width={100} height={100} alt="Profile Image" />

      <h4 className="text-2xl text-[#333] font-bold mt-4">Halla Ahmed</h4>
      <p className="text-sm text-[#4F4F4F] mt-[11px]">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>

      {/* profile data */}
      <div className="flex flex-wrap items-center md:gap-[17px] gap-[6px] py-6">
        <div className="flex items-center justify-center gap-2 bg-secondary-100 p-2 rounded-[18px]">
          <div className="md:w-6 h-6 w-[22.2px]">
            <FollowingIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-sm">5</span>
            <p className="text-secondary-500 text-xs">Following</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 bg-secondary-100 p-2 rounded-[18px]">
          <div className="md:w-6 h-6 w-[22.2px]">
            <FollowingIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-sm">20</span>
            <p className="text-secondary-500 text-xs">Followers</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 bg-secondary-100 p-2 rounded-[18px]">
          <div className="md:w-6 h-6 w-[22.2px]">
            <RateIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-sm">
              4.2{" "}
              <span className="text-[10px] text-[#828282] font-normal">
                ( 15 )
              </span>
            </span>
            <p className="text-secondary-500 text-xs">Rate</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <CustomButton className="w-full">Follow</CustomButton>
    </div>
  );
}

export default ProfileDetailsSec;
