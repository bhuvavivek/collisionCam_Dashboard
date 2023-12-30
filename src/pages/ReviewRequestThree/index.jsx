import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import SellClaimTable from "components/sellclaimtable";
import { useEffect, useState } from "react";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
  { label: "All", value: "" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "value" },
  { label: "Pending", value: "pending" },
];
const buttonOneOptionsList = [
  { label: "Newest-Oldest", value: "desc" },
  { label: "Oldest-Newest", value: "asc" },
];
const ReviewRequestOptions = [
  { label: "Request for free", value: "new" },
  { label: "Sell Claim", value: "old" },
];

const ManageAffiliatePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sort, setSort] = useState("desc");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("new");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/user/get-sell-claim?page=${page}&limit=10&sortBy=createdAt&order=${sort}&status=${filter}&search=${
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
  }, [loading, error, sort, page, filter, name]); // Empty dependency array means the effect runs once when the component mounts

  const tableColumns = [
    "Name", // Replace with your actual column names
    "Phone Number",
    "Email Address",
    "Request Date",
    "Footage ID",
    "Upload Document",
    "Approval Status",
    "Details",
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
    item.date ?? "",
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
          <div className="flex flex-1 flex-col md:gap-10 gap-12 items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
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
                ></Input>{" "}
              </div>

              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10  items-center justify-between w-full">
                <div className="flex w-[30%] ml-[3%]  items-center gap-3">
                  <Text className="font-bold font-lato text-base text-[#303030]">
                    Sort by
                  </Text>
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
                    options={ReviewRequestOptions}
                    isSearchable={false}
                    value={category}
                    onChange={(value) => {
                      setCategory(value);
                    }}
                    placeholder="Sell Claim"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>

                <div className="flex sm:flex-col gap-3 items-center justify-center mr-[1.5%]  w-[40%] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900_01 w-[15%]"
                    size="txtLatoBold16"
                  >
                    Filter by
                  </Text>
                  <SelectBox
                    className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-[33%] sm:w-full"
                    placeholderClassName="!text-blue_gray-900_01"
                    value={filter}
                    onChange={(status) => {
                      setFilter(status);
                    }}
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
                    placeholder={
                      filter === ""
                        ? "All"
                        : filter === "approved"
                        ? "Approved"
                        : filter === "reject"
                        ? "Rejected"
                        : filter === "pending"
                        ? "Pending"
                        : "All"
                    }
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
                    value={sort}
                    onChange={(value) => {
                      setSort(value);
                    }}
                    options={buttonOneOptionsList}
                    isSearchable={false}
                    placeholder={
                      sort === "desc" ? "Newest-Oldest" : "Oldest-Newest"
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
              </div>
              <div className="overflow-auto mt-12 w-[95%] mx-auto">
                <SellClaimTable
                  columns={tableColumns}
                  data={formattedTableData}
                ></SellClaimTable>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] my-14  w-[43%] md:w-full">
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
      </div>
    </>
  );
};

export default ManageAffiliatePage;
