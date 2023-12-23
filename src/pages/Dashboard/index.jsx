import React, { useState } from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
  { label: "All", value: "All" },
  { label: "Total Footage Sales", value: "Total Footage Sales" },
  { label: "Affiliate performance", value: "Affiliate performance" },
];
const buttonOneOptionsList = [
  { label: "Month", value: "Month" },
  { label: "Week", value: "Week" },
  { label: "Day", value: "Day" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const [frame348value, setFrame348value] = React.useState("");

  const [isExpanded, setIsExpanded] = useState(false);

  const data = [
    {
      name: " Jenny pauls",
      email: "jennypauls@gmail.com",
      requesttype: "Submitted a Sell your Claim Request",
      time: "10 mins ago",
    },

    {
      name: " Jenny pauls",
      email: "jennypauls@gmail.com",
      requesttype: "Submitted an Affiliate Request",
      time: "10 mins ago",
    },

    {
      name: " Jenny pauls",
      email: "jennypauls@gmail.com",
      requesttype: "Submitted an Free Footage Request",
      time: "10 mins ago",
    },

    {
      name: " Jenny pauls",
      email: "jennypauls@gmail.com",
      requesttype: "Bought Footage ID: 2343786",
      time: "10 mins ago",
    },
  ];

  const handleButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto  w-full
      "
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className=" bottom-0 top-0 left-0 !sticky !w-[262px] flex h-[100vh] md:hidden bg-sideblue  justify-start overflow-hidden md:px-5">
            <Img
              className="h-[81px] md:h-auto ml-6 mr-[91px] mt-6 object-cover w-[57%]"
              src="images/img_image14.png"
              alt="imageFourteen"
            />
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[158px] ml-6 mr-20 mt-[129px]"
              onClick={() => navigate("/managefootageone")}
              leftIcon={
                <Img
                  className="h-8 mr-2"
                  src="images/img_fluentvideo24regular.svg"
                  alt="fluent:video-24-regular"
                />
              }
            >
              <div className="font-medium leading-[normal] text-base text-left text-white-A700">
                Manage Footage
              </div>
            </Button>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "8px",
                  gap: "8px",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderColor: "transparent",
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                  borderRadius: "8px",
                  [`&:hover, &.ps-active`]: { borderColor: "#1976d2ff" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[99px] pt-[15px] px-4 w-[88%]"
            >
              <div className="flex flex-col md:gap-10 gap-[163px] items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-8 w-8"
                      src="images/img_icoutlinedashboard.svg"
                      alt="icoutlinedashbo"
                    />
                  }
                  active={window.location.pathname === "/dashboard"}
                  href="/dashboard"
                >
                  <Text className="w-auto">Dashboard</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[7px] mt-0.5 w-6"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  }
                  active={window.location.pathname === "/manageaffiliate"}
                  href="/manageaffiliate"
                >
                  <Text className="w-auto">Manage Affiliate</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-start mt-[468px] pb-1.5 w-full">
                <SubMenu
                  icon={
                    <Img
                      className="h-8 mb-1 w-8"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  label={<Text className="w-auto">Settings</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
              </div>
              <Line className="bg-white-A700 h-px mt-9 w-full" />
            </Menu>
          </Sidebar1>
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
                {" "}
                <Input
                  name="frame348"
                  placeholder="Search "
                  value={frame348value}
                  onChange={(e) => setFrame348value(e)}
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-left w-full"
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
            <div className="flex flex-col  gap-6 items-center justify-start w-[95%] md:w-full">
              {/* Statstic full div start */}
              <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
                {/* Statastic left Div */}
                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[65%] md:w-full">
                  <Text className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01 source-sans ">
                    Statistics
                  </Text>
                  <List
                    className="sm:flex-col flex-row font-lato gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-2xl shadow-bs1 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mr-[91px] mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[63%]">
                          <div className="flex flex-col  items-center justify-start w-full">
                            <Text className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 source-sans font-semibold ">
                              2500 USD
                            </Text>
                          </div>
                          <Text className="text-base text-blue_gray-900_01 font-bold">
                            Total Footage Sales
                          </Text>
                        </div>
                      </div>
                      <Text className="mb-[7px] md:ml-[0] ml-[300px] mr-[9px] mt-[3px] text-base font-bold text-red-700">
                        +28%
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-2xl shadow-bs1 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mr-[91px] mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[63%]">
                          <div className="flex flex-col  items-center justify-start w-full">
                            <Text className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 source-sans font-semibold ">
                              1000 USD
                            </Text>
                          </div>
                          <Text className="text-base text-blue_gray-900_01 font-bold ">
                            Total Affiliate Payout
                          </Text>
                        </div>
                      </div>
                      <Text className="mb-[7px] md:ml-[0] ml-[300px] mr-[9px] mt-[3px] text-base font-bold text-indigo-900">
                        +28%
                      </Text>
                    </div>
                  </List>
                </div>
                {/* statastic left div end */}

                {/* statstic right div */}
                <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                  <List
                    className="flex flex-col gap-4 items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between gap-1 w-full">
                          <Text className=" text-blue_gray-900_01 sm:text-lg md:text-xl text-2xl source-sans font-semibold ">
                            Collisions Captured
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_edit.svg"
                            alt="edit"
                          />
                        </div>
                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-100_dd border-solid h-10 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Text className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01">
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between gap-4 w-full">
                          <Text className="text-2xl source-sans font-semibold text-blue_gray-900_01 sm:text-lg  md:text-xl">
                            Hit-and-runs Captured
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_edit.svg"
                            alt="edit"
                          />
                        </div>
                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-100_dd border-solid h-10 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Text className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01">
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="text-2xl source-sans font-semibold text-blue_gray-900_01 sm:text-lg md:text-xl">
                            Hit-and-runs Captured
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_edit.svg"
                            alt="edit"
                          />
                        </div>
                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-100_dd border-solid h-10 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Text className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01">
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                {/* statstic right div end */}
              </div>
              {/* Statstic full div end */}

              {/* Chart section start */}
              <div className="flex flex-col font-inter gap-8 items-start justify-start w-full md:w-full">
                {/* Filter section start */}

                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-3   items-center justify-start w-3/12  ">
                    <Text className="text-base text-blue_gray-900_01 font-bold w-auto">
                      Filter by
                    </Text>
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-full"
                      placeholderClassName="text-blue_gray-900_a2"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="button"
                      options={buttonOptionsList}
                      isSearchable={false}
                      placeholder="All"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <SelectBox
                    className="border border-gray-500_7f border-solid sm:flex-1 font-semibold text-left text-sm w-[13%] sm:w-full"
                    placeholderClassName="text-blue_gray-900_a2"
                    indicator={
                      <Img
                        className="h-[5px] mr-[0] w-2.5"
                        src="images/img_vector.svg"
                        alt="Vector"
                      />
                    }
                    isMulti={false}
                    name="button_One"
                    options={buttonOneOptionsList}
                    isSearchable={false}
                    placeholder="Month"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                {/* Filter section end */}

                {/* Chart start */}
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col font-lato gap-[25px] items-start justify-start pb-2.5 rounded-[12px] shadow-bs2 w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1028px] w-full">
                    <Line className="bg-white-A700 h-px w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-start  w-full">
                    <div className="flex flex-col gap-2 items-end justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                        <div className="bg-indigo-900 h-4 rounded w-4 "></div>
                        <Text
                          className="text-blue_gray-900_01 text-center pr-4 text-xs w-auto"
                          size="txtLatoRegular12"
                        >
                          Footage{" "}
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row font-plusjakartasans gap-[9px] items-start justify-between mr-0.5 w-full">
                        <div className="flex flex-col md:mt-0 mt-[15px] relative w-[94%] md:w-full">
                          <div className="flex flex-col items-center justify-start m-auto w-full">
                            <div className="flex md:flex-col flex-row gap-1 h-[260px] md:h-auto items-start justify-start max-w-[980px] w-full">
                              <div className="flex flex-col h-[260px] md:h-auto items-start justify-center pb-6">
                                <Text
                                  className="rotate-[90deg] text-blue_gray-900_01 text-center text-sm w-auto"
                                  size="txtPlusJakartaSansRomanSemiBold14"
                                >
                                  All
                                </Text>
                              </div>

                              <div className="flex flex-1 flex-col font-lato h-full items-start justify-start w-full">
                                <div className="md:h-[210px] h-full relative w-full">
                                  {/* <div className="flex flex-col h-full     items-center justify-start m-auto w-full">
                                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                      <div className="flex flex-col h-[22px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs w-auto"
                                          size="txtLatoRegular12"
                                        >
                                          100
                                        </Text>
                                      </div>
                                      <div className="flex flex-col h-[17px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs"
                                          size="txtLatoRegular12"
                                        >
                                          80
                                        </Text>
                                      </div>
                                      <div className="flex flex-col h-[17px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs"
                                          size="txtLatoRegular12"
                                        >
                                          60
                                        </Text>
                                      </div>
                                      <div className="flex flex-col h-[17px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs"
                                          size="txtLatoRegular12"
                                        >
                                          40
                                        </Text>
                                      </div>
                                      <div className="flex flex-col h-[17px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs"
                                          size="txtLatoRegular12"
                                        >
                                          20
                                        </Text>
                                      </div>
                                      <div className="flex sm:flex-col flex-row gap-2 h-[17px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-blue_gray-900_01 text-right text-xs w-auto"
                                          size="txtLatoRegular12"
                                        >
                                          0
                                        </Text>
                                        <Img
                                          className="flex-1 h-px max-h-px sm:w-[]"
                                          src="images/img_divider.svg"
                                          alt="divider_One"
                                        />
                                      </div>
                                    </div>
                                  </div> */}
                                  <div className="absolute border-blue_gray-900_99 border-l border-solid flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[95%] md:w-full">
                                    <div className="flex flex-col items-center justify-start px-0.5 w-full">
                                      <div className="flex flex-row items-start justify-between pr-[18px] w-[99%] md:w-full">
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group99.svg"
                                          alt="groupNinetyNine"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group100"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group101"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group102"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group103"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group105"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group104"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group106"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group99.svg"
                                          alt="group107"
                                        />
                                        <Img
                                          className="h-[177px] mt-[33px]"
                                          src="images/img_group100.svg"
                                          alt="group108"
                                        />
                                        <Img
                                          className="h-[210px]"
                                          src="images/img_group100.svg"
                                          alt="group109"
                                        />
                                        <div className="h-[210px] relative w-[6%]">
                                          <Img
                                            className="absolute h-[210px] inset-y-[0] my-auto right-[14%]"
                                            src="images/img_group100.svg"
                                            alt="group110"
                                          />
                                          <div className="absolute bg-green-50 border border-dashed border-green-600_d9 flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 rounded-lg top-[20%] w-full">
                                            <Text
                                              className="text-center text-green-600 text-xs"
                                              size="txtLatoRegular12Green600"
                                            >
                                              +$2500
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end justify-start pl-10 sm:pl-5 w-full">
                                  <div className="flex flex-row gap-6 items-center justify-between max-w-[918px] sm:px-5 px-6 w-full">
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Jan
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Feb
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Mar
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Apr
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      May
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Jun
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs"
                                      size="txtLatoRegular12"
                                    >
                                      Jul
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Aug
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Sep
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Oct
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Nov
                                    </Text>
                                    <Text
                                      className="text-blue_gray-900_01 text-center text-xs w-auto"
                                      size="txtLatoRegular12"
                                    >
                                      Dec
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="ml-auto mr-[436px] pt-5 text-blue_gray-900_01 text-center text-sm z-[1]"
                            size="txtPlusJakartaSansRomanSemiBold14"
                          >
                            Month
                          </Text>
                        </div>
                        <div className="flex flex-row font-lato gap-1 items-center justify-center w-auto">
                          <div className="bg-red-700 h-4 rounded w-4"></div>
                          <Text
                            className="text-blue_gray-900_01 text-center text-xs w-auto pr-4"
                            size="txtLatoRegular12"
                          >
                            Affiliate
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* chart end */}
              </div>
              {/* Chart section end */}

              <div className="flex flex-col font-lato items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <div
                    className={`flex flex-row md:gap-10 items-start ${
                      isExpanded ? "mb-0" : "mb-10"
                    } justify-between w-full`}
                  >
                    <Text
                      className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                      size="txtLatoSemiBold22"
                    >
                      Recent Activities
                    </Text>

                    <Button
                      className="flex justify-center  items-center gap-2 mr-3 text-blue_gray-900_01 text-base  font-bold"
                      onClick={handleButtonClick}
                    >
                      {isExpanded ? "Expand" : "Collapse"}
                      {isExpanded ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_375_5220)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.7073 15.707C12.5198 15.8945 12.2655 15.9998 12.0003 15.9998C11.7352 15.9998 11.4809 15.8945 11.2933 15.707L5.63634 10.05C5.54083 9.95775 5.46465 9.84741 5.41224 9.7254C5.35983 9.6034 5.33225 9.47218 5.33109 9.3394C5.32994 9.20662 5.35524 9.07494 5.40552 8.95205C5.4558 8.82915 5.53006 8.7175 5.62395 8.6236C5.71784 8.52971 5.82949 8.45546 5.95239 8.40518C6.07529 8.3549 6.20696 8.3296 6.33974 8.33075C6.47252 8.3319 6.60374 8.35949 6.72575 8.4119C6.84775 8.46431 6.9581 8.54049 7.05034 8.636L12.0003 13.586L16.9503 8.636C17.1389 8.45384 17.3915 8.35305 17.6537 8.35533C17.9159 8.3576 18.1668 8.46277 18.3522 8.64818C18.5376 8.83359 18.6427 9.0844 18.645 9.3466C18.6473 9.6088 18.5465 9.8614 18.3643 10.05L12.7073 15.707Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_5220">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_330_1366)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.7073 8.29302C12.5198 8.10555 12.2655 8.00024 12.0003 8.00024C11.7352 8.00024 11.4809 8.10555 11.2933 8.29302L5.63634 13.95C5.54083 14.0423 5.46465 14.1526 5.41224 14.2746C5.35983 14.3966 5.33225 14.5278 5.33109 14.6606C5.32994 14.7934 5.35524 14.9251 5.40552 15.048C5.4558 15.1709 5.53006 15.2825 5.62395 15.3764C5.71784 15.4703 5.82949 15.5446 5.95239 15.5948C6.07529 15.6451 6.20696 15.6704 6.33974 15.6693C6.47252 15.6681 6.60374 15.6405 6.72575 15.5881C6.84775 15.5357 6.9581 15.4595 7.05034 15.364L12.0003 10.414L16.9503 15.364C17.1389 15.5462 17.3915 15.647 17.6537 15.6447C17.9159 15.6424 18.1668 15.5373 18.3522 15.3518C18.5376 15.1664 18.6427 14.9156 18.645 14.6534C18.6473 14.3912 18.5465 14.1386 18.3643 13.95L12.7073 8.29302Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_330_1366">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="matrix(1 0 0 -1 0 24)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </Button>
                  </div>
                  <div
                    className={`bg-white-A700 border  border-gray-500_7f border-solid  ${
                      isExpanded ? "flex" : "hidden"
                    } flex-col items-center justify-end mb-10 py-[21px] shadow-bs3 w-full`}
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start mt-3 w-full">
                      <List
                        className="flex flex-col gap-[31.5px] items-center  pt-[30px] sm:px-5 px-[34px] w-full"
                        orientation="vertical"
                      >
                        {data?.map((item, i) => (
                          <div className="w-full ">
                            <div className="grid grid-cols-4 md:flex-1 md:flex-col flex-row md:gap-5 gap-4 w-[99%] md:w-full">
                              <Text
                                className="text-base items-start text-left  text-blue_gray-900_01"
                                size="txtLatoRegular16Bluegray90001"
                              >
                                {item.name}
                              </Text>
                              <Text
                                className="text-base items-start text-left  text-blue_gray-900_01"
                                size="txtLatoRegular16Bluegray90001"
                              >
                                {item.email}
                              </Text>
                              <div className="flex ">
                                <Text
                                  className="md:ml-[0]  text-base text-blue_gray-900_01"
                                  size="txtLatoBold16"
                                >
                                  {item.requesttype}
                                </Text>
                              </div>

                              <div className="flex gap-14 mr-5">
                                {" "}
                                <Text
                                  className="md:ml-[0] text-base text-blue_gray-900_01"
                                  size="txtLatoBold16"
                                >
                                  {item.time}
                                </Text>
                                <Text
                                  className="md:ml-[0]  text-base text-blue-700 underline"
                                  size="txtLatoBold16Blue700"
                                >
                                  View
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-px mt-8 bg-blue_gray-100_01 w-full" />
                          </div>
                        ))}
                      </List>
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

export default DashboardPage;
