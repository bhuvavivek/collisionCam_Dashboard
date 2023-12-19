import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Sidebar1 from "components/Sidebar1";

import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";

const SettingsTwoPage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
                <Input
                  name="frame348"
                  placeholder="Search "
                  value={frame348value}
                  onChange={(e) => setFrame348value(e)}
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base  w-full"
                  wrapClassName="flex sm:flex-1 sm:ml-[0] ml-[17px] rounded-[10px] sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-8 mr-2.5 my-auto"
                      src="images/img_search_blue_gray_900_01.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#30303090"
                      className="cursor-pointer h-8 my-auto"
                      onClick={() => setFrame348value("")}
                      style={{
                        visibility:
                          frame348value?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={32}
                      width={32}
                      viewBox="0 0 32 32"
                    />
                  }
                ></Input>
              </div>

              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            <div className="flex flex-col font-sourcesanspro items-start justify-start mt-[34px] w-[94%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                size="txtSourceSansProRegular32"
              >
                Settings
              </Text>
              <div className="flex md:flex-col flex-row font-lato md:gap-10 items-end justify-between mt-5 w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start md:mt-0 mt-6 w-auto sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900_01 w-auto"
                    size="txtLatoBold16"
                  >
                    General settings
                  </Text>
                  <Text
                    className="text-base text-blue-700 w-auto"
                    size="txtLatoBold16Blue700"
                  >
                    Request settings
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900_01 w-auto"
                    size="txtLatoBold16"
                  >
                    Security settings
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[13%] md:w-full">
                  <Button
                    className="border border-indigo-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-2 relative w-full">
                <Line className="bg-blue_gray-100_01 h-px mx-auto w-full" />
                <Line className="bg-blue-700 h-0.5 mb-auto ml-[193px] mt-[-1px] w-[12%] z-[1]" />
              </div>
              <div className="flex flex-col font-lato gap-[9px] items-start justify-start mt-[45px]">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Affiliate Program settings
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your Affiliate program information
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[21px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Commission Rate
                </Text>
                <div className="w-[43%]">
                  {" "}
                  <Input
                    name="group161"
                    placeholder="Input text here"
                    className="!placeholder:text-blue_gray-900_87 !text-blue_gray-900_87 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[35px] w-full" />
              <div className="flex md:flex-col flex-row font-lato md:gap-10 items-start justify-between mt-6 w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5">
                  <Link
                    to="/javascript:"
                    className="text-base text-blue_gray-900_01"
                  >
                    <Text size="txtLatoBold16">Terms and Conditions</Text>
                  </Link>
                </div>

                <div className="w-[43%]">
                  {" "}
                  <TextArea
                    className="bg-white-A700 border border-blue_gray-100_01 border-solid sm:flex-1 leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-lg shadow-bs1 text-base placeholder:text-blue_gray-900_87 text-blue_gray-900_87 text-left w-full sm:w-full"
                    name="group164"
                    placeholder="Input text here"
                  ></TextArea>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[26px] w-full" />
            </div>
            <div className="flex flex-col pb-14 font-lato gap-6 items-start justify-start mt-[50px] w-[94%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Sell your Claim
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your information
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-center md:mt-0 mt-2.5">
                  <Text
                    className="text-base text-blue_gray-900_01"
                    size="txtLatoBold16"
                  >
                    Terms and Conditions
                  </Text>
                </div>
                <div className="w-[43%]">
                  {" "}
                  <TextArea
                    className="bg-white-A700  w-full border border-blue_gray-100_01 border-solid sm:flex-1 leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-lg shadow-bs1 text-base placeholder:text-blue_gray-900_87 text-blue_gray-900_87 text-left  sm:w-full"
                    name="group164_One"
                    placeholder="Input text here"
                  ></TextArea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTwoPage;
