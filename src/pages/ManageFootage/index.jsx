import React from "react";

import { Button, Img, Input, Text } from "components";

import Sidebar1 from "components/Sidebar1";
import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";

const ManageFootagePage = () => {
  const [frame348value, setFrame348value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-12 items-center justify-start md:px-5 w-full">
            {/* SEarch section start */}
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
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
              <Img
                className="h-8 mr-[17px] w-8"
                src="images/img_claritynotificationline.svg"
                alt="claritynotifica"
              />
            </div>
            {/* Search section end */}
            <div className="sm:h-[595px] h-auto md:h-[748px] flex flex-col space-y-24 relative w-[94%] md:w-full">
              {/* Car detail section start  */}
              <div className="relative  flex md:flex-col flex-row gap-9 h-max inset-[0] items-start justify-between mx-auto w-full">
                {/* cardetails-right start */}
                <div className="flex md:flex-1 flex-col md:gap-10 gap-10 justify-start md:mt-0 mt-2 w-[43%] md:w-full">
                  <Img
                    className="h-[331px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle39_331x407.png"
                    alt="rectangleThirtyNine"
                  />
                </div>
                {/* carderails-right end */}
                {/* cardetails-left start  */}
                <div className="flex md:flex-1 flex-col font-sourcesanspro gap-6 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-[55%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <Text className="md:text-3xl sm:text-[28px] text-3xl font-semibold text-blue_gray-900_01 w-auto source-sans">
                        Name: Car crash surveillance
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
                          #1350678
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-sourcesanspro items-center justify-start">
                    <Text className="md:text-3xl sm:text-[28px] text-3xl font-semibold text-blue_gray-900_01 w-auto source-sans">
                      Price: $25.00
                    </Text>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-[57%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[41%]">
                        <Text className="text-center text-gray-900 text-lg  font-lato font-bold leading-6">
                          Date:
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 text-lg"
                          size="txtLatoRegular18"
                        >
                          12/08/2023
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-1 w-[53%]">
                        <Text className="mb-0.5 text-center font-lato text-gray-900 text-lg font-bold leading-6">
                          Time:
                        </Text>
                        <Text
                          className=" text-blue_gray-900_01 text-lg text-left"
                          size="txtLatoRegular18"
                        >
                          10:00 pm GMT+1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <Text className="ml-0.5 md:ml-[0] text-center text-gray-900 text-lg font-bold leading-6">
                        Description:
                      </Text>
                      <Text
                        className="leading-6 text-blue_gray-900_01 text-lg w-[90%]"
                        size="txtLatoRegular18"
                      >
                        Lorem ipsum dolor sit amet consectetur. Pretium pretium
                        nisl pulvinar in in sed sit. Viverra ut morbi feugiat
                        dolor aliquam diam. Consectetur elementum eget neque
                        urna sed viverra. Turpis risus in non eget aliquam
                        tincidunt pharetra.
                      </Text>
                    </div>
                  </div>
                </div>
                {/* car detail left end  */}
              </div>
              {/* car details section end */}

              {/* setions for button and other things  */}

              <div className="w-[90%] relative flex item-center justify-between">
                <Link
                  to="/managefootageone"
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

                <div className="  relative flex flex-row gap-4 items-center justify-end  w-[38%]">
                  <Link to="/edit-form" className="cursor-pointer w-[50%] p-2">
                    {" "}
                    <Button
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
                  </Link>

                  <div className="cursor-pointer w-[50%] p-2">
                    {" "}
                    <Button
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
