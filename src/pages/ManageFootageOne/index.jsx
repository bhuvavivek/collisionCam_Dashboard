import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import Sidebar1 from "components/Sidebar1";
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
const buttonTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ManageFootageOnePage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full h-[100vh]">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-9 justify-start md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-9 items-center justify-start w-full">
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
              <div className="flex flex-col md:gap-10 gap-[30px] items-center justify-start w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    Upload New
                  </Button>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[11px] items-center justify-start w-3/5 md:w-full">
                    <Text className=" filter-text   text-base text-blue_gray-900_01 w-3/12 text-end font-bold">
                      Filter by
                    </Text>
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[28%] md:w-full"
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
                      placeholder="Select state"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[28%] md:w-full"
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
                      placeholder="Select City"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[32%] md:w-full"
                      placeholderClassName="text-blue_gray-900_a2"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="button_Two"
                      options={buttonTwoOptionsList}
                      isSearchable={false}
                      placeholder="Newest-Oldest"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                </div>
                <List
                  className="flex flex-col gap-6 items-center w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle39.png"
                        alt="rectangleThirtyNine"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle35.png"
                        alt="rectangleThirtyFive"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle36.png"
                        alt="rectangleThirtySix"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle37.png"
                        alt="rectangleThirtySeven"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle38.png"
                        alt="rectangleThirtyEight"
                      />
                    </div>
                    <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="leading-[24.00px] text-base text-gray-900"
                          size="txtLatoMedium16Gray900"
                        >
                          <span className="text-gray-900 font-lato text-left font-normal">
                            <>
                              Car crash surveillance
                              <br />
                            </>
                          </span>
                          <span className="text-blue-700 font-lato text-left font-medium">
                            $25.00
                          </span>
                          <span className="text-gray-900 font-lato text-left font-medium">
                            <>
                              {" "}
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-lato text-left text-sm font-medium">
                            12/08/23
                          </span>
                          <span className="text-gray-900 font-lato text-left font-medium">
                            <>
                              <br />
                            </>
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle39.png"
                        alt="rectangleThirtyNine"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle35.png"
                        alt="rectangleThirtyFive"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle36.png"
                        alt="rectangleThirtySix"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle37.png"
                        alt="rectangleThirtySeven"
                      />
                      <Img
                        className="flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle38.png"
                        alt="rectangleThirtyEight"
                      />
                    </div>
                    <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="leading-[24.00px] text-base text-gray-900"
                          size="txtLatoMedium16Gray900"
                        >
                          <span className="text-gray-900 font-lato text-left font-normal">
                            <>
                              Car crash surveillance
                              <br />
                            </>
                          </span>
                          <span className="text-blue-700 font-lato text-left font-medium">
                            $25.00
                          </span>
                          <span className="text-gray-900 font-lato text-left font-medium">
                            <>
                              {" "}
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-lato text-left text-sm font-medium">
                            12/08/23
                          </span>
                          <span className="text-gray-900 font-lato text-left font-medium">
                            <>
                              <br />
                            </>
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900 w-full"
                        size="txtLatoMedium16Gray900"
                      >
                        <span className="text-gray-900 font-lato text-left font-normal">
                          <>
                            Car crash surveillance
                            <br />
                          </>
                        </span>
                        <span className="text-blue-700 font-lato text-left font-medium">
                          $25.00
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            {" "}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-lato text-left text-sm font-medium">
                          12/08/23
                        </span>
                        <span className="text-gray-900 font-lato text-left font-medium">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[709px] w-[37%] md:w-full">
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
                  <div className="font-bold text-base text-left">Next page</div>
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
    </>
  );
};

export default ManageFootageOnePage;
