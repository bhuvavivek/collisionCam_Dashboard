import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, SelectBox, Text } from "components";

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

const ManageAffiliatePage = () => {
  const tableData = React.useRef([
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Police_report.pdf",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Police_report.pdf",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Police_report.pdf",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Police_report.pdf",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      frame432: "View ",
      uploadeddocument: "Medical_report.doc",
      frame426: "Approved",
      details: "View Details",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="border-b border-gray-400 border-l border-solid text-blue_gray-900_a2">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[172px] text-center text-sm"
            shape="square"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[172px]">Name</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="border-b border-gray-400 border-l border-solid text-blue_gray-900_a2">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[134px] text-center text-sm"
            shape="square"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[134px]">Phone Number</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("frame428", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[206px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="border-b border-gray-400 border-l border-solid text-blue_gray-900_a2">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Text
            className="border-gray-400 border-l border-solid border-y min-w-[206px] sm:px-5 px-[35px] py-[9px] text-blue_gray-900_a2 text-sm"
            size="txtLatoBold14"
          >
            Email Address
          </Text>
        ),
      }),
      tableColumnHelper.accessor("requestdate", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="border-b border-gray-400 border-l border-solid text-blue_gray-900_a2">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[110px] text-center text-sm"
            shape="square"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[110px]">Request Date</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("frame432", {
        cell: (info) => (
          <Button
            className="!text-blue-700_a2 border-b border-gray-400 border-l border-solid cursor-pointer min-w-[105px] text-center text-sm underline"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="!text-blue-700_a2 border-b border-gray-400 border-l border-solid">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Text
            className="border-gray-400 border-l border-solid border-y min-w-[105px] px-[3px] py-[9px] text-blue_gray-900_a2 text-sm"
            size="txtLatoBold14"
          >
            Affiliate Perfo...
          </Text>
        ),
      }),
      tableColumnHelper.accessor("uploadeddocument", {
        cell: (info) => (
          <Button
            className="!text-blue_gray-900_01 border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="!text-blue_gray-900_01 border-b border-gray-400 border-l border-solid">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[172px] text-center text-sm"
            shape="square"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[172px]">Uploaded Document</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("frame426", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-solid border-x cursor-pointer min-w-[109px] text-center text-sm"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="border-b border-gray-400 border-solid border-x text-blue_gray-900_a2">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Text
            className="border border-gray-400 border-solid min-w-[109px] px-1 py-[9px] text-blue_gray-900_a2 text-sm"
            size="txtLatoBold14"
          >
            Approval Status
          </Text>
        ),
      }),
      tableColumnHelper.accessor("details", {
        cell: (info) => (
          <Button
            className="!text-blue-700_a2 border-b border-gray-400 border-r border-solid cursor-pointer min-w-[90px] text-center text-sm underline"
            shape="square"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="!text-blue-700_a2 border-b border-gray-400 border-r border-solid">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border-gray-400 border-r border-solid border-y cursor-pointer font-bold min-w-[90px] rounded-tr text-center text-sm"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[90px]">Details</div>
          </Button>
        ),
      }),
    ];
  }, []);

  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[78px] items-center justify-start md:px-5 w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center"
                  shape="round"
                  color="indigo_900"
                  size="md"
                  variant="fill"
                >
                  Affiliate Performance
                </Button>
                <div className="flex flex-col items-center justify-start">
                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900_01 w-auto"
                      size="txtLatoBold16"
                    >
                      Filter by
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-[38%] sm:w-full"
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
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[45%] sm:w-full"
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
              </div>
              <div className="overflow-auto mt-20 w-auto">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"bg-white-A700"}
                  headerClass="bg-blue-50"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[669px] mt-[209px] w-2/5 md:w-full">
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

export default ManageAffiliatePage;
