import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "assets/images";
import Sidebar1 from "components/Sidebar1";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const buttonOptionsList = [
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "reject" },
  { label: "Pending", value: "pending" },
];

const ReviewRequestPage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const nevigate = useNavigate();
  const location1 = useLocation();
  const queryParams = new URLSearchParams(location1.search);
  const id = queryParams.get("id");
  const [loading, setLoading] = useState(true);
  const [freereviewRequest, SetFreeReviewRequest] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [affiliateID, setAffiliateID] = useState("");
  const [description, setDescription] = useState("");
  const [editbtn, setEditbtn] = useState(true);

  useEffect(() => {
    const fetchFreeReviewRequest = async () => {
      try {
        const response = await api.get(`/user/get-single-request/${id}`);
        SetFreeReviewRequest(response.data.result);
        setDescription(response.data.result.description);
        setAffiliateID(response.data.result.affliate_id);
        setFilter(response.data.result.status);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchFreeReviewRequest();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const {
    email,
    full_name,
    phone,
    footageName,
    footageId,
    reason,
    partneredLawFirms,
    document,
    type,
  } = freereviewRequest;

  const updateRequest = async () => {
    try {
      const response = await api.put(`/user/update-request/${id}`, {
        status: filter,
        description: description,
      });

      if (response.data.success) {
        toast.success(
          response.data?.message || "Internal server error",
          toastOptions
        );
      }
      setEditbtn(true);
      setLoading(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Internal server error",
        toastOptions
      );
      setEditbtn(true);
      setError(error);
      setLoading(false);
    }
  };

  const deleteRequest = async () => {
    try {
      setLoading(true);
      const response = await api.delete(`/user/delete-request/${id}`);
      setLoading(false);

      if (response.data.success) {
        // Handle success, you can navigate or perform any other actions
        nevigate("/reviewrequestthree");

        toast.success(
          response.data?.message || "Internal server error",
          toastOptions
        );
      } else {
        // Handle failure
        console.error("Failed to delete affiliate");
        toast.error(
          error?.response?.data?.message || "Internal server error",
          toastOptions
        );
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      // Handle error
      console.error("Error deleting affiliate:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px]  bg-indigo-900 flex h-screen md:hidden justify-start bg-blue overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[43px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
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
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row gap-9 items-start justify-start ml-10 md:ml-[0] w-[78%] md:w-full">
                <div
                  className="font-bold flex  leading-[normal] text-base  text-blue_gray-900_01 text-left w-[17%] md:w-full"
                  placeholderClassName="text-blue_gray-900_01"
                >
                  <Text className="text-blue_gray-900_01   font-lato text-base font-bold">
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
                <div className="flex flex-col gap-[17px] items-end justify-start md:mt-0 mt-1.5 w-5/6 md:w-full">
                  <Text className="text-base text-blue-700 font-bold underline font-lato  cursor-pointer">
                    Download Form
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col gap-9  justify-start p-4 shadow-bs7 w-full">
                    <Text className="mt-0.5 capitalize md:text-3xl text-center sm:text-[28px] text-3xl font-normal source-sans  text-blue_gray-900_01">
                      {type} Footage Request
                    </Text>
                    <div className="flex flex-col font-lato gap-4 items-center justify-start mb-[57px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text className="text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                            Personal Information
                          </Text>
                          <div className="flex flex-col gap-2 font-lato items-start justify-start ml-1 md:ml-[0] mt-3.5 w-[11%] md:w-full">
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
                          <div className="flex flex-row items-center justify-between ml-1 md:ml-[0] mt-[17px] w-[71%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[31%]">
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
                            <div className="flex flex-col gap-2 items-center justify-start w-[24%]">
                              <div className="flex flex-col items-center justify-start">
                                <Text className="text-base text-blue_gray-900_01 font-medium font-lato">
                                  Phone Number:
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-900_01 text-sm"
                                  size="txtLatoRegular14"
                                >
                                  +91{phone}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Text className="mt-10 text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                            Requested footage information
                          </Text>
                          <div className="flex justify-between items-center w-full ">
                            <div className="flex flex-col gap-1.5 items-start justify-start mt-4 w-full md:w-full">
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text className="text-base text-blue_gray-900_01">
                                  Footage Name:
                                </Text>
                              </div>
                              <div className="flex  items-start justify-start w-full md">
                                <Text className="text-blue_gray-900_01 font-normal text-sm">
                                  {footageName}
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5 items-end justify-center -mr-[72px] mt-4 w-full md:w-full">
                              <div className="flex  items-center justify-start w-full ">
                                <Text className="text-base text-blue_gray-900_01">
                                  Footage ID Number:
                                </Text>
                              </div>
                              <div className="flex  items-center justify-start w-full md">
                                <Text className="text-blue_gray-900_01 font-normal text-sm">
                                  {footageId}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col mt-4">
                            <div className="text-[ #303030] font-lato text-base font-medium">
                              Reason for Request:
                            </div>
                            <div className="text-[ #303030] font-lato mt-1   text-sm font-normal leading-7">
                              {reason}
                            </div>
                          </div>

                          <div className="flex flex-col gap-3.5 items-start justify-start mt-10    w-full">
                            <Text className="text-2xl font-lato font-medium text-blue_gray-900_01 sm:text-lg md:text-xl">
                              Additional Information
                            </Text>
                            <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                              <div className="flex flex-col gap-2 items-start justify-start  w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text className="text-base text-lato  text-blue_gray-900_01">
                                    Partnered law firms :
                                  </Text>
                                </div>
                                <div className="flex   items-start justify-start ">
                                  <Text className="font-lato leading-7 text-blue_gray-900_01 font-normal text-sm">
                                    {partneredLawFirms}
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 items-start justify-start mt-8  md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text className="text-base font-medium font-lato text-blue_gray-900_01">
                                Upload Document:
                              </Text>
                            </div>
                            <Text
                              className="text-blue-700 text-sm underline"
                              size="txtLatoRegular14Blue700"
                            >
                              {document}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-sourcesanspro gap-[15px] items-start justify-start mt-[63px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                  size="txtSourceSansProRegular32"
                >
                  Administration Use
                </Text>
                <div className="flex flex-col font-lato items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[28%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-900_01"
                      size="txtLatoBold16"
                    >
                      Approval Status{" "}
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-900_87 border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-full"
                      placeholderClassName="!text-blue_gray-900_87"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="language_One"
                      readOnly={editbtn}
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
                  <div className="flex flex-row gap-2 items-center justify-start mt-7 w-[14%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_solarhamburgermenubroken.svg"
                      alt="solarhamburgerm"
                    />
                    <Text
                      className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                      size="txtLatoMedium22"
                    >
                      Description
                    </Text>
                  </div>
                  <Input
                    name="groupFortySeven"
                    placeholder="Add a more detailed description...."
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] py-2 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[97%]"
                    size="md"
                    value={description}
                    readOnly={editbtn}
                    handleChange={(e) => setDescription(e.target.value)}
                  ></Input>
                </div>
              </div>
            </div>
            <div className="w-full relative mb-10 mt-16 mr-10 flex item-center justify-between">
              <Link
                to="/reviewrequestthree"
                className="flex gap-4 items-center justify-center cursor-pointer  w-[12%]  pl-[5%] "
              >
                {" "}
                <Img
                  className=" h-6  w-6"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Text className="text-[#29207E] font-lato font-bold text-xl">
                  {" "}
                  Back{" "}
                </Text>
              </Link>

              <div className="  relative flex flex-row gap-4 items-center justify-end  w-[50%]">
                <div className="cursor-pointer w-[50%] p-2">
                  {" "}
                  <Button
                    // onClick=}
                    onClick={updateRequest}
                    className="font-bold flex items-center justify-center pl-4 gap-3 rounded-lg leading-[normal] p-3 bg-[#29207E] text-white-A700 text-base w-full  placeholder:"
                    color="red_700"
                  >
                    <Text className="text-center"> Save </Text>
                  </Button>
                </div>

                <div className="cursor-pointer w-[50%] p-2">
                  {" "}
                  <Button
                    onClick={() => {
                      setEditbtn(false);
                    }}
                    className="font-bold   flex items-center pl-4 gap-3 rounded-lg   leading-[normal] p-3 bg-[#29207E] text-white-A700 text-base  w-full  placeholder:"
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

                <div className="cursor-pointer w-[50%] p-2">
                  {" "}
                  <Button
                    onClick={deleteRequest}
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
    </>
  );
};

export default ReviewRequestPage;
