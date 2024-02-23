import { Button, Img, Input, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import Loading from "components/loading";
import ProductTable from "components/producttable";
import React, { useEffect, useState } from "react";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";
import { api } from "utils/api";

const buttonOptionsList = [
  { label: "All", value: "" },
  { label: "Subscription", value: "Subscription" },
  { label: "Buy", value: "Buy" },
];
const buttonOneOptionsList = [
  { label: "Newest-Oldest", value: "desc" },
  { label: "Oldest-Newest", value: "asc" },
];

const PaymnetHistory = () => {
  const [frame348value, setFrame348value] = React.useState("");

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [sort, setSort] = useState("desc");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const PaymentHistory = async () => {
      try {
        const { data } = await api.get(
          `/payment?page=${page}&sortBy=createdAt&limit=10&type=${type}&sort=${sort}&name=${
            name ? name : ""
          }`
        );
        setTableData(data?.result);
        setTotalPages(Math.ceil(data?.page / 10));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    PaymentHistory();
  }, [sort, page, type, name]);

  const tableColumns = [
    "Name", // Replace with your actual column names
    "Email Address",
    "Purchase Method",
    "Request Date",
    "Amount",
    "Details",
  ];

  if (loading) {
    <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const formattedTableData = tableData.map((item) => [
    item.name ?? "",
    item.email ?? "",
    item.type ?? "",
    formatDateFromTimestamp(item.createdAt) ?? "",
    `$${item.amount ?? ""}`,
    `${item._id ?? ""}`,
  ]);

  function formatDateFromTimestamp(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = dateObject.getDate().toString().padStart(2, "0");

    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className={` transition-transform ${
              toggle ? "translate-x-0" : "-translate-x-full"
            } !sticky md:!fixed z-50 !w-[262px] sx:!w-[220px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
          />

          <Sidebar1 className="!sticky !w-[262px] bg-[#1b1b1b] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />

          <div
            onClick={() => setToggle(!toggle)}
            className={`md:block transition-transform ${
              toggle
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-end w-full">
                <div className="flex sx:flex-wrap gap-3 items-center justify-center w-[40%] sm:w-full">
                  <Text
                    className="text-base sx:w-full text-blue_gray-900_01"
                    size="txtLatoBold16"
                  >
                    Filter by
                  </Text>
                  <SelectBox
                    className="!text-blue_gray-900_01 sx:w-full border border-gray-500_7f border-solid font-semibold text-left text-sm w-[33%] sm:w-[35%]"
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
                    value={type}
                    onChange={(status) => {
                      setType(status);
                    }}
                    options={buttonOptionsList}
                    isSearchable={false}
                    placeholder={
                      type === "Subscription"
                        ? "Subscription"
                        : type === "Buy"
                        ? "Buy"
                        : "All"
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                  <SelectBox
                    className="border border-gray-500_7f sx:w-full border-solid font-semibold text-left text-sm w-[42%] sm:w-[40%]"
                    placeholderClassName="text-blue_gray-900_a2"
                    indicator={
                      <Img
                        className="h-[5px] mr-[0] w-2.5"
                        src="images/img_vector.svg"
                        alt="Vector"
                      />
                    }
                    isMulti={false}
                    value={sort}
                    onChange={(value) => {
                      setSort(value);
                    }}
                    name="button_One"
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
                <ProductTable
                  paymentHistory={true}
                  columns={tableColumns}
                  data={formattedTableData}
                ></ProductTable>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[50%] my-14 md:my-10  w-[46%] md:w-full">
                <div className="flex sm:flex-wrap gap-5 flex-row sm:gap-4 items-center justify-end md:justify-between w-full">
                  <Button
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                    className="bg-white-A700 border-2 sx:w-[40%] border-[#BF9853] border-solid  flex flex-col items-center justify-start p-3 rounded-[16px] w-[30%] sm:w-[45%]"
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer sx:w-1/2  flex items-center justify-center bg-[#BF9853] w-[70%] md:w-[45%]"
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
                    color="#BF9853"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-base text-left text-white-A700">
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

export default PaymnetHistory;
