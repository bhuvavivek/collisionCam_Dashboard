import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "../../assets/images";

const showDocumentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReviewRequestTwoPage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto  w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] flex h-screen md:hidden  bg-indigo-900 justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[43px] items-center justify-start md:px-5 w-full">
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
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-[84%] md:w-full">
                <SelectBox
                  className="font-bold leading-[normal] mb-[3px] text-base text-blue_gray-900_01 text-left w-[17%] sm:w-full"
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
                <Text
                  className="mt-[7px] text-base text-blue-700 underline"
                  size="txtLatoBold16Blue700"
                >
                  Download Form
                </Text>
              </div>
              <div className="flex flex-col font-sourcesanspro items-center justify-start md:ml-[0] ml-[183px] mt-3 w-[67%] md:w-full">
                <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col gap-[37px] items-center justify-start p-4 shadow-bs7 w-full">
                  <Text
                    className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                    size="txtSourceSansProRegular32"
                  >
                    Sell your claim
                  </Text>
                  <div className="flex flex-col font-lato items-center justify-start mb-6 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                        size="txtLatoMedium22"
                      >
                        Personal Information
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] mt-3.5 w-[11%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Email address:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
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
                        Claim Details
                      </Text>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[271px] grid sm:grid-cols-1 grid-cols-2 mt-3.5 w-[77%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Date of Incident:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-900_01 text-sm"
                              size="txtLatoRegular14"
                            >
                              Grace Villa
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Location of Incident:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-900_01 text-sm"
                              size="txtLatoRegular14"
                            >
                              Grace Villa
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col gap-[5px] items-start justify-start mt-[19px] w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoMedium16"
                          >
                            Description of Incident:
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="leading-[26.00px] text-blue_gray-900_01 text-sm w-full"
                            size="txtLatoRegular14"
                          >
                            Lorem ipsum dolor sit amet consectetur. Pretium
                            pretium nisl pulvinar in in sed sit. Viverra ut
                            morbi feugiat dolor aliquam diam. Consectetur
                            elementum eget neque urna sed viverra. Turpis risus
                            in non eget aliquam tincidunt pharetra.
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start mt-4 w-[26%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoMedium16"
                          >
                            Claim Reference Number:
                          </Text>
                        </div>
                        <div className="flex flex-col items-start  justify-start w-[18px] md:w-full">
                          <Text
                            className="text-blue_gray-900_01 text-sm"
                            size="txtLatoRegular14"
                          >
                            Nil
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mt-[42px] text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                        size="txtLatoMedium22"
                      >
                        Motives
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-3.5 w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Reasons for Selling:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="leading-[26.00px] text-blue_gray-900_01 text-sm w-full"
                              size="txtLatoRegular14"
                            >
                              Lorem ipsum dolor sit amet consectetur. Pretium
                              pretium nisl pulvinar in in sed sit. Viverra ut
                              morbi feugiat dolor aliquam diam. Consectetur
                              elementum eget neque urna sed viverra. Turpis
                              risus in non eget aliquam tincidunt pharetra.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[17px]">
                        <Text
                          className="text-base text-blue_gray-900_01"
                          size="txtLatoMedium16"
                        >
                          Upload Document:
                        </Text>
                      </div>
                      <Text
                        className="mt-2 text-blue-700 text-sm underline"
                        size="txtLatoRegular14Blue700"
                      >
                        Police_report.pdf
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-sourcesanspro gap-[15px] items-start justify-start mt-[63px] w-full">
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
                    name="groupFortySeven"
                    placeholder="Add a more detailed description...."
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[97%]"
                    size="md"
                  ></Input>
                </div>
              </div>
              <div className="w-full relative mb-10 mt-7 mr-10 flex item-center justify-between">
                <div className="flex gap-4 items-center justify-center cursor-pointer  w-[12%]  pl-[5%] ">
                  {" "}
                  <Img
                    className=" h-6  w-6"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Text className="text-[#29207E] font-lato font-bold text-xl">
                    {" "}
                    Back{" "}
                  </Text>
                </div>

                <div className="  relative flex flex-row gap-4 items-center justify-end  w-[38%]">
                  <div className="cursor-pointer w-[50%] p-2">
                    {" "}
                    <Button
                      className="font-bold   flex items-center pl-4 gap-3 rounded-lg   leading-[normal] p-3 bg-[#29207E] text-white-A700 text-base  w-full  placeholder:"
                      color="red_700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 5.99994L18 8.99994M13 19.9999H21M5 15.9999L4 19.9999L8 18.9999L19.586 7.41394C19.9609 7.03889 20.1716 6.53027 20.1716 5.99994C20.1716 5.46961 19.9609 4.961 19.586 4.58594L19.414 4.41394C19.0389 4.039 18.5303 3.82837 18 3.82837C17.4697 3.82837 16.9611 4.039 16.586 4.41394L5 15.9999Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <Text className=""> Edit </Text>
                    </Button>
                  </div>

                  <div className="cursor-pointer w-[50%] p-2">
                    {" "}
                    <Button
                      className="font-bold  flex rounded-lg pl-4 gap-3 items-center leading-[normal] p-3 bg-red-700 text-white-A700 text-base text-left w-full  placeholder:"
                      color="red_700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                          fill="white"
                        />
                      </svg>
                      Delete
                    </Button>
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

export default ReviewRequestTwoPage;
