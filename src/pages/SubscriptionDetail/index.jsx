import { Button, Img, Input, List, SelectBox, Text } from "components";
import React, { useRef, useState } from "react";

import Sidebar1 from "components/Sidebar1";
import Loading from "components/loading";
import Navbar from "components/navbar/Navbar";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const buttonOptionsList = [
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
  { label: "Rejected", value: "rejected" },
];

const SubscriptionDetails = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const nevigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [SubscriptionDetails, setSubscriptionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [editbtn, setEditbtn] = useState(true);
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [toggle, setToggle] = useState(false);

  const pdfRef = useRef();

  const dowloadForm = useReactToPrint({
    content: () => pdfRef.current,
  });

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      try {
        const response = await api.get(`/subscription/details/${id}`);
        setSubscriptionDetails(response.data.result);
        setFilter(response.data.result.status);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchSubscriptionDetails();
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const {
    email,
    full_name,
    phone,
    companyName,
    website,
    aboutUs,
    documents,
    address,
    comments,
  } = SubscriptionDetails;

  const updateSubscription = async () => {

    if (filter === "rejected") {
      try {
        const response = await api.put(`/subscription/approve/${id}`, {
          status: filter,
        });
        setEditbtn(true);
        setLoading(false);
        toast.success(
          "Request Has Been Rejected" || "Internal server error",
          toastOptions
        );
        nevigate("/manage-subscriptions");
      } catch (error) {
        setEditbtn(true);
        setError(error);
        setLoading(false);
        toast.error(
          error?.response?.data?.message || "Internal server error",
          toastOptions
        );
      }

      return;
    }


    if (filter !== "approved") {
      return toast.warning("Please Approve Status", toastOptions);
    }

    if (!amount) {
      return toast.warning("Fill Amount ", toastOptions);
    }

    if (!duration) {
      return toast.warning("Fill  Duration", toastOptions);
    }

    try {
      const response = await api.put(`/subscription/approve/${id}`, {
        amount: amount,
        duration: duration,
        status: filter,
      });
      setEditbtn(true);
      setLoading(false);

      toast.success(
        response.data?.message || "Internal server error",
        toastOptions
      );
      nevigate("/manage-subscriptions");
    } catch (error) {
      setEditbtn(true);
      setError(error);
      setLoading(false);
      toast.error(
        error?.response?.data?.message || "Internal server error",
        toastOptions
      );
    }
  };

  const deleteSubscription = async () => {
    try {

      console.log('object')
      // return
      setLoading(true);
      const response = await api.delete(`/subscription/delete/${id}`,);
      setLoading(false);

      if (response.data.success) {

        nevigate("/manage-subscriptions");

        toast.success(
          response.data?.message || "Internal server error",
          toastOptions
        );
      } else {
        // Handle failure

        toast.error(
          error?.response?.data?.message || "Internal server error",
          toastOptions
        );
      }
    } catch (error) {
      // setError(error);
      setLoading(false);
      // Handle error
      console.error("Error deleting subscription:", error);
      toast.error(
        error || "Internal server error",
        toastOptions
      );
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato overflow-x-hidden items-center justify-start h-screen mx-auto  w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className={` transition-transform ${toggle ? "translate-x-0" : "-translate-x-full"
              } !sticky md:!fixed z-50 sx:!w-[220px] !w-[262px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
          />

          <Sidebar1 className="!sticky !w-[262px] bg-[#1b1b1b] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />

          <div
            onClick={() => setToggle(!toggle)}
            className={`md:block transition-transform ${toggle
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
              } hidden fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#1b1b1b80]`}
          ></div>


          <div className="flex flex-1 flex-col md:gap-10 gap-[72px] items-center justify-start md:px-5 w-full">
            <div className="flex flex-col  justify-start w-full">
              <Navbar setToggle={setToggle} toggle={toggle} />

              <div className="flex justify-between md:mt-28 sx:mt-24  md:px-0 items-center px-7 mt-[43px] mb-3">
                <div
                  className="font-bold flex  leading-[normal] text-base  text-blue_gray-900_01 text-left w-[17%] md:w-[45%]"
                  placeholderClassName="text-blue_gray-900_01"
                >
                  <Text className="text-blue_gray-900_01 sx:text-sm sx:whitespace-nowrap ml-3 md:ml-0 font-lato text-base font-bold">
                    Show document
                  </Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_375_5250)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7064 15.7071C12.5188 15.8946 12.2645 15.9999 11.9994 15.9999C11.7342 15.9999 11.4799 15.8946 11.2924 15.7071L5.63537 10.0501C5.53986 9.95785 5.46367 9.84751 5.41126 9.7255C5.35886 9.6035 5.33127 9.47228 5.33012 9.3395C5.32896 9.20672 5.35426 9.07504 5.40454 8.95215C5.45483 8.82925 5.52908 8.7176 5.62297 8.6237C5.71686 8.52981 5.82852 8.45556 5.95141 8.40528C6.07431 8.355 6.20599 8.32969 6.33877 8.33085C6.47155 8.332 6.60277 8.35959 6.72477 8.412C6.84677 8.46441 6.95712 8.54059 7.04937 8.6361L11.9994 13.5861L16.9494 8.6361C17.138 8.45394 17.3906 8.35315 17.6528 8.35542C17.915 8.3577 18.1658 8.46287 18.3512 8.64828C18.5366 8.83369 18.6418 9.0845 18.644 9.3467C18.6463 9.60889 18.5455 9.8615 18.3634 10.0501L12.7064 15.7071Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_375_5250">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-[27.5%] md:w-auto ">
                  <Text
                    onClick={dowloadForm}
                    className="text-base sx:text-sm text-[#1b1b1b] font-bold underline font-lato  cursor-pointer "
                  >
                    Download Form
                  </Text>
                </div>
              </div>

              <div className="flex md:flex-col flex-row gap-9 md:gap-0 items-start justify-start ml-10 md:ml-[0] w-[78%] md:w-full">
                <div className="w-[17%]"></div>

                <div className="flex flex-col gap-[17px] items-end justify-start md:mt-0 mt-1.5 w-5/6 md:w-full">
                  <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid  shadow-bs7 w-full">
                    <div
                      ref={pdfRef}
                      className="flex flex-col gap-9 md:gap-5  justify-start p-10 md:p-4 w-full"
                    >
                      <Text className="mt-0.5 sx:text-xl md:text-3xl sx:te text-center sm:text-[28px] text-3xl font-normal source-sans  text-blue_gray-900_01">
                        Subscription Request
                      </Text>
                      <div className="flex flex-col font-lato gap-4 items-center justify-start mb-[57px] md:mb-0 w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text className="text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                              Personal Information
                            </Text>
                            <div className="flex flex-col gap-2 font-lato items-start justify-start ml-1 md:ml-[0] mt-3.5  md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text className="text-base text-blue_gray-900_01">
                                  Full Name:
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <Text className="text-blue_gray-900_01 font-normal text-sm">
                                  {full_name}
                                </Text>
                              </div>
                            </div>
                            <div className="flex sx:flex-wrap sx:gap-2 flex-row items-center justify-between ml-1 md:ml-[0] mt-[17px] w-[71%] md:w-full">
                              <div className="flex sx:w-full flex-col gap-[9px] items-start justify-start w-[31%]">
                                <div className="flex flex-col items-start justify-start">
                                  <Text className="text-base text-blue_gray-900_01 font-medium font-lato">
                                    Email address:
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text className="text-blue_gray-900_01 font-normal font-lato text-sm">
                                    {email}
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 items-center justify-start ">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text className="text-base text-blue_gray-900_01 font-medium font-lato">
                                    Phone Number:
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-blue_gray-900_01 text-sm"
                                    size="txtLatoRegular14"
                                  >
                                    +91 {phone}
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text className="mt-10 text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                              Business information
                            </Text>
                            <div className="flex flex-col gap-1.5 items-start justify-start mt-4  md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text className="text-base text-blue_gray-900_01">
                                  Company Name:
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-full md:w-full">
                                <Text className="text-blue_gray-900_01 font-normal text-sm">
                                  {companyName}
                                </Text>
                              </div>
                            </div>
                            <List
                              className="sm:flex-col  flex-row md:gap-10 sx:gap-2 sx:space-x-0 space-x-24 grid sm:grid-cols-1 grid-cols-2 my-[17px] w-[70%]]"
                              orientation="horizontal"
                            >
                              <div className="flex  flex-col gap-2 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text className="text-base text-blue_gray-900_01">
                                    Website:
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start md:w-full">
                                  <Text className="text-blue_gray-900_01 font-normal text-sm">
                                    {website}
                                  </Text>
                                </div>
                              </div>

                              <div className="flex  sx:w-full flex-col gap-2 items-start justify-start w-full ">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-base text-blue_gray-900_01"
                                    size="txtLatoMedium16"
                                  >
                                    How did you hear about us :
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-blue_gray-900_01 text-sm"
                                    size="txtLatoRegular14"
                                  >
                                    {aboutUs}
                                  </Text>
                                </div>
                              </div>
                            </List>
                            <div className="flex flex-col gap-[13px] items-start justify-start mt-2.5 w-[98%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text className="text-base text-blue_gray-900_01">
                                  Company Address:
                                </Text>
                              </div>
                              <Text className="  text-blue_gray-900_01 mb-1 font-normal text-sm w-[98%]">
                                {address}
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start mt-[19px] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text className="text-base text-blue_gray-900_01">
                                  Upload Document:
                                </Text>
                              </div>

                              {documents && documents?.length > 0 && documents?.map((document) => (
                                <a
                                  href={`${document?.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  <Text
                                    className="text-blue-700 text-sm underline"
                                    size="txtLatoRegular14Blue700"
                                  >
                                    {document?.url}
                                  </Text>
                                </a>
                              ))}

                            </div>

                            <div className="flex flex-col gap-3.5 items-start justify-start mt-10 w-full">
                              <Text className="text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                                Additional Information
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start mb-[3px] w-[70%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text className="text-base text-blue_gray-900_01">
                                Additional Comment or Question:
                              </Text>
                            </div>
                            <div className="flex  h-[17px] items-start justify-start ">
                              <Text className="h-[17px] text-blue_gray-900_01 font-normal text-sm">
                                {comments}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start w-full">
                      {/* administarative use
                       */}
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text className="md:text-3xl sx:text-xl sm:text-[28px] text-[32px] font-normal source-sans text-blue_gray-900_01">
                          Administration Use
                        </Text>
                        <div className="flex flex-row font-lato gap-2 items-center justify-start mt-[15px] w-[28%] md:w-full">
                          <Text className="text-base sx:text-sm sx:whitespace-nowrap font-lato font-bold  text-blue_gray-900_01">
                            Approval Status{" "}
                          </Text>
                          <SelectBox
                            className="!text-blue_gray-900_01 border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-[60%]"
                            placeholderClassName="!text-blue_gray-900_01"
                            indicator={
                              <Img
                                className="h-[5px] mr-[0] w-2.5"
                                src="images/img_vector.svg"
                                alt="Vector"
                              />
                            }
                            isMulti={false}
                            readOnly={editbtn}
                            name="button"
                            value={filter}
                            onChange={(status) => {
                              setFilter(status);
                            }}
                            options={buttonOptionsList}
                            isSearchable={false}
                            placeholder={filter}
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                        <div className="grid grid-cols-2 sx:grid-cols-1 w-full">
                          <div className="flex flex-col">
                            <div className="flex flex-row font-lato gap-2 items-center justify-start mt-7  md:w-full">
                              <Img
                                className="h-8 w-8"
                                src="images/img_solarhamburgermenubroken.svg"
                                alt="solarhamburgerm"
                              />
                              <Text className="text-[22px] text-blue_gray-900_01 font-medium font-lato sm:text-lg md:text-xl">
                                Amount (USD)
                              </Text>
                            </div>
                            <div className="w-full  ">
                              <Input
                                name="groupFortySeven"
                                readOnly={editbtn}
                                value={amount}
                                handleChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter Amount"
                                className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-lato leading-[normal] text-base text-left w-full"
                                wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[90%]"
                                size="md"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex flex-row font-lato gap-2 items-center justify-start mt-7  md:w-full">
                              <Img
                                className="h-8 w-8"
                                src="images/img_solarhamburgermenubroken.svg"
                                alt="solarhamburgerm"
                              />
                              <Text className="text-[22px] text-blue_gray-900_01 font-medium font-lato sm:text-lg md:text-xl">
                                Duration (Days)
                              </Text>
                            </div>
                            <div className="w-full  ">
                              <Input
                                name="groupFortySeven"
                                readOnly={editbtn}
                                value={duration}
                                handleChange={(e) =>
                                  setDuration(e.target.value)
                                }
                                placeholder="Enter duration"
                                className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 font-lato leading-[normal]  text-base text-left w-full"
                                wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[90%]"
                                size="md"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-[90%] relative mb-10 flex item-center md:flex-col-reverse md:w-[95%] justify-between">
                  <Link
                    to="/manage-subscriptions"
                    className="flex gap-4 items-center justify-center md:justify-start md:mt-4 cursor-pointer  w-[12%]  pl-[5%] md:w-[50%]"
                  >
                    {" "}
                    <Img
                      className=" h-6  w-6"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <Text className="text-[#BF9853] font-lato font-bold text-xl">
                      {" "}
                      Back{" "}
                    </Text>
                  </Link>

                  <div className="relative sx:flex-wrap  flex flex-row gap-4 items-center justify-end md:justify-between  w-[60%] md:w-full">
                    <div className="cursor-pointer w-[50%] sx:w-[45%] p-2 md:p-0">
                      {" "}
                      <Button
                        onClick={updateSubscription}
                        className="font-bold flex justify-center items-center pl-4 gap-3 rounded-lg leading-[normal] p-3 bg-[#BF9853] text-white-A700 text-base w-full  placeholder:"
                        color="#BF9853"
                      >
                        <Text className="text-center"> Save </Text>
                      </Button>
                    </div>

                    <div className="cursor-pointer sx:w-[45%] w-[50%] p-2 md:p-0">
                      {" "}
                      <Button
                        onClick={() => {
                          setEditbtn(false);
                        }}
                        className="font-bold   flex items-center justify-center pl-4 gap-3 rounded-lg   leading-[normal] p-3  bg-[#BF9853] text-white-A700 text-base  w-full  placeholder:"
                        color="#BF9853"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 5.99994L18 8.99994M13 19.9999H21M5 15.9999L4 19.9999L8 18.9999L19.586 7.41394C19.9609 7.03889 20.1716 6.53027 20.1716 5.99994C20.1716 5.46961 19.9609 4.961 19.586 4.58594L19.414 4.41394C19.0389 4.039 18.5303 3.82837 18 3.82837C17.4697 3.82837 16.9611 4.039 16.586 4.41394L5 15.9999Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <Text className=""> Edit </Text>
                      </Button>
                    </div>

                    <div className="cursor-pointer sx:w-full w-[50%] p-2 md:p-0">
                      {" "}
                      <Button
                        onClick={deleteSubscription}
                        className="font-bold  flex rounded-lg pl-4 gap-3 items-center leading-[normal] p-3 bg-red-700 text-white-A700 text-base text-left w-full  placeholder:"
                        color="red_700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                            fill="white"
                          />
                        </svg>
                        Delete
                      </Button>
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

export default SubscriptionDetails;
