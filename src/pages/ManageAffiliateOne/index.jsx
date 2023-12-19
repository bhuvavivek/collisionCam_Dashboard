import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const showDocumentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ManageAffiliateOnePage = () => {
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
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto pb-[73px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[262px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[72px] items-center justify-start md:px-5 w-full">
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
              <div className="flex md:flex-col flex-row gap-9 items-start justify-start ml-10 md:ml-[0] w-[78%] md:w-full">
                <SelectBox
                  className="font-bold leading-[normal] text-base text-blue_gray-900_01 text-left w-[17%] md:w-full"
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
                  options={showDocumentOptionsList}
                  isSearchable={false}
                  placeholder="Show document"
                />
                <div className="flex flex-col gap-[17px] items-end justify-start md:mt-0 mt-1.5 w-4/5 md:w-full">
                  <Text
                    className="text-base text-blue-700 underline"
                    size="txtLatoBold16Blue700"
                  >
                    Download Form
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col font-sourcesanspro gap-[37px] items-center justify-start p-4 shadow-bs7 w-full">
                    <Text
                      className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                      size="txtSourceSansProRegular32"
                    >
                      Affiliate Request
                    </Text>
                    <div className="flex flex-col font-lato gap-4 items-center justify-start mb-[57px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtLatoMedium22"
                          >
                            Personal Information
                          </Text>
                          <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] mt-3.5 w-[11%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Full Name:
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                Grace Villa
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-1 md:ml-[0] mt-[17px] w-[71%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[31%]">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-blue_gray-900_01"
                                  size="txtLatoMedium16"
                                >
                                  Email address:
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-900_01 text-sm"
                                  size="txtLatoRegular14"
                                >
                                  Gracevilla95@gmail.com
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start w-[24%]">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-blue_gray-900_01"
                                  size="txtLatoMedium16"
                                >
                                  Phone Number:
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-900_01 text-sm"
                                  size="txtLatoRegular14"
                                >
                                  +9167857432342
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="mt-10 text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtLatoMedium22"
                          >
                            Business information
                          </Text>
                          <div className="flex flex-col gap-1.5 items-start justify-start mt-4 w-[17%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Company Name:
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                Nil
                              </Text>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row md:gap-10 gap-[326px] grid sm:grid-cols-1 grid-cols-2 mt-[17px] w-[72%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-base text-blue_gray-900_01"
                                  size="txtLatoMedium16"
                                >
                                  Website:
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                                <Text
                                  className="text-blue_gray-900_01 text-sm"
                                  size="txtLatoRegular14"
                                >
                                  Nil
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-base text-blue_gray-900_01"
                                  size="txtLatoMedium16"
                                >
                                  Industry/Niche:
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                                <Text
                                  className="text-blue_gray-900_01 text-sm"
                                  size="txtLatoRegular14"
                                >
                                  Nil
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-col gap-2 items-start justify-start mt-[19px] w-[19%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Upload Document:
                              </Text>
                            </div>
                            <Text
                              className="text-blue-700 text-sm underline"
                              size="txtLatoRegular14Blue700"
                            >
                              Police_report.pdf
                            </Text>
                          </div>
                          <Text
                            className="mt-[41px] text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                            size="txtLatoMedium22"
                          >
                            Affiliate Experience
                          </Text>
                          <div className="flex flex-col gap-[13px] items-start justify-start mt-2.5 w-[98%] md:w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Experience:
                              </Text>
                            </div>
                            <Img
                              className="h-16"
                              src="images/img_group87.svg"
                              alt="groupEightySeven"
                            />
                          </div>
                          <div className="flex flex-col gap-3.5 items-start justify-start mt-10 w-full">
                            <Text
                              className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                              size="txtLatoMedium22"
                            >
                              Additional Information
                            </Text>
                            <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-[21%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-base text-blue_gray-900_01"
                                    size="txtLatoMedium16"
                                  >
                                    Promotion Methods:
                                  </Text>
                                </div>
                                <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                                  <Text
                                    className="h-[17px] text-blue_gray-900_01 text-sm"
                                    size="txtLatoRegular14"
                                  >
                                    Nil
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start mb-[3px] w-[34%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Additional Comment or Question:
                            </Text>
                          </div>
                          <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                            <Text
                              className="h-[17px] text-blue_gray-900_01 text-sm"
                              size="txtLatoRegular14"
                            >
                              Nil
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[119px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                          size="txtSourceSansProRegular32"
                        >
                          Affiliate ID:
                        </Text>
                        <Input
                          name="group161"
                          placeholder="Input text here"
                          className="!placeholder:text-blue_gray-900_87 !text-blue_gray-900_87 font-lato leading-[normal] p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                          size="txtSourceSansProRegular32"
                        >
                          Administration Use
                        </Text>
                        <div className="flex flex-row font-lato gap-2 items-center justify-start mt-[15px] w-[28%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoBold16"
                          >
                            Approval Status{" "}
                          </Text>
                          <SelectBox
                            className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-full"
                            placeholderClassName="!text-blue_gray-900_01"
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
                            placeholder="Approved"
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                        <div className="flex flex-row font-lato gap-2 items-center justify-start mt-7 w-[14%] md:w-full">
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
                          name="groupFortySeven"
                          placeholder="Add a more detailed description...."
                          className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-lato leading-[normal] p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[97%]"
                          size="md"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between pl-4 w-full">
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
                        Save
                      </Button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAffiliateOnePage;
