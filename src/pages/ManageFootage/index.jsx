import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const ManageFootagePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_icoutlinedashboard.svg"
          alt="icoutlinedashbo"
        />
      ),
      label: <Text className="w-auto">Dashboard</Text>,
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      label: (
        <div className="h-[50px] relative w-full">
          <div className="flex flex-row gap-2 h-full items-center justify-start ml-2 my-auto w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_fluentvideo24regular.svg"
              alt="fluentvideo24re"
            />
            <Text className="w-auto">Manage Footage</Text>
          </div>
          <div className="absolute border border-blue-700 border-solid h-[50px] inset-[0] justify-center m-auto rounded-lg w-[88%]"></div>
        </div>
      ),
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
      label: <Text className="mb-[3px] mt-2 w-auto">Review Requests</Text>,
      href: "/reviewrequest",
      active: window.location.pathname === "/reviewrequest",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_arrowup.svg" alt="arrowup" />
      ),
      label: <Text className="mt-1 w-auto">Manage Affiliate</Text>,
      href: "/manageaffiliate",
      active: window.location.pathname === "/manageaffiliate",
    },
  ];
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar11 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[146px] items-center justify-start md:px-5 w-full">
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
            <div className="sm:h-[595px] h-[606px] md:h-[748px] relative w-[94%] md:w-full">
              <div className="absolute flex md:flex-col flex-row gap-[34px] h-max inset-[0] items-start justify-between m-auto w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[236px] justify-start md:mt-0 mt-2 w-[38%] md:w-full">
                  <Img
                    className="h-[331px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle39_331x407.png"
                    alt="rectangleThirtyNine"
                  />
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[71px]">
                    <Text
                      className="text-base text-indigo-900"
                      size="txtLatoBold16Indigo900"
                    >
                      Back
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-sourcesanspro gap-[22px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01 w-auto"
                        size="txtSourceSansProSemiBold32"
                      >
                        Name: Car crash surveillance
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-[18%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-center text-gray-900 text-lg"
                          size="txtLatoBold18Gray900"
                        >
                          ID:
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 text-lg"
                          size="txtLatoRegular18"
                        >
                          #1350678
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-sourcesanspro items-center justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                      size="txtSourceSansProSemiBold32"
                    >
                      Price: $25.00
                    </Text>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-[57%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[41%]">
                        <Text
                          className="text-center text-gray-900 text-lg"
                          size="txtLatoBold18Gray900"
                        >
                          Date:
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 text-lg"
                          size="txtLatoRegular18"
                        >
                          12/08/2023
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-[53%]">
                        <Text
                          className="mb-0.5 text-center text-gray-900 text-lg"
                          size="txtLatoBold18Gray900"
                        >
                          Time:
                        </Text>
                        <Text
                          className="mt-0.5 text-blue_gray-900_01 text-lg"
                          size="txtLatoRegular18"
                        >
                          10:00 pm GMT+1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-center text-gray-900 text-lg"
                        size="txtLatoBold18Gray900"
                      >
                        Description:
                      </Text>
                      <Text
                        className="leading-[26.00px] text-blue_gray-900_01 text-lg w-full"
                        size="txtLatoRegular18"
                      >
                        Lorem ipsum dolor sit amet consectetur. Pretium pretium
                        nisl pulvinar in in sed sit. Viverra ut morbi feugiat
                        dolor aliquam diam. Consectetur elementum eget neque
                        urna sed viverra. Turpis risus in non eget aliquam
                        tincidunt pharetra.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-row gap-4 items-center justify-between right-[0] w-[34%]">
                <div className="flex flex-col items-center justify-start sm:w-full">
                  <Input
                    name="group121"
                    placeholder="Edit"
                    className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-6 my-auto"
                        src="images/img_edit_white_a700_24x24.svg"
                        alt="edit"
                      />
                    }
                    color="indigo_900"
                  ></Input>
                </div>
                <Input
                  name="groupTwo"
                  placeholder="Delete"
                  className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="flex"
                  prefix={
                    <Img
                      className="h-6 mr-4 my-auto"
                      src="images/img_materialsymbolslightdeleteoutline.svg"
                      alt="material-symbols-light:delete-outline"
                    />
                  }
                  color="red_700"
                ></Input>
              </div>
              <Img
                className="absolute bottom-[2%] h-6 left-[3%] w-6"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageFootagePage;
