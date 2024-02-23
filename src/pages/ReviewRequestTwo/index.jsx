import React, { useEffect } from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import { useRef, useState } from "react";

import Sidebar1 from "components/Sidebar1";
import Loading from "components/loading";
import Navbar from "components/navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import { formatDateTime, toastOptions } from "utils";
import { api } from "utils/api";

const buttonOptionsList = [
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "reject" },
  { label: "Pending", value: "pending" },
];

const ReviewRequestTwoPage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const nevigate = useNavigate();
  const location1 = useLocation();
  const queryParams = new URLSearchParams(location1.search);
  const id = queryParams.get("id");
  const [loading, setLoading] = useState(true);
  const [reviewRequest, SetReviewRequest] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [description, setDescription] = useState("");
  const [editbtn, setEditbtn] = useState(true);
  const [toggle, setToggle] = useState(false);

  const pdfRef = useRef();

  const dowloadForm = useReactToPrint({
    content: () => pdfRef.current,
  });

  useEffect(() => {
    const fetchReviewRequest = async () => {
      try {
        const response = await api.get(`/user/get-single-partnerd-firms/${id}`);
        SetReviewRequest(response.data.result);
        setDescription(response.data.result.description);
        setFilter(response.data.result.status);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchReviewRequest();
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
    documents,
    createdAt,
    address,
    aboutUs,
    comment,
  } = reviewRequest;

  const updateRequest = async () => {
    try {
      const response = await api.put(`/user/update-partnerd-firms/${id}`, {
        status: filter,
        description: description,
      });

      if (response.data.success) {
        toast.success(
          response.data?.message || "Internal server error",
          toastOptions
        );
        nevigate("/reviewrequestthree", { state: "old" });
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
      const response = await api.delete(`/user/delete-partnerd-firms/${id}`);
      setLoading(false);

      if (response.data.success) {
        // Handle success, you can navigate or perform any other actions
        nevigate("/reviewrequestthree", { state: "old" });

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
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto  w-full">
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

          <div className="flex flex-1 flex-col gap-[43px] items-center justify-start md:px-5 w-full">
            <Navbar setToggle={setToggle} toggle={toggle} />

            <div className="flex flex-col md:mt-24 items-start justify-start w-[94%] md:w-full">
              <div className="flex justify-between w-full">
                <div
                  className="font-bold flex  leading-[normal] text-base  text-blue_gray-900_01 text-left w-[17%] md:w-[50%]"
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

                <Text
                  onClick={dowloadForm}
                  className="text-base text-[#1b1b1b] sx:text-sm mr-48 md:mr-0 font-bold underline font-lato cursor-pointer"
                >
                  Download Form
                </Text>
              </div>

              <div className="flex flex-col font-sourcesanspro items-center justify-start md:ml-[0] ml-[183px] mt-3 w-[67%] md:w-full">
                <div className="bg-white-A700 border border-blue_gray-100_d9 border-solid flex flex-col gap-[37px] items-center justify-start p-4 md:p-0 shadow-bs7 w-full">
                  <div
                    ref={pdfRef}
                    className="flex flex-col gap-[37px] md:gap-5 sx:gap-3 justify-start p-4 sx:p-3 w-full"
                  >
                    <Text
                      className="mt-0.5 md:text-3xl sm:text-[28px] sx:text-2xl text-center text-[32px] text-blue_gray-900_01"
                      size="txtSourceSansProRegular32"
                    >
                      Partnered Firms
                    </Text>

                    <div className="flex flex-col font-lato items-center justify-start mb-6 md:mb-2 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                          size="txtLatoMedium22"
                        >
                          Personal Information
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] mt-3.5 w-[11%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Full Name:
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-blue_gray-900_01 text-sm"
                              size="txtLatoRegular14"
                            >
                              {full_name}
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row sx:gap-3 sx:flex-wrap items-center justify-between ml-1 md:ml-[0] mt-[17px] w-[71%] md:w-full">
                          <div className="flex sx:w-full flex-col gap-[9px] items-start justify-start w-[31%]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Email address:
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                {email}
                              </Text>
                            </div>
                          </div>

                          <div className="flex sx:w-full sx:items-start flex-col gap-2 items-center justify-start w-[24%]">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Phone Number:
                              </Text>
                            </div>
                            <div className="flex flex-col items-center sx:items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                +91 {phone}
                              </Text>
                            </div>
                          </div>
                        </div>

                        <List
                          className="sm:flex-col flex-row md:gap-5 gap-[271px] grid sm:grid-cols-1 grid-cols-2 mt-3.5 w-[77%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Date of Incident:
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                {formatDateTime(createdAt)}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtLatoMedium16"
                              >
                                Address:
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-blue_gray-900_01 text-sm"
                                size="txtLatoRegular14"
                              >
                                {address}
                              </Text>
                            </div>
                          </div>
                        </List>

                        <div className="flex flex-col gap-2 items-start justify-start w-full mt-4">
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

                        <Text
                          className="mt-3 text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
                          size="txtLatoMedium22"
                        >
                          Additional Informations:
                        </Text>

                        <div className="flex flex-col gap-2 items-start justify-start mt-2 w-[26%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtLatoMedium16"
                            >
                              Comments & Questions:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start  justify-start w-[18px] md:w-full">
                            <Text
                              className="text-blue_gray-900_01 text-sm"
                              size="txtLatoRegular14"
                            >
                              {comment}
                            </Text>
                          </div>
                        </div>

                        <div className="flex flex-col items-start justify-start mt-[17px]">
                          <Text
                            className="text-base text-blue_gray-900_01"
                            size="txtLatoMedium16"
                          >
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-sourcesanspro gap-[15px] items-start justify-start mt-[63px] md:mt-8 w-full">
                <Text
                  className="md:text-3xl sx:text-xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                  size="txtSourceSansProRegular32"
                >
                  Administration Use
                </Text>
                <div className="flex flex-col font-lato items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[28%] md:w-full">
                    <Text
                      className="text-base sx:text-sm text-blue_gray-900_01"
                      size="txtLatoBold16"
                    >
                      Approval Status{" "}
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-900_87 border border-gray-500_7f border-solid font-semibold text-left text-sm w-3/5 sm:w-[60%] sx:w-1/2"
                      placeholderClassName="!text-blue_gray-900_87"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      readOnly={editbtn}
                      value={filter}
                      onChange={(status) => {
                        setFilter(status);
                      }}
                      name="language_One"
                      options={buttonOptionsList}
                      isSearchable={false}
                      placeholder={filter === "reject" ? "Rejected" : filter}
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-7 sx:mt-4 w-[14%] md:w-full">
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
                    readOnly={editbtn}
                    value={description}
                    handleChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a more detailed description...."
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] py-3 text-base text-left w-full "
                    wrapClassName="border border-blue_gray-100_01 border-solid ml-10 md:ml-[0] mt-4 w-[97%]"
                    size="md"
                  ></Input>
                </div>
              </div>
              <div className="w-full relative mb-10 mt-16 md:mt-10 md:mr-0 md:flex-col-reverse mr-10 flex item-center justify-between">
                <Link
                  to="/reviewrequestthree"
                  className="flex gap-4 items-center justify-center md:justify-start cursor-pointer  w-[12%] md:w-[50%]  pl-[5%] md:pl-0 md:mt-4 "
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

                <div className=" md:w-full sx:justify-between relative sx:flex-wrap flex flex-row gap-4 items-center justify-end  w-[50%]">
                  <div className="cursor-pointer w-[50%] md:w-[30%] sx:w-[45%] p-2 md:p-0">
                    {" "}
                    <Button
                      // onClick=}
                      onClick={updateRequest}
                      className="font-bold flex items-center justify-center pl-4 gap-3 rounded-lg leading-[normal] p-3 md:py-[14px] bg-[#BF9853] text-white-A700 text-base w-full  placeholder:"
                      color="#BF9853"
                    >
                      <Text className="text-center"> Save </Text>
                    </Button>
                  </div>

                  <div className="cursor-pointer w-[50%] sx:w-[45%] md:w-[35%] p-2 md:p-0">
                    {" "}
                    <Button
                      onClick={() => {
                        setEditbtn(false);
                      }}
                      className="font-bold   flex items-center pl-4 gap-3 rounded-lg   leading-[normal] p-3 bg-[#BF9853] text-white-A700 text-base  w-full  placeholder:"
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

                  <div className="cursor-pointer w-[50%] sx:w-full md:w-[35%] md:p-0 p-2">
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
      </div>
    </>
  );
};

export default ReviewRequestTwoPage;
