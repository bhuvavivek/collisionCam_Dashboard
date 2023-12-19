import React from "react";

import { Button, Img, Input, List, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "../../assets/images";

const AffiliateperformancePage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <Input
                name="frame348"
                placeholder="Search "
                value={frame348value}
                onChange={(e) => setFrame348value(e)}
                className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-center w-full"
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
              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            <Text
              className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
              size="txtSourceSansProRegular32"
            >
              Affiliate Performance
            </Text>
            <div className="flex flex-col font-lato items-center justify-start mt-[53px] w-1/2 md:w-full">
              <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-900_01 w-auto"
                  size="txtLatoBold16"
                >
                  Filter by Date range
                </Text>
                <Input
                  name="button"
                  placeholder="From- dd/mm/yyyy"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-semibold p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-500_7f border-solid flex w-[37%] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-8 my-auto"
                      src="images/img_simplelineiconscalender.svg"
                      alt="simple-line-icons:calender"
                    />
                  }
                  size="sm"
                ></Input>
                <Input
                  name="button_One"
                  placeholder="To- dd/mm/yyyy"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-semibold p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-500_7f border-solid flex w-[37%] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_simplelineiconscalender.svg"
                      alt="simple-line-icons:calender"
                    />
                  }
                  size="sm"
                ></Input>
              </div>
            </div>
            <List
              className="flex flex-col font-lato items-start mt-10 w-auto"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[172px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Name
                </Button>
                <Button
                  className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[134px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Affilliate ID
                </Button>
                <Button
                  className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[111px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Total Sales
                </Button>
                <Button
                  className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[110px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Commission
                </Button>
                <Text
                  className="bg-blue-50 border-gray-400 border-l border-solid border-y justify-center px-[5px] py-[9px] text-blue_gray-900_a2 text-sm w-auto"
                  size="txtLatoBold14"
                >
                  Number of Sales
                </Text>
                <Button
                  className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[111px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Paid Earning
                </Button>
                <Button
                  className="border border-gray-400 border-solid cursor-pointer font-bold min-w-[111px] text-center text-sm"
                  shape="square"
                  color="blue_50"
                  size="sm"
                  variant="fill"
                >
                  Unpaid Earning
                </Button>
                <div className="bg-blue-50 border-gray-400 border-r border-solid border-y flex flex-row items-center justify-between p-[9px] rounded-tr w-[21%] md:w-full">
                  <Text
                    className="ml-1.5 text-blue_gray-900_a2 text-sm"
                    size="txtLatoBold14"
                  >
                    Status
                  </Text>
                  <Text
                    className="mr-[37px] text-blue_gray-900_a2 text-sm"
                    size="txtLatoBold14"
                  >
                    Actions
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-red-700_a2 text-sm"
                    size="txtLatoRegular14Red700a2"
                  >
                    Inactive
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] rounded-bl text-center text-sm"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 rounded-br w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-red-700_a2 text-sm"
                    size="txtLatoRegular14Red700a2"
                  >
                    Inactive
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-blue-700_a2 text-sm"
                    size="txtLatoRegular14Blue700a2"
                  >
                    Active
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Grace Villa
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  1234567
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  10%
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[113px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  6
                </Button>
                <Button
                  className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <Button
                  className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[111px] text-center text-sm"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  $500
                </Button>
                <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-row items-center justify-between p-1.5 w-[21%] md:w-full">
                  <Text
                    className="ml-2.5 text-red-700_a2 text-sm"
                    size="txtLatoRegular14Red700a2"
                  >
                    Inactive
                  </Text>
                  <Img
                    className="h-6 mr-[21px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
            </List>
            <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[209px] w-[94%] md:w-full">
              <div className="flex flex-row gap-4 items-start justify-between w-[7%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Text
                  className="mt-[3px] text-base text-indigo-900"
                  size="txtLatoBold16Indigo900"
                >
                  Back
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-2/5 sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-14 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[176px]"
                    rightIcon={
                      <Img
                        className="h-6 ml-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-base text-left">
                      Next page
                    </div>
                  </Button>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-center text-gray-900"
                        size="txtLatoMedium16Gray900"
                      >
                        page
                      </Text>
                      <Button
                        className="!text-gray-900 border border-gray-500 border-solid cursor-pointer font-medium min-w-[94px] text-base text-center"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        1
                      </Button>
                      <Text
                        className="text-base text-center text-gray-900"
                        size="txtLatoMedium16Gray900"
                      >
                        of 300
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateperformancePage;
