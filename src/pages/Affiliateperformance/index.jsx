import React, { useEffect } from "react";

import { Button, Img, Input, Text } from "components";
import { useState } from "react";

import Sidebar1 from "components/Sidebar1";
import AffiliateTable from "components/affiliatetable";
import Loading from "components/loading";
import Datepicker from "react-tailwindcss-datepicker";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";

const AffiliateperformancePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `/user/get-affliate??page=${page}&limit=10&sortBy=createdAt&order=desc&status=&search=${name ? name : ""
          }`;
        if (value1["startDate"] && value2["endDate"]) {
          url += `&startDate=${value1["startDate"] ? value1["startDate"] : " "
            }&endDate=${value2["endDate"] ? value2["endDate"] : ""}`;
        }
        const response = await api.get(url);

        setTableData(response.data.result);
        setTotalPages(Math.ceil(response.data.totalCount / 10));
        // Use a callback function to update loading state without causing re-renders
        setLoading((prevLoading) => {
          if (prevLoading) {
            return false;
          }
          return prevLoading;
        });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, name, value1, value2]);

  const tableColumns = [
    "Name",
    "Affilliate ID",
    "Total Sales",
    "Commission",
    "Number of Sales",
    "Paid Earning",
    "Unpaid Earning",
  ];

  if (loading) {
    <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const formattedTableData = tableData.map((item) => [
    item?.full_name ?? "",
    item?.affliate_id ?? "",
    item?.totalsales ?? "",
    item?.commissionRate ?? "",
    item?.numberOfSale ?? "",
    item?.paidEarning ?? "",
    item?.unpaidEarning ?? "",
    item?.status ?? "",
    item?._id ?? "",
  ]);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
                {" "}
                <Input
                  name="frame348"
                  placeholder="Search "
                  value={name}
                  handleChange={(e) => setName(e.target.value)}
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
                ></Input>
              </div>
              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            <Text
              className="mt-7 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
              size="txtSourceSansProRegular32"
            >
              Affiliate Performance
            </Text>
            <div className="flex flex-col font-lato items-center  ml-[42%] justify-start mt-[4%] w-1/2 md:w-full">
              <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-full sm:w-full">
                <Text
                  className="text-base text-blue_gray-900_01 w-auto"
                  size="txtLatoBold16"
                >
                  Filter by Date range
                </Text>

                <div className="customDatePicker w-[37%] border-blue_gray-100 flex   justify-center items-center">
                  <Datepicker
                    useRange={false}
                    primaryColor={"purple"}
                    placeholder="From"
                    asSingle={true}
                    value={value1}
                    onChange={setValue1}
                    classNames={Datepicker}
                  />
                </div>
                <div className="customDatePicker  border-blue_gray-100 flex  w-[37%] justify-center items-center">
                  <Datepicker
                    useRange={false}
                    primaryColor={"purple"}
                    asSingle={true}
                    value={value2}
                    placeholder="To"
                    onChange={setValue2}
                    classNames={Datepicker}
                  />
                </div>

                {/* <Input
                  name="button"
                  placeholder="From- dd/mm/yyyy"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-semibold p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-500_7f border-solid flex w-[37%] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-8 my-auto"
                      src="images/img_simplelineiconscalender.svg"
                      alt="simple-line-icons:calender"
                    />
                  }
                  size="sm"
                ></Input>
                <Input
                  name="button_One"
                  placeholder="To- dd/mm/yyyy"
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-semibold p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-500_7f border-solid flex w-[37%] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_simplelineiconscalender.svg"
                      alt="simple-line-icons:calender"
                    />
                  }
                  size="sm"
                ></Input> */}
              </div>
            </div>
            <div className="overflow-auto mt-12 w-[92%] mx-auto">
              <AffiliateTable
                columns={tableColumns}
                data={formattedTableData}
              ></AffiliateTable>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] my-14 mr-12 w-[43%] md:w-full">
              <div className="flex sm:flex-col gap-5 flex-row sm:gap-14 items-center justify-end w-full">
                <Button
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                  className="bg-white-A700 border-2 border-indigo-900 border-solid  flex flex-col items-center justify-start p-3 rounded-[16px] w-[30%] sm:w-full"
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer ml-[10%] flex items-center justify-center min-w-[150px]"
                  onClick={() => {
                    if (page < totalPages) {
                      setPage(page + 1);
                    }
                  }}
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
                    {page}
                  </Button>
                  <Text className="text-base text-center font-semibold text-[#212121] -ml-3">
                    <pre>of {totalPages}</pre>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateperformancePage;
