import React, { useEffect, useState } from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { Cities, States } from "assets/state-city";
import Sidebar1 from "components/Sidebar1";
import { Link } from "react-router-dom";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";
import { convertDateFormat } from "utils";

const buttonTwoOptionsList = [
  { label: "Newest-Oldest", value: "new" },
  { label: "Oldest-Newest", value: "old" },
];

const ManageFootageOnePage = () => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [sort, setSort] = useState("new");

  useEffect(() => {
    fetchData();
  }, [page, city, state, name, sort]);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/admin/footage/private?state=${state ? state : ""}&city=${
          city ? city : ""
        }&name=${name ? name : ""}&sortBy=${sort}&page=${page}&limit=15`
      );

      setData(response.data.result);
      setTotalPages(Math.ceil(response.data.totalCount / 15));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`bg-gray-100 ${
          toggle && "max-h-screen overflow-hidden"
        }  flex flex-col font-lato items-center justify-start mx-auto w-full h-screen`}
      >
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

          <div className="flex flex-1 flex-col md:gap-10 gap-9 justify-start md:px-5 w-full">
            <Navbar
              onChange={setName}
              value={name}
              setToggle={setToggle}
              toggle={toggle}
            />
            <div className="flex md:pt-28 sx:pt-24 flex-col md:gap-5 gap-9 items-center justify-start w-full">
              <div className="flex flex-col md:gap-5 gap-[30px] items-center justify-start w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 sx:gap-5 items-center justify-between w-full">
                  <Link to="/upload-form">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[176px] text-base text-center text-white-A700 bg-[#BF9853]"
                      shape="round"
                      color="#BF9853"
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
                      isMulti={false}
                      name="button"
                      options={States}
                      isSearchable={false}
                      placeholder={state === null ? "Select State " : state}
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
                      placeholder={city === null ? "Select City" : city}
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
                      placeholder={
                        sort === "new" ? "Newest-Oldest" : "Oldest-Newest"
                      }
                      value={sort}
                      onChange={(value) => {
                        setSort(value);
                      }}
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                </div>

                {/* cards */}

                <List
                  className="flex flex-col font-lato gap-6 items-start max-w-[1256px] mt-[35px] md:mt-5 sx:mt-2 mx-auto w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full ">
                    <div className="gap-10 md:gap-5 sx:gap-3 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                      {data.map((item, i) => (
                        <Link
                          to={`/manage-footage?footageid=${item._id}`}
                          key={i}
                        >
                          <Img
                            className="common-pointer flex-1 h-[157px] md:h-auto md:aspect-square object-cover rounded-[16px] w-full"
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
                            <span className="text-[#1b1b1b] font-lato text-left font-medium">
                              ${item.price}
                            </span>
                            <span className="text-gray-900_01 font-lato text-left font-medium">
                              <span>
                                {" "}
                                <br />
                              </span>
                            </span>
                            <span className="text-gray-900_01 sx:text-xs font-lato text-left text-sm font-medium">
                              {convertDateFormat(item?.date || '')} {item.time}
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

            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53%] my-14 md:my-5  w-[43%] md:w-full">
              <div className="flex md:flex-wrap gap-5 flex-row items-center justify-end w-full">
                <Button
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                  className="bg-white-A700 border-2 border-[#BF9853] border-solid  flex flex-col items-center justify-start p-3 md:p-2 rounded-[16px] md:rounded-[10px] w-[30%] sm:w-[47%] sx:w-[44%]"
                >
                  <Img
                    className="h-8 w-8 md:h-7"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>

                <Button
                  className="cursor-pointer  flex items-center bg-[#BF9853] justify-center w-[70%] md:w-[47%] "
                  onClick={() => {
                    if (page < totalPages) {
                      setPage(page + 1);
                    }
                  }}
                  rightIcon={
                    <Img
                      className="h-6 md:h-4 ml-[5px]"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                  shape="round"
                  color="#BF9853"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold text-base text-left sx:text-sm  text-white-A700">
                    Next page
                  </div>
                </Button>

                <div className="flex flex-row items-center gap-5  justify-end w-full">
                  <Text className="text-base text-center mr-3 sx:mr-1 leading-6 font-lato  font-semibold text-[#212121] ">
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

export default ManageFootageOnePage;
