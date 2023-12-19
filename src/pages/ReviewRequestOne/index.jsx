import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const ReviewRequestOnePage = () => {
  const table1Data = React.useRef([
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Police_report.pdf",
      columnapprovalstatus: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Medical_report.doc",
      columnapprovalstatus: "Pending",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Medical_report.doc",
      columnapprovalstatus: "Pending",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Police_report.pdf",
      columnapprovalstatus: "Rejected",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Police_report.pdf",
      columnapprovalstatus: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Police_report.pdf",
      columnapprovalstatus: "Approved",
      details: "View Details",
    },
    {
      name: "Grace Villa",
      phonenumber: "+9167857432342",
      frame428: "Gracevilla95@gmail.com",
      requestdate: "12/05/2023",
      footageid: "#135067890",
      columnuploadeddocumenone: "Medical_report.doc",
      columnapprovalstatus: "Pending",
      details: "View Details",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("name", {
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
      table1ColumnHelper.accessor("phonenumber", {
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
      table1ColumnHelper.accessor("frame428", {
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
      table1ColumnHelper.accessor("requestdate", {
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
      table1ColumnHelper.accessor("footageid", {
        cell: (info) => (
          <Button
            className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[105px] text-center text-sm"
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
            className="border-gray-400 border-l border-solid border-y cursor-pointer font-bold min-w-[105px] text-center text-sm"
            shape="square"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <div className="min-w-[105px]">Footage ID</div>
          </Button>
        ),
      }),
      table1ColumnHelper.accessor("columnuploadeddocumenone", {
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
          <div className="border-gray-400 border-l border-solid border-y flex flex-col items-center justify-end min-w-[172px] p-2">
            <Text
              className="text-blue_gray-900_a2 text-sm"
              size="txtLatoBold14"
            >
              Uploaded Document
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("columnapprovalstatus", {
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
          <div className="border border-gray-400 border-solid flex flex-col items-center justify-start min-w-[109px] p-1">
            <Text
              className="my-[5px] text-blue_gray-900_a2 text-sm"
              size="txtLatoBold14"
            >
              Approval Status
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("details", {
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
            <div className="md:h-[1915px] h-[520px] sm:h-[706px] mt-[78px] relative w-[95%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900_01 w-auto"
                        size="txtLatoBold16"
                      >
                        Sort by
                      </Text>
                      <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-row font-inter items-center justify-between p-2 rounded-lg shadow-bs w-[77%]">
                        <Text
                          className="ml-3.5 text-blue_gray-900_a2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          Request for free
                        </Text>
                        <div className="flex flex-col h-6 items-center justify-start my-0.5 p-[7px] w-6">
                          <Img
                            className="h-[5px] my-0.5"
                            src="images/img_vector.svg"
                            alt="vector"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[11px] items-center justify-start w-auto sm:w-full">
                      <Text
                        className="text-base text-blue_gray-900_01 w-auto"
                        size="txtLatoBold16"
                      >
                        Filter by
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[11px] grid grid-cols-2 w-[86%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-row items-center justify-between p-2.5 rounded-lg shadow-bs w-full">
                          <Text
                            className="h-[17px] ml-[11px] text-blue_gray-900_a2 text-sm"
                            size="txtLatoSemiBold14"
                          >
                            All{" "}
                          </Text>
                          <div className="flex flex-col h-6 items-center justify-start mr-0.5 p-[7px] w-6">
                            <Img
                              className="h-[5px] my-0.5"
                              src="images/img_vector.svg"
                              alt="vector"
                            />
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-row items-center justify-between p-2 rounded-lg shadow-bs w-full">
                          <Text
                            className="ml-4 text-blue_gray-900_a2 text-sm"
                            size="txtLatoSemiBold14"
                          >
                            Newest-Oldest
                          </Text>
                          <div className="flex flex-col h-6 items-center justify-start my-0.5 p-[7px] w-6">
                            <Img
                              className="h-[5px] my-0.5"
                              src="images/img_vector.svg"
                              alt="vector"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="overflow-auto w-full">
                      <ReactTable
                        columns={table1Columns}
                        data={table1Data.current}
                        rowClass={"bg-white-A700"}
                        headerClass="bg-blue-50"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Grace Villa
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        +9167857432342
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[206px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Gracevilla95@gmail.com
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        12/05/2023
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[105px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        #135067890
                      </Button>
                      <div className="bg-white-A700 border-b border-gray-400 border-l border-solid flex flex-col items-center justify-end p-2">
                        <Text
                          className="mt-0.5 text-blue_gray-900_01 text-sm"
                          size="txtLatoRegular14"
                        >
                          Police_report.pdf
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-b border-gray-400 border-solid border-x flex flex-col items-center justify-end p-2">
                        <Text
                          className="mt-0.5 text-blue_gray-900_a2 text-sm"
                          size="txtLatoRegular14Bluegray900a2"
                        >
                          Rejected
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-col items-center justify-start p-1.5">
                        <Text
                          className="mt-[5px] text-blue-700_a2 text-sm underline"
                          size="txtLatoRegular14Blue700a2"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] rounded-bl text-center text-sm"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Grace Villa
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        +9167857432342
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[206px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Gracevilla95@gmail.com
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        12/05/2023
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[105px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        #135067890
                      </Button>
                      <div className="bg-white-A700 border-b border-gray-400 border-l border-solid flex flex-col items-center justify-end p-2">
                        <Text
                          className="mt-0.5 text-blue_gray-900_01 text-sm"
                          size="txtLatoRegular14"
                        >
                          Police_report.pdf
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-b border-gray-400 border-solid border-x flex flex-col items-center justify-end p-2">
                        <Text
                          className="mt-0.5 text-blue_gray-900_a2 text-sm"
                          size="txtLatoRegular14Bluegray900a2"
                        >
                          Approved
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-col items-center justify-start p-1.5 rounded-br">
                        <Text
                          className="mt-[5px] text-blue-700_a2 text-sm underline"
                          size="txtLatoRegular14Blue700a2"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[172px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Grace Villa
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[134px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        +9167857432342
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[206px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Gracevilla95@gmail.com
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[110px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        12/05/2023
                      </Button>
                      <Button
                        className="border-b border-gray-400 border-l border-solid cursor-pointer min-w-[105px] text-center text-sm"
                        shape="square"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        #135067890
                      </Button>
                      <div className="bg-white-A700 border-b border-gray-400 border-l border-solid flex flex-col items-center justify-end p-2">
                        <Text
                          className="mt-0.5 text-blue_gray-900_01 text-sm"
                          size="txtLatoRegular14"
                        >
                          Medical_report.doc
                        </Text>
                      </div>
                      <Img
                        className="h-9 w-[109px]"
                        src="images/img_frame430.svg"
                        alt="frame430_Two"
                      />
                      <div className="bg-white-A700 border-b border-gray-400 border-r border-solid flex flex-col items-center justify-start p-1.5">
                        <Text
                          className="mt-[5px] text-blue-700_a2 text-sm underline"
                          size="txtLatoRegular14Blue700a2"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[1%] top-[6%] w-[93%]">
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col gap-2 justify-start mb-[71px] pb-[7px] shadow-bs1 w-[19%] md:w-full">
                  <div className="bg-blue-50_01 flex flex-col items-start justify-end p-1.5 w-full">
                    <Text
                      className="md:ml-[0] ml-[11px] mt-[3px] text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Request for free
                    </Text>
                  </div>
                  <Text
                    className="ml-4 md:ml-[0] text-blue_gray-900_01 text-sm"
                    size="txtLatoRegular14"
                  >
                    Sell Claim
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col gap-[9px] justify-start md:ml-[0] ml-[455px] pb-[11px] shadow-bs1 w-[17%] md:w-full">
                  <div className="bg-blue-50_01 flex flex-col items-start justify-end p-[7px] w-full">
                    <Text
                      className="ml-2 md:ml-[0] text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      All
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start ml-4 md:ml-[0]">
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Approved
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Rejected
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Pending
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-col gap-2 justify-start mb-[30px] md:ml-[0] ml-[27px] pb-3.5 shadow-bs1 w-[19%] md:w-full">
                  <div className="bg-blue-50_01 flex flex-col items-start justify-end p-[7px] w-full">
                    <Text
                      className="ml-2.5 md:ml-[0] text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Newest-Oldest
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start ml-4 md:ml-[0]">
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Oldest-Newest
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtLatoRegular14"
                    >
                      Date Range
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-end mt-[209px] w-[45%] md:w-full">
              <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex flex-col items-center justify-start p-3 rounded-lg w-[13%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-14 items-center justify-between w-[83%] sm:w-full">
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
                      2
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

export default ReviewRequestOnePage;
