import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import ProductTable from "components/producttable";
import { Link } from "react-router-dom";
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

const ManageAffiliatePage = () => {
  const tableData = [
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
    [
      "Grace Villa",
      "+9167857432342",
      "Gracevilla95@gmail.com",
      "12/05/2023",
      "Business_location.pdf",
      "Approved",
      "View Details",
    ],
  ];

  const tableColumns = [
    "Name",
    "Phone Number",
    "Email Address",
    "Request Date",
    "Uploaded Document",
    "Approval Status",
    "Details",
  ];

  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-12 items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
                {" "}
                <Input
                  name="frame348"
                  placeholder="Search "
                  value={frame348value}
                  onChange={(e) => setFrame348value(e)}
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-start w-full"
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
                ></Input>{" "}
              </div>

              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Link to="/manageaffiliateone">
                  {" "}
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    Affiliate Performance
                  </Button>
                </Link>

                <div className="flex sm:flex-col gap-3 items-center justify-center w-[40%] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900_01 w-[15%]"
                    size="txtLatoBold16"
                  >
                    Filter by
                  </Text>
                  <SelectBox
                    className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-[33%] sm:w-full"
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
                  <SelectBox
                    className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[42%] sm:w-full"
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
                    placeholder="Newest-Oldest"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
              </div>
              <div className="overflow-auto mt-12 w-[85%] mx-auto">
                <ProductTable
                  columns={tableColumns}
                  data={tableData}
                ></ProductTable>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] my-14  w-[43%] md:w-full">
                <div className="flex sm:flex-col gap-5 flex-row sm:gap-14 items-center justify-end w-full">
                  <Button
                    className="cursor-pointer ml-[10%] flex items-center justify-center min-w-[150px]"
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
                  <div className="flex flex-row items-center gap-5 justify-end w-full">
                    <Text className="text-base text-center mr-3 leading-6 font-lato  font-semibold text-[#212121] ">
                      page
                    </Text>
                    <Button
                      className="!text-[#212121] border font-semibold border-gray-500 border-solid cursor-auto min-w-[94px] text-base text-center"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Text className="text-base text-center font-semibold text-[#212121] -ml-3">
                      <pre>of 300</pre>
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

export default ManageAffiliatePage;
