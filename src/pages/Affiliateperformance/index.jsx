import React from "react";

import { Button, Img, Input, Text } from "components";
import { useEffect, useState } from "react";

import Sidebar1 from "components/Sidebar1";
import AffiliateTable from "components/affiliatetable";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/user/get-affliate?page=${page}&limit=10&sortBy=createdAt&order=&status=&search=${
            name ? name : ""
          }`
        );

        setTableData(response.data.result);
        setTotalPages(Math.ceil(response.data.totalCount / 10));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading, error, page, name]);

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const formattedTableData = tableData.map((item) => [
    item.full_name ?? "",
    item.phone ?? "",
    item.email ?? "",
    "something",
    "empty",
    item.document ?? "",
    item.status ?? "",
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
                <Input
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
                ></Input>
              </div>
            </div>
            <div className="overflow-auto mt-12 w-[92%] mx-auto">
              <AffiliateTable
                columns={tableColumns}
                data={tableData}
              ></AffiliateTable>
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
    </>
  );
};

export default AffiliateperformancePage;
