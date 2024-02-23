import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Sidebar1 from "components/Sidebar1";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";

const SettingsTwoPage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const [commision, setCommision] = useState("");
  const [termAndCondition, setTermAndCondition] = useState("");
  const [sellclaimterm, setsellClaimTerm] = useState("");
  const [id, setID] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await api.get("/general-settings");
      setTermAndCondition(response.data.settings.affiliateTermsCondition);
      setsellClaimTerm(response.data.settings.sellClaimTermsCondition);
      setID(response.data.settings._id);
      setCommision(response.data.settings.commisionRate);
    } catch (error) {}
  };
  const handleChange = async () => {
    try {
      const response = await api.put(`/general-settings/request/${id}`, {
        commisionRate: commision,
        affiliateTermsCondition: termAndCondition,
        sellClaimTermsCondition: sellclaimterm,
      });

      if (response.data?.success) {
        toast.success(response.data?.message, toastOptions);
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      toast.error(
        error?.response?.data?.message || "Internal server error",
        toastOptions
      );
    }
  };
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className={` transition-transform ${
              toggle ? "translate-x-0" : "-translate-x-full"
            } !sticky md:!fixed z-50 sx:!w-[220px] !w-[262px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
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

          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <Navbar setToggle={setToggle} toggle={toggle} />

            <div className="flex flex-col sx:mt-24 md:mt-28 font-sourcesanspro items-start justify-start mt-[34px] w-[94%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[24px] text-[32px] text-blue_gray-900_01"
                size="txtSourceSansProRegular32"
              >
                Settings
              </Text>
              <div className="flex md:flex-col flex-row font-lato md:gap-10 items-end justify-between mt-5 md:mt-3 w-full">
                <div className="flex md:justify-between flex-row sm:gap-2 gap-20 items-start justify-start md:mt-0 mt-6 w-auto sm:w-full">
                  <Link
                    to="/settingsone"
                    className="text-base md:text-[13px] font-lato font-bold  text-blue_gray-900_01 w-auto"
                  >
                    General settings
                  </Link>
                  <Link
                    to="/settingstwo"
                    className="text-base md:text-[13px] font-bold font-lato text-blue-700 w-auto"
                  >
                    Request settings
                  </Link>
                  <Link
                    to="/settings"
                    className="text-base md:text-[13px] text-blue_gray-900_01 w-auto font-bold font-lato"
                  >
                    Security settings
                  </Link>
                </div>
                <div className="flex md:hidden flex-col items-center justify-start w-[13%] md:w-full">
                  <Button
                    className="border border-[#BF9853] bg-[#BF9853] text-white-A700 border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                    shape="round"
                    color="#BF9853"
                    onClick={handleChange}
                    size="md"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-2 relative w-full">
                <Line className="bg-blue_gray-100_01 h-px mx-auto w-full" />
                <Line className="bg-blue-700 h-0.5 mb-auto ml-[193px] md:ml-[127px] mt-[-1px] w-[12%] z-[1]" />
              </div>

              <div className="md:flex mt-5 hidden md:flex-1 flex-col items-end justify-start w-[13%] md:w-full">
                <Button
                  className="border border-[#BF9853] bg-[#BF9853] text-white-A700 border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                  shape="round"
                  color="#BF9853"
                  size="md"
                  variant="fill"
                  onClick={handleChange}
                >
                  Save Changes
                </Button>
              </div>
              <div className="flex flex-col font-lato gap-[9px] md:gap-1 items-start justify-start mt-[45px] md:mt-5">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Affiliate Program settings
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your Affiliate program information
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-4 md:items-start items-center justify-between mt-[21px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Commission Rate
                </Text>
                <div className="w-[43%] md:w-full">
                  {" "}
                  <Input
                    name="group161"
                    value={commision}
                    handleChange={(e) => {
                      setCommision(e.target.value);
                    }}
                    placeholder="Input text here"
                    className="!placeholder:text-blue_gray-900_87 !text-blue_gray-900_87 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[35px] w-full" />
              <div className="flex md:flex-col flex-row font-lato md:gap-4 items-start justify-between mt-6 w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5">
                  <Text
                    className="text-base text-blue_gray-900_01"
                    size="txtLatoBold16"
                  >
                    Terms and Conditions
                  </Text>
                </div>

                <div className="w-[43%] md:w-full">
                  {" "}
                  <TextArea
                    className="bg-white-A700 border border-blue_gray-100_01 border-solid sm:flex-1 leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-lg shadow-bs1 text-base placeholder:text-blue_gray-900_87 text-blue_gray-900_87 text-left w-full sm:w-full"
                    name="group164"
                    placeholder="Input text here"
                    value={termAndCondition}
                    onChange={setTermAndCondition}
                  ></TextArea>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[26px] w-full" />
            </div>

            <div className="flex flex-col pb-14 md:pb-2 font-lato gap-6 items-start justify-start md:mt-8 mt-[50px] w-[94%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Sell your Claim
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your information
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-4 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-center md:mt-0 mt-2.5">
                  <Text
                    className="text-base text-blue_gray-900_01"
                    size="txtLatoBold16"
                  >
                    Terms and Conditions
                  </Text>
                </div>
                <div className="w-[43%] md:w-full">
                  {" "}
                  <TextArea
                    className="bg-white-A700  w-full border border-blue_gray-100_01 border-solid sm:flex-1 leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-lg shadow-bs1 text-base placeholder:text-blue_gray-900_87 text-blue_gray-900_87 text-left  sm:w-full"
                    name="group164_One"
                    placeholder="Input text here"
                    value={sellclaimterm}
                    onChange={setsellClaimTerm}
                  ></TextArea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTwoPage;
