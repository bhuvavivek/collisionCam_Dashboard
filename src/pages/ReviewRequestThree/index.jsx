import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const hideDocumentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReviewRequestThreePage = () => {
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
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_fluentvideo24regular.svg"
          alt="fluentvideo24re"
        />
      ),
      label: <Text className="mb-[3px] mt-2 w-auto">Manage Footage</Text>,
      href: "/managefootageone",
      active: window.location.pathname === "/managefootageone",
    },
    {
      label: (
        <div className="h-[50px] relative w-full">
          <div className="flex flex-row gap-2 h-full items-center justify-start ml-2 my-auto w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_edit_white_a700.svg"
              alt="edit"
            />
            <Text className="w-auto">Review Requests</Text>
          </div>
          <div className="absolute border border-blue-700 border-solid h-[50px] inset-[0] justify-center m-auto rounded-lg w-[88%]"></div>
        </div>
      ),
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
          <Sidebar2 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[159px] items-center justify-start md:px-5 w-full">
            <div className="flex flex-col gap-[43px] justify-start w-full">
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
              <div className="flex flex-col items-center justify-start ml-10 md:ml-[0] w-[13%] md:w-full">
                <SelectBox
                  className="font-bold leading-[normal] text-base text-blue_gray-900_01 text-left w-full"
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
                  options={hideDocumentOptionsList}
                  isSearchable={false}
                  placeholder="Hide document"
                />
              </div>
            </div>
            <div className="flex flex-col font-sourcesanspro md:gap-10 gap-40 items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                  size="txtSourceSansProRegular32"
                >
                  Administration Use
                </Text>
                <div className="flex flex-col font-lato items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[28%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-900_01"
                      size="txtLatoBold16"
                    >
                      Approval Status{" "}
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-900_87 border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-full"
                      placeholderClassName="!text-blue_gray-900_87"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="language_One"
                      options={languageOneOptionsList}
                      isSearchable={false}
                      placeholder="Select Status "
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-7 w-[14%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_solarhamburgermenubroken.svg"
                      alt="solarhamburgerm"
                    />
                    <Text
                      className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                      size="txtLatoMedium22"
                    >
                      Description
                    </Text>
                  </div>
                  <Input
                    name="moredetaileddescription"
                    placeholder="Add a more detailed description...."
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[97%]"
                    size="md"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between pl-4 w-full">
                <div className="flex sm:flex-1 flex-row gap-4 items-start justify-between w-[7%] sm:w-full">
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
                <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[35%] sm:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center"
                      shape="round"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      Edit
                    </Button>
                  </div>
                  <Input
                    name="delete"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewRequestThreePage;
