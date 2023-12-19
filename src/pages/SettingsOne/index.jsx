import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Switch, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const SettingsOnePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_icoutlinedashboard.svg"
          alt="icoutlinedashbo"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_fluentvideo24regular.svg"
          alt="fluentvideo24re"
        />
      ),
      label: "Manage Footage",
      href: "/managefootageone",
      active: window.location.pathname === "/managefootageone",
    },
    {
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_edit_white_a700.svg"
          alt="edit"
        />
      ),
      label: "Review Requests",
      href: "/reviewrequest",
      active: window.location.pathname === "/reviewrequest",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_arrowup.svg" alt="arrowup" />
      ),
      label: "Manage Affiliate",
      href: "/manageaffiliate",
      active: window.location.pathname === "/manageaffiliate",
    },
  ];
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
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
                    className="text-base text-blue-700 w-auto"
                    size="txtLatoBold16Blue700"
                  >
                    General settings
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900_01 w-auto"
                    size="txtLatoBold16"
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
                <Line className="bg-blue-700 h-0.5 mb-auto mt-[-1px] w-[11%] z-[1]" />
              </div>
              <div className="flex flex-col font-lato gap-[9px] items-start justify-start mt-[45px]">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Company Information
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your company information
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[13px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Phone Number
                </Text>
                <Input
                  name="group161"
                  placeholder="(123) 456-7890"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                ></Input>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[19px] w-full" />
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Email Address
                </Text>
                <Input
                  name="email"
                  placeholder="info@collisioncam.com"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  type="email"
                ></Input>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[23px] w-full" />
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-6 w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Address
                </Text>
                <Input
                  name="timeZone"
                  placeholder="City of St. George, East 200 North, Saint George, UT, USA"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                ></Input>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[26px] w-full" />
            </div>
            <div className="flex flex-col font-lato items-start justify-start mt-[49px] w-[94%] md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Notification Preference
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Turn on/off the notification{" "}
                </Text>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[22px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Sell your claim request
                </Text>
                <Switch
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px md:ml-[0] ml-[9px] mt-[30px] w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Affiliate request
                </Text>
                <Switch
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px ml-1.5 md:ml-[0] mt-6 w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Free footage request
                </Text>
                <Switch
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
