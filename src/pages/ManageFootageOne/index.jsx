import React, { useEffect, useState } from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { Cities, States } from "assets/state-city";
import Sidebar1 from "components/Sidebar1";
import { Link } from "react-router-dom";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";

const buttonTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ManageFootageOnePage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  const [state, setState] = useState();
  const [city, setCity] = useState();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/admin/footage?state=West Bengal&city=Kolkata&fromDate=2024-01-01&toDate=2024-12-31&name=car&sortBy=new&page=${page}&limit=15`
      );

      setData(response.data.result);
      setTotalPages(Math.ceil(response.data.totalCount / 15));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full h-[100vh]">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-9 justify-start md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-9 items-center justify-start w-full">
              <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
                <div className="w-[43%]">
                  <Input
                    name="frame348"
                    placeholder="Search "
                    value={frame348value}
                    onChange={(e) => setFrame348value(e)}
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base text-left w-full"
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
              <div className="flex flex-col md:gap-10 gap-[30px] items-center justify-start w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Link to="/upload-form">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center"
                      shape="round"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      Upload New
                    </Button>
                  </Link>

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
                      options={States}
                      isSearchable={false}
                      placeholder="Select state"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                      value={state}
                      onChange={(selectedOption) => {
                        setState(selectedOption);
                        setCity(null);
                      }}
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
                      options={Cities[state?.replace(/\s/g, "")]}
                      isSearchable={false}
                      placeholder="Select City"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      value={city}
                      onChange={(optionvalue) => {
                        setCity(optionvalue);
                      }}
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

                {/* cards */}

                <List
                  className="flex flex-col font-lato gap-6 items-start max-w-[1256px] mt-[35px] mx-auto md:px-5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full ">
                    <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                      {data.map((item, i) => (
                        <Link to={"/managefootage"} key={i}>
                          <Img
                            className="common-pointer flex-1 h-[157px] md:h-auto object-cover rounded-[16px] w-full"
                            src={item.thumbnail}
                            alt={`Thumbnail for ${item.name}`}
                          />
                          <Text
                            className="leading-[24.00px] text-base text-gray-900_01 w-full mt-2"
                            size="txtLatoMedium16Gray90001"
                          >
                            <span className="text-gray-900_01 font-lato text-left font-normal">
                              <>
                                {item.name}
                                <br />
                              </>
                            </span>
                            <span className="text-blue-700 font-lato text-left font-medium">
                              ${item.price}
                            </span>
                            <span className="text-gray-900_01 font-lato text-left font-medium">
                              <span>
                                {" "}
                                <br />
                              </span>
                            </span>
                            <span className="text-gray-900_01 font-lato text-left text-sm font-medium">
                              {item.date} {item.time}
                            </span>
                            <span className="text-gray-900_01 font-lato text-left font-medium">
                              <>
                                <br />
                              </>
                            </span>
                          </Text>
                        </Link>
                      ))}
                    </div>
                  </div>
                </List>

                {/* cards */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] w-[43%] md:w-full mb-10">
              <div className="flex sm:flex-col gap-10 flex-row sm:gap-14 items-center justify-between w-full">
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
                  className="cursor-pointer flex items-center justify-center min-w-[150px]"
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
                <div className="flex flex-row items-center justify-around w-full">
                  <Text className="text-base text-center leading-6 font-lato  font-semibold text-[#212121] -mr-1">
                    page
                  </Text>
                  <Button
                    className="!text-[#212121] border font-semibold border-gray-500 border-solid cursor-pointer min-w-[94px] text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    {page}
                  </Button>
                  <Text className="text-base text-center font-semibold text-[#212121] -ml-5 ">
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

export default ManageFootageOnePage;
