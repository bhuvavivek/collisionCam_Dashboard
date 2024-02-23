import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import Loading from "components/loading";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { convertDateFormat, toastOptions } from "utils";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";

const ManageFootagePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const nevigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'footageid' query parameter
  const footageId = queryParams.get("footageid");

  const [footageDetails, setFootageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchFootageDetails = async () => {
      try {
        const response = await api.get(
          `/admin/footage/details-private/${footageId}`
        );
        setFootageDetails(response.data.result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setError(error);
        setLoading(false);
      }
    };

    if (footageId) {
      fetchFootageDetails();
    }
  }, [footageId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Assuming footageDetails has the structure of the API response
  const { name, price, id, description, date, time, thumbnail, video } =
    footageDetails;

  const deleteFootageDetails = async () => {
    try {
      const { data } = await api.delete(`/admin/footage/delete/${footageId}`);
      setLoading(false);
      if (data.success) {
        nevigate("/managefootageone");
        toast.success(data?.message || "Internal server error", toastOptions);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`${
          toggle && "max-h-screen overflow-hidden"
        }  h-screen flex flex-col font-lato items-center justify-start mx-auto w-full`}>
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
            {/* SEarch section start */}

            <Navbar setToggle={setToggle} toggle={toggle} />
            {/* Search section end */}
            <div className="sm:h-auto md:pt-24 h-auto md:min-h-[508px] flex flex-col space-y-24 sx:space-y-6 relative w-[94%] md:w-full">
              {/* Car detail section start  */}
              <div className="relative  flex md:flex-col flex-row gap-9 h-max inset-[0] items-start justify-between mx-auto w-full">
                {/* cardetails-right start */}
                <div className="flex md:flex-1 flex-col md:gap-10  gap-10 justify-start md:mt-0 mt-2 w-[43%] md:w-full">
                  {video ? (
                    <video width="100%" height="100%" controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Img
                      className="h-[331px] sm:h-auto object-cover w-full"
                      src={thumbnail}
                      alt="Footage Thumbnail"
                    />
                  )}
                </div>
                {/* carderails-right end */}
                {/* cardetails-left start  */}
                <div className="flex md:flex-1 flex-col font-sourcesanspro gap-6 md:gap-3 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[55%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <Text className="md:text-3xl sm:text-[24px] text-3xl font-semibold text-blue_gray-900_01 w-auto source-sans">
                        Name:{name}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-[18%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text className="text-center text-gray-900 text-lg font-bold leading-6 ">
                          ID:
                        </Text>
                        <Text className="text-blue_gray-900_01 text-lg font-normal font-lato">
                          {id}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-sourcesanspro items-center justify-start">
                    <Text className="md:text-3xl sm:text-[24px] text-3xl font-semibold text-blue_gray-900_01 w-auto source-sans">
                      Price:${price}
                    </Text>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-[57%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-full ">
                      <div className="flex flex-row gap-1.5 sx:items-end items-start justify-start w-[41%] md:w-[45%]">
                        <Text className="text-center sx:text-base text-gray-900 text-lg  font-lato font-bold leading-6">
                          Date:
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 sx:text-sm sx:whitespace-nowrap text-lg"
                          size="txtLatoRegular18"
                        >
                          {convertDateFormat(date || '')}
                        </Text>
                      </div>
                      <div className="flex flex-row sx:items-center items-start justify-start gap-1 w-[53%]">
                        <Text className="mb-0.5 sx:text-base text-center font-lato text-gray-900 text-lg font-bold leading-6">
                          Time:
                        </Text>
                        <Text
                          className=" text-blue_gray-900_01 sx:text-sm text-lg text-left"
                          size="txtLatoRegular18"
                        >
                          {time}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-start justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <Text className="ml-0.5 md:ml-[0] text-center text-gray-900 text-lg font-bold leading-6">
                        Description:
                      </Text>
                      <Text
                        className="leading-6 text-blue_gray-900_01 text-lg w-[90%]"
                        size="txtLatoRegular18"
                      >
                        {description} 
                      </Text>
                    </div>
                  </div>
                </div>
                {/* car detail left end  */}
              </div>
              {/* car details section end */}

              {/* setions for button and other things  */}

              <div className="w-[100%] sx:flex-wrap relative flex item-center justify-between">
                <Link
                  to="/managefootageone"
                  className="flex gap-4 md:gap-2 items-center justify-center cursor-pointer  md:w-[28%] md:justify-start w-[12%]  pl-[5%] md:pl-0 "
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

                <div className="  relative flex sx:w-full flex-row gap-4 md:gap-2 items-center justify-end md:w-[70%]  w-[38%]">
                  <Link
                    to={"/edit-form/" + footageId}
                    className="cursor-pointer w-[50%] p-2"
                  >
                    {" "}
                    <Button
                      className="font-bold  flex items-center pl-4 gap-3 rounded-lg   leading-[normal] p-3 bg-[#BF9853] text-white-A700 text-base  w-full  placeholder:"
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
                  </Link>

                  <div className="cursor-pointer w-[50%] p-2">
                    {" "}
                    <Button
                      onClick={deleteFootageDetails}
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
              {/* sections is end  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageFootagePage;
