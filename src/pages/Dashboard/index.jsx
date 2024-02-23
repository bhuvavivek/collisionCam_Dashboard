import React, { useEffect, useState } from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "components/navbar/Navbar";

const buttonOptionsList = [
  { label: "All", value: "all" },
  { label: "Total Footage Sales", value: "Buy" },
  { label: "Subscription", value: "Subscription" },
];
const buttonOneOptionsList = [
  { label: "Month", value: "Month" },
  { label: "Week", value: "Week" },
  { label: "Day", value: "Day" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const [frame348value, setFrame348value] = React.useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  const [readtext, setReadText] = useState(true);
  const [isedit, setIsEdit] = useState(true);
  const [readtext1, setReadText1] = useState(true);
  const [isedit1, setIsEdit1] = useState(true);
  const [readtext2, setReadText2] = useState(true);
  const [isedit2, setIsEdit2] = useState(true);
  const [collisions, setCollisions] = useState("");
  const [hitandruns, setHitAndRuns] = useState("");
  const [connection, setConnections] = useState("");

  const [footagesaledata, setFootageSaleData] = useState({});

  useEffect(() => {
    fetchdata();
    fetchcaptured();
    fetchsales();
  }, []);

  const [data, setData] = useState([]);

  const handleButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsExpanded(!isExpanded);
  };

  const fetchdata = async () => {
    try {
      const { data } = await api.get(`/user/recent-activity`);
      setData(data?.result);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchcaptured = async () => {
    const { data } = await api.get("/user/capture");

    if (data.success) {
      data.result.forEach((singleobject) => {
        if (singleobject.type === "Collisions") {
          setCollisions(singleobject.value);
        }
        if (singleobject.type === "Hit-and-runs") {
          setHitAndRuns(singleobject.value);
        }
        if (singleobject.type === "Client-connection") {
          setConnections(singleobject.value);
        }
      });
    }
  };

  const fetchsales = async () => {
    try {
      const { data } = await api.get("/user/total-footage-sales");
      setFootageSaleData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handlecollisionSave = async () => {
    const { data } = await api.put("/user/capture/update", {
      type: "Collisions",
      value: collisions,
    });

    if (data.success) {
      toast.success("Update Sucessfully", ToastContainer);
    }
  };
  const handlehitandrunSave = async () => {
    const { data } = await api.put("/user/capture/update", {
      type: "Hit-and-runs",
      value: hitandruns,
    });

    if (data.success) {
      toast.success("Update Sucessfully", ToastContainer);
    }
  };
  const handleclientsave = async () => {
    const { data } = await api.put("/user/capture/update", {
      type: "Client-connection",
      value: connection,
    });

    if (data.success) {
      toast.success("Update Sucessfully", ToastContainer);
    }
  };

  function formatTimestampWithAMPM(timestamp) {
    const dateObj = new Date(timestamp);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return dateObj.toLocaleString("en-US", options);
  }

  const [chartHtml, setChartHtml] = useState("");
  const [period, setPeriod] = useState("month");
  const [filter, setFilter] = useState("all");
  const fetchData = async () => {
    try {
      const { data } = await api(
        `/user/footage-chart?type=` + period.toLowerCase() + "&filter=" + filter
      );
      setChartHtml(data?.script);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [period, filter]);
  useEffect(() => {
    const renderChart = () => {
      console.log("510");
      if (chartHtml) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = chartHtml;
        document.body.appendChild(script);
      }
    };
    renderChart();
  }, [chartHtml]);

  const [name, setName] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`bg-gray-100 ${
          toggle && "max-h-screen overflow-hidden"
        } flex flex-col font-lato items-center justify-start mx-auto  w-full overflow-x-hidden h-screen`}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className={` transition-transform ${
              toggle ? "translate-x-0" : "-translate-x-full"
            } !sticky md:!fixed z-50 !w-[262px] sx:!w-[220px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
          />

          <Sidebar1 className="bottom-0 top-0 left-0 !sticky !w-[262px] bg-[#1b1b1b] flex h-screen md:hidden justify-start overflow-auto md:px-5 " />

          <div
            onClick={() => setToggle(!toggle)}
            className={`md:block transition-transform ${
              toggle
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } hidden fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#1b1b1b80]`}
          ></div>

          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <Navbar
              // onChange={setName}
              // value={name}
              setToggle={setToggle}
              toggle={toggle}
            />

            <div className="flex flex-col md:pt-24 sx:pt-16 gap-6 items-center justify-start w-[95%] md:w-full">
              {/* Statstic full div start */}
              <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
                {/* Statastic left Div */}
                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[65%] md:w-full">
                  <Text className="md:text-3xl sm:text-[24px] text-[32px] text-blue_gray-900_01 source-sans ">
                    Statistics
                  </Text>
                  <List
                    className="font-lato gap-8 md:gap-4 grid  grid-cols-2 sx:grid-cols-1 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-2xl shadow-bs1 w-full">
                      <div className="flex flex-row sm:flex-col gap-4 md:gap-2 items-center justify-start md:mr-0 mr-[91px] md:mt-1 mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20 md:w-16 md:h-16"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-2 md:gap-0 items-start md:justify-center justify-start w-[63%] md:w-full md:text-center">
                          <div className="flex flex-col  items-center justify-start w-full">
                            <Text className="sm:text-[30px] md:text-[38px] text-[38px] text-blue_gray-900_01 source-sans font-semibold ">
                              $
                              {Number(
                                footagesaledata?.totalFootageSaleAmount || 0
                              ).toFixed(2)}
                            </Text>
                          </div>
                          <Text className="text-base md:text-center md:mx-auto text-blue_gray-900_01 font-bold">
                            Total Footage Sales
                          </Text>
                        </div>
                      </div>
                      <Text className="mb-[7px] md:mb-0 md:pr-4 md:ml-[0]  mt-[3px] text-base md:text-sm flex justify-end  font-bold text-red-700">
                        +28%
                      </Text>
                    </div>

                    <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col justify-center p-2 rounded-2xl shadow-bs1 w-full">
                      <div className="flex flex-row sm:flex-col gap-4 md:gap-2 items-center justify-start md:mr-0 mr-[91px] md:mt-1 mt-2 w-[74%] md:w-full">
                        <Img
                          className="h-20 w-20 md:w-16 md:h-16"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                        <div className="flex flex-col gap-2 md:gap-0 items-start md:justify-center justify-start w-[63%] md:w-full md:text-center">
                          <div className="flex flex-col  items-center justify-start w-full">
                            <Text className="sm:text-[30px] md:text-[38px] text-[38px] text-blue_gray-900_01 source-sans font-semibold ">
                              $
                              {Number(
                                footagesaledata?.totalSubscriptionAmount || 0
                              ).toFixed(2)}
                            </Text>
                          </div>
                          <Text className="text-base md:text-center md:mx-auto text-blue_gray-900_01 font-bold">
                            Subscription Income
                          </Text>
                        </div>
                      </div>
                      <Text className="mb-[7px] md:mb-0 md:pr-4 md:ml-[0]  mt-[3px] text-base md:text-sm flex justify-end  font-bold text-indigo-900">
                        +28%
                      </Text>
                    </div>
                  </List>
                </div>
                {/* statastic left div end */}

                {/* statstic right div */}
                <div className="flex md:flex-1  flex-col items-center justify-start w-auto md:w-full">
                  <List
                    className="flex flex-col gap-4 items-start w-auto md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between gap-1 w-full">
                          <Text className=" text-blue_gray-900_01 sm:text-lg md:text-xl text-2xl sx:text-base  source-sans font-semibold ">
                            Collisions Captured
                          </Text>

                          {isedit ? (
                            <Button
                              onClick={() => {
                                setIsEdit(false);
                                setReadText(false);
                              }}
                            >
                              {" "}
                              <Img
                                className="h-6 w-6"
                                src="images/img_edit.svg"
                                alt="edit"
                              />
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                setIsEdit(true);
                                setReadText(true);
                                handlecollisionSave();
                              }}
                            >
                              <Img
                                className="h-6 w-6"
                                src="images/icon_save.png"
                                alt="edit"
                              />
                            </Button>
                          )}
                        </div>

                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-100_dd border-solid h-10 md:h-11 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Input
                            type="text"
                            value={collisions}
                            handleChange={(e) => {
                              setCollisions(e.target.value);
                            }}
                            readOnly={readtext}
                            className="absolute h-full inset-y-[0] sx:text-xl  my-auto md:text-3xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01"
                            placeholder="100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between gap-4 w-full">
                          <Text className="text-2xl sx:text-base source-sans font-semibold text-blue_gray-900_01 sm:text-lg  md:text-xl">
                            Hit-and-runs Captured
                          </Text>
                          {isedit1 ? (
                            <Button
                              onClick={() => {
                                setIsEdit1(false);
                                setReadText1(false);
                              }}
                            >
                              {" "}
                              <Img
                                className="h-6 w-6"
                                src="images/img_edit.svg"
                                alt="edit"
                              />
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                setIsEdit1(true);
                                setReadText1(true);
                                handlehitandrunSave();
                              }}
                            >
                              <Img
                                className="h-6 w-6"
                                src="images/icon_save.png"
                                alt="edit"
                              />
                            </Button>
                          )}
                        </div>
                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 overflow-hidden border border-blue_gray-100_dd border-solid h-10 md:h-11 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Input
                            type="text"
                            value={hitandruns}
                            handleChange={(e) => {
                              setHitAndRuns(e.target.value);
                            }}
                            readOnly={readtext1}
                            className="absolute h-full  inset-y-[0] my-auto md:text-3xl sx:text-xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01"
                            placeholder="100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-start  my-0 pt-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <Text className="text-2xl source-sans sx:text-base font-semibold text-blue_gray-900_01 sm:text-lg md:text-xl">
                            Client to Lawyer Connections
                          </Text>
                          {isedit2 ? (
                            <Button
                              onClick={() => {
                                setIsEdit2(false);
                                setReadText2(false);
                              }}
                            >
                              {" "}
                              <Img
                                className="h-6 w-6"
                                src="images/img_edit.svg"
                                alt="edit"
                              />
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                setIsEdit2(true);
                                setReadText2(true);
                                handleclientsave();
                              }}
                            >
                              <Img
                                className="h-6 w-6"
                                src="images/icon_save.png"
                                alt="edit"
                              />
                            </Button>
                          )}
                        </div>
                        <div className="h-10 md:h-11 mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-100_dd border-solid h-10 md:h-11 inset-[0] justify-center m-auto rounded-[5px] shadow-bs1 w-full"></div>
                          <Input
                            type="text"
                            value={connection}
                            handleChange={(e) => {
                              setConnections(e.target.value);
                            }}
                            readOnly={readtext2}
                            className="absolute h-full inset-y-[0] sx:text-xl  my-auto md:text-3xl sm:text-[28px] text-3xl source-sans font-normal text-blue_gray-900_01"
                            placeholder="100"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                {/* statstic right div end */}
              </div>
              {/* Statstic full div end */}

              {/* Chart section start */}
              <div className="flex flex-col font-inter gap-8 items-start justify-start w-full md:w-full">
                {/* Filter section start */}

                <div className="flex flex-row sx:flex-wrap sx:items-end md:gap-5 items-center justify-between w-full ">
                  <div className="flex flex-row gap-3 md:gap-2 sx:flex-wrap sx:items-end  items-center justify-start w-3/12 md:w-[60%] sx:w-full">
                    <Text className="text-base text-blue_gray-900_01 font-bold w-auto md:w-[30%] sx:w-full">
                      Filter by
                    </Text>
                    <SelectBox
                      className="border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-[60%] sx:w-full"
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
                      options={buttonOptionsList}
                      isSearchable={false}
                      placeholder={
                        filter === "Subscription"
                          ? filter
                          : filter === "Buy"
                          ? "Total Footage Sales"
                          : "All"
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                      onChange={(value) => setFilter(value)}
                    />
                  </div>

                  <SelectBox
                    className="border border-gray-500_7f border-solid sm:flex-1 font-semibold text-left text-sm w-[13%] sm:w-[20%] sx:w-[100%]"
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
                    placeholder={period}
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    onChange={(value) => setPeriod(value)}
                  />
                </div>
                {/* Filter section end */}

                {/* Chart start */}
                <div className="bg-white-A700 border p-5 md:p-3 md:overflow-x-auto border-gray-500_7f border-solid flex flex-col font-lato gap-[25px] items-start justify-start pb-2.5 rounded-[12px] shadow-bs2 w-full">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
        <canvas id="revenueChart" width="1000" height="400"></canvas>
    `,
                    }}
                  />
                </div>

                {/* chart end */}
              </div>
              {/* Chart section end */}

              <div className="flex flex-col font-lato items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <div
                    className={`flex flex-row md:gap-10 items-start ${
                      isExpanded ? "mb-0" : "mb-10"
                    } justify-between w-full`}
                  >
                    <Text
                      className="text-[22px] text-blue_gray-900_01 sm:text-lg sx:whitespace-nowrap  sx:text-sm md:text-xl"
                      size="txtLatoSemiBold22"
                    >
                      Recent Activities
                    </Text>

                    <Button
                      className="flex justify-center items-center gap-2 mr-3 sx:text-sm text-blue_gray-900_01 text-base  font-bold"
                      onClick={handleButtonClick}
                    >
                      {isExpanded ? "Expand" : "Collapse"}
                      {isExpanded ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_375_5220)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.7073 15.707C12.5198 15.8945 12.2655 15.9998 12.0003 15.9998C11.7352 15.9998 11.4809 15.8945 11.2933 15.707L5.63634 10.05C5.54083 9.95775 5.46465 9.84741 5.41224 9.7254C5.35983 9.6034 5.33225 9.47218 5.33109 9.3394C5.32994 9.20662 5.35524 9.07494 5.40552 8.95205C5.4558 8.82915 5.53006 8.7175 5.62395 8.6236C5.71784 8.52971 5.82949 8.45546 5.95239 8.40518C6.07529 8.3549 6.20696 8.3296 6.33974 8.33075C6.47252 8.3319 6.60374 8.35949 6.72575 8.4119C6.84775 8.46431 6.9581 8.54049 7.05034 8.636L12.0003 13.586L16.9503 8.636C17.1389 8.45384 17.3915 8.35305 17.6537 8.35533C17.9159 8.3576 18.1668 8.46277 18.3522 8.64818C18.5376 8.83359 18.6427 9.0844 18.645 9.3466C18.6473 9.6088 18.5465 9.8614 18.3643 10.05L12.7073 15.707Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_5220">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_330_1366)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.7073 8.29302C12.5198 8.10555 12.2655 8.00024 12.0003 8.00024C11.7352 8.00024 11.4809 8.10555 11.2933 8.29302L5.63634 13.95C5.54083 14.0423 5.46465 14.1526 5.41224 14.2746C5.35983 14.3966 5.33225 14.5278 5.33109 14.6606C5.32994 14.7934 5.35524 14.9251 5.40552 15.048C5.4558 15.1709 5.53006 15.2825 5.62395 15.3764C5.71784 15.4703 5.82949 15.5446 5.95239 15.5948C6.07529 15.6451 6.20696 15.6704 6.33974 15.6693C6.47252 15.6681 6.60374 15.6405 6.72575 15.5881C6.84775 15.5357 6.9581 15.4595 7.05034 15.364L12.0003 10.414L16.9503 15.364C17.1389 15.5462 17.3915 15.647 17.6537 15.6447C17.9159 15.6424 18.1668 15.5373 18.3522 15.3518C18.5376 15.1664 18.6427 14.9156 18.645 14.6534C18.6473 14.3912 18.5465 14.1386 18.3643 13.95L12.7073 8.29302Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_330_1366">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="matrix(1 0 0 -1 0 24)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </Button>
                  </div>

                  <div
                    className={`bg-white-A700 border  border-gray-500_7f border-solid  ${
                      isExpanded ? "flex" : "hidden"
                    } flex-col items-center justify-end mb-10 py-[21px] shadow-bs3 w-full overflow-x-auto`}
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start mt-3 md:mt-0 w-full">
                      <List
                        className="flex flex-col gap-[31.5px] md:gap-5 items-center md:overflow-x-auto justify-center pt-[30px] md:pt-0 sm:px-5 px-[34px] w-full"
                        orientation="vertical"
                      >
                        {data?.map((item) => (
                          <div className="w-full " key={item?._id}>
                            <div className="grid grid-cols-5 md:grid-cols-1 md:flex-1 md:flex-col justify-items-center flex-row md:gap-2 gap-4 w-[99%] md:w-full">
                              <Text
                                className="text-base items-start text-left  text-blue_gray-900_01"
                                size="txtLatoRegular16Bluegray90001"
                              >
                                {item.name}
                              </Text>
                              <Text
                                className="text-base items-start text-left  text-blue_gray-900_01"
                                size="txtLatoRegular16Bluegray90001"
                              >
                                {item?.email?.length > 21
                                  ? item?.email?.slice(0, 22) + "..."
                                  : item.email}
                              </Text>
                              <Text
                                className="md:ml-[0]  text-base text-blue_gray-900_01"
                                size="txtLatoBold16"
                              >
                                {item.requestType}
                              </Text>{" "}
                              <Text
                                className="md:ml-[0] text-base text-blue_gray-900_01"
                                size="txtLatoBold16"
                              >
                                {formatTimestampWithAMPM(item.createdAt)}
                              </Text>
                              <Link
                                to={
                                  item.requestType === "Partner"
                                    ? `/reviewrequesttwo?id=${item._id}`
                                    : item.requestType ===
                                      "Subscription Request"
                                    ? `/subscription?id=${item._id}`
                                    : `/payment-information?id=${item._id}`
                                }
                              >
                                <Text
                                  className="md:ml-[0]  text-base text-blue-700 underline cursor-pointer"
                                  size="txtLatoBold16Blue700"
                                >
                                  View Details
                                </Text>
                              </Link>
                            </div>
                            <Line className="self-center h-px mt-8 md:mt-5 bg-blue_gray-100_01 w-full" />
                          </div>
                        ))}
                      </List>
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

export default DashboardPage;
