import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const expandOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto pb-[125px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[262px] flex h-screen md:hidden bg-sideblue  justify-start overflow-auto md:px-5 top-[0]">
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
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
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
            <div className="flex flex-col font-sourcesanspro gap-6 items-center justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[70%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                    size="txtSourceSansProRegular32"
                  >
                    Statistics
                  </Text>
                  <List
                    className="sm:flex-col flex-row font-lato gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-[16px] shadow-bs1 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mr-[91px] mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[63%]">
                          <div className="flex flex-col font-sourcesanspro items-center justify-start w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01"
                              size="txtSourceSansProSemiBold40Bluegray90001"
                            >
                              2500 USD
                            </Text>
                          </div>
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Total Footage Sales
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mb-[7px] md:ml-[0] ml-[300px] mr-[9px] mt-[3px] text-base text-red-700"
                        size="txtLatoBold16Red700"
                      >
                        +28%
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-[16px] shadow-bs1 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mr-[91px] mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[63%]">
                          <div className="flex flex-col font-sourcesanspro items-center justify-start w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01"
                              size="txtSourceSansProSemiBold40Bluegray90001"
                            >
                              1000 USD
                            </Text>
                          </div>
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Total Affiliate Payout
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mb-[7px] md:ml-[0] ml-[300px] mr-[9px] mt-[3px] text-base text-indigo-900"
                        size="txtLatoBold16Indigo900"
                      >
                        +28%
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[27%] md:w-full">
                  <List
                    className="flex flex-col gap-4 items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtSourceSansProSemiBold22"
                          >
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
                          <Text
                            className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                            size="txtSourceSansProRegular32"
                          >
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtSourceSansProSemiBold22"
                          >
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
                          <Text
                            className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                            size="txtSourceSansProRegular32"
                          >
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtSourceSansProSemiBold22"
                          >
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
                          <Text
                            className="absolute h-full inset-y-[0] left-[8%] my-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                            size="txtSourceSansProRegular32"
                          >
                            100
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900_01 w-auto"
                      size="txtLatoBold16"
                    >
                      Filter by
                    </Text>
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-inter font-semibold text-left text-sm w-3/4 sm:w-full"
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
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col font-lato gap-[25px] items-start justify-start pb-2.5 rounded-[12px] shadow-bs2 w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1028px] w-full">
                    <Line className="bg-white-A700 h-px w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-start px-4 w-full">
                    <div className="flex flex-col gap-2 items-end justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                        <div className="bg-indigo-900 h-4 rounded w-4"></div>
                        <Text
                          className="text-blue_gray-900_01 text-center text-xs w-auto"
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
                                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
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
                                  </div>
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
                            className="ml-auto mr-[436px] mt-[-8.22px] text-blue_gray-900_01 text-center text-sm z-[1]"
                            size="txtPlusJakartaSansRomanSemiBold14"
                          >
                            Month
                          </Text>
                        </div>
                        <div className="flex flex-row font-lato gap-1 items-center justify-center w-auto">
                          <div className="bg-red-700 h-4 rounded w-4"></div>
                          <Text
                            className="text-blue_gray-900_01 text-center text-xs w-auto"
                            size="txtLatoRegular12"
                          >
                            Affiliate
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-lato items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                      size="txtLatoSemiBold22"
                    >
                      Recent Activities
                    </Text>
                    <SelectBox
                      className="sm:flex-1 font-bold leading-[normal] text-base text-blue_gray-900_01 text-left w-[8%] sm:w-full"
                      placeholderClassName="text-blue_gray-900_01"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame423"
                      options={expandOptionsList}
                      isSearchable={false}
                      placeholder="Expand"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col items-center justify-end py-[21px] shadow-bs3 w-full">
                    <div className="flex flex-col gap-[29px] items-center justify-start mt-3 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-[34%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoRegular16Bluegray90001"
                          >
                            Jenny pauls
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoRegular16Bluegray90001"
                          >
                            jennypauls@gmail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[173px] text-base text-blue_gray-900_01"
                          size="txtLatoBold16"
                        >
                          Submitted a Sell your Claim Request
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[73px] text-base text-blue_gray-900_01"
                          size="txtLatoBold16"
                        >
                          10 mins ago
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[47px] text-base text-blue-700 underline"
                          size="txtLatoBold16Blue700"
                        >
                          View
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-[31.5px] items-center pt-[34px] sm:px-5 px-[34px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-[34%] md:w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              Jenny pauls
                            </Text>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              jennypauls@gmail.com
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[173px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Submitted an Affiliate Request
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[113px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            10 mins ago
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[47px] text-base text-blue-700 underline"
                            size="txtLatoBold16Blue700"
                          >
                            View
                          </Text>
                        </div>
                        <Line className="self-center h-px bg-blue_gray-100_01 w-full" />
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-[34%] md:w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              Jenny pauls
                            </Text>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              jennypauls@gmail.com
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[173px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Submitted an Free Footage Request
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[76px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            10 mins ago
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[47px] text-base text-blue-700 underline"
                            size="txtLatoBold16Blue700"
                          >
                            View
                          </Text>
                        </div>
                        <Line className="self-center h-px bg-blue_gray-100_01 w-full" />
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-[34%] md:w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              Jenny pauls
                            </Text>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoRegular16Bluegray90001"
                            >
                              jennypauls@gmail.com
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[173px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Bought Footage ID: 2343786
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[121px] text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            10 mins ago
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[47px] text-base text-blue-700 underline"
                            size="txtLatoBold16Blue700"
                          >
                            View
                          </Text>
                        </div>
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
