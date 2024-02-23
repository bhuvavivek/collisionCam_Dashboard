import React from "react";

import { Button, Img, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import Loading from "components/loading";
import Navbar from "components/navbar/Navbar";
import SellClaimTable from "components/sellclaimtable";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatDateTime } from "utils";
import { api } from "utils/api";

const buttonOptionsList = [
  { label: "All", value: "" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "reject" },
  { label: "Pending", value: "pending" },
];
const buttonOneOptionsList = [
  { label: "Newest-Oldest", value: "desc" },
  { label: "Oldest-Newest", value: "asc" },
];
const ReviewRequestOptions = [{ label: "Partnered Firms", value: "free" }];

const ManageAffiliatePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sort, setSort] = useState("desc");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  // const [category, setCategory] = useState(location?.state || "old");
  const [type, setType] = useState("free");

  const fetchrequestData = async () => {
    try {
      const response = await api.get(
        `/user/get-partnerd-firms?page=${page}&limit=10&sortBy=createdAt&order=${sort}&status=${filter}&search=${name ? name : ""
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

  useEffect(() => {
    fetchrequestData();

    // category === "old" ? fetchData() : fetchrequestData();
  }, [sort, page, filter, name]); // Empty dependency array means the effect runs once when the component mounts

  const partneredColumns = [
    "Name", // Replace with your actual column names
    "Phone Number",
    "Email Address",
    "Request Date",
    "Upload Document",
    "Approval Status",
    "Details",
  ];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const partnerFirmsTableData = tableData.map((item) => {
    // Check if the documents field exists and is not empty
    if (item?.documents && item?.documents?.length > 0) {
      return [
        item?.full_name ?? "",
        item?.phone ?? "",
        item?.email ?? "",
        formatDateTime(item.createdAt) ?? "",
        item?.documents[0].url ?? "", // Accessing the URL of the first item in the documents array
        item?.status === "reject" ? "Rejected" : item?.status ?? "",
        item?._id ?? "",
      ];
    } else {
      // If documents field is missing or empty, return empty values for the document URL
      return [
        item?.full_name ?? "",
        item?.phone ?? "",
        item?.email ?? "",
        formatDateTime(item.createdAt) ?? "",
        "", // Empty string for document URL
        item?.status === "reject" ? "Rejected" : item?.status ?? "",
        item?._id ?? "",
      ];
    }
  });

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className={` transition-transform ${toggle ? "translate-x-0" : "-translate-x-full"
              } !sticky md:!fixed z-50 !w-[262px] sx:!w-[220px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
          />

          <Sidebar1 className="!sticky !w-[262px] bg-[#1b1b1b] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />

          <div
            onClick={() => setToggle(!toggle)}
            className={`md:block transition-transform ${toggle
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
              } hidden fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#1b1b1b80]`}
          ></div>

          <div className="flex flex-1 flex-col md:gap-10 gap-12 items-center justify-start md:px-5 w-full">
            <Navbar
              onChange={setName}
              value={name}
              setToggle={setToggle}
              toggle={toggle}
            />
            <div className="flex flex-col md:mt-28 sx:mt-24 items-start justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5  items-center justify-between w-full">
                <div className="flex w-[38%] md:w-full md:ml-0 ml-[3%] md:justify-between  items-center gap-3">
                  <Text className="font-bold font-lato text-base text-[#303030]">
                    Sort by
                  </Text>

                  <SelectBox
                    className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-[42%] sm:w-[70%]"
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
                    placeholder="Partnered Firms"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>

                <div className="flex md:justify-between sx:flex-wrap  md:gap-2 gap-3 sx:gap-1 items-center justify-center mr-[1.5%] md:mr-0 w-[40%] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900_01 w-[15%] md:w-[18%] sx:w-full"
                    size="txtLatoBold16"
                  >
                    Filter by
                  </Text>
                  <SelectBox
                    className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-[33%] sm:w-[35%] sx:w-full"
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
                    className="border sx:w-full border-gray-500_7f border-solid font-semibold text-left text-sm w-[42%] sm:w-[40%]"
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

              <div className="overflow-auto mt-12 md:mt-10 w-[95%] md:w-full mx-auto">
                <SellClaimTable
                  columns={partneredColumns}
                  data={partnerFirmsTableData}
                ></SellClaimTable>
              </div>

              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] my-14 md:my-10  w-[43%] md:w-full">
                <div className="flex md:flex-wrap gap-5 flex-row sm:gap-4 sx:gap-2 items-center justify-end w-full">
                  <Button
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                    className="bg-white-A700 border-2 border-[#BF9853] border-solid  flex flex-col items-center justify-start p-3 rounded-[16px] w-[30%] sm:w-[42%] sx:w-[37%]"
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer ml-[10%] sx:text-sm flex items-center text-white-A700 bg-[#BF9853] justify-center min-w-[150px] md:min-w-[42%]"
                    onClick={() => {
                      if (page < totalPages) {
                        setPage(page + 1);
                      }
                    }}
                    rightIcon={
                      <Img
                        className="h-6 sx:h-4 ml-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="round"
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
