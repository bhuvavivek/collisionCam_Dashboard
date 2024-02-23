import { CloseSVG } from "assets/images";
import { Img, Input } from "components";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({ onChange, value, setToggle, toggle }) => {
  const [frame348value, setFrame348value] = React.useState("");
  return (
    <div className="bg-gray-100 md:fixed z-30 top-0 right-0 left-0 flex flex-row md:gap-10 items-center justify-between p-[23px] sm:p-5 sm:py-4 shadow-bs1 w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="hidden md:block text-xl"
      >
        <FaBars />
      </div>

      {onChange ? (
        <div className="w-[43%] md:w-[60%] sx:w-[70%]">
          <Input
            disabled={!onChange}
            name="frame348"
            placeholder="Search "
            value={value}
            handleChange={(e) => onChange(e.target.value)}
            className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-left w-full"
            wrapClassName="flex sm:flex-1 sm:ml-[0] ml-[17px] rounded-[10px] md:rounded-[50px] sm:w-full"
            prefix={
              <Img
                className="cursor-pointer h-8 md:h-5 mr-2.5 my-auto"
                src="images/img_search_blue_gray_900_01.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#30303090"
                className="cursor-pointer h-8 my-auto md:w-5 md:h-5"
                onClick={() => setFrame348value("")}
                style={{
                  visibility: frame348value?.length <= 0 ? "hidden" : "visible",
                }}
                height={32}
                width={32}
                viewBox="0 0 32 32"
              />
            }
          ></Input>
        </div>
      ) : (
        ""
      )}

      {/* <div className="text-3xl text-gray-900">
        <IoIosSearch />
        </div> */}

      <div className="h-8 mr-[17px] w-8 md:hidden"></div>
    </div>
  );
};

export default Navbar;
