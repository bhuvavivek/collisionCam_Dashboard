import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, Switch, Text } from "components";
import { Link } from "react-router-dom";

import Sidebar1 from "components/Sidebar1";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";

const SettingsOnePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [id, setID] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/general-settings");
      const response2 = await api.get("/admin/auth/profile");

      setPhone(response2?.data?.user?.phone);
      setAddress(response2?.data?.user?.address);
      setEmail(response2?.data?.user?.email);
      setID(response?.data?.settings?._id);
      setSwitch1(response?.data?.settings?.sellClaimRequest);
      setSwitch2(response?.data?.settings?.affiliateRequest);
      setSwitch3(response?.data?.settings?.freeFootageRequest);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async () => {
    try {
      const response = await api.put("/admin/auth/general-settings", {
        phone: phone,
        address: address,
        email: email,
      });
      const response2 = await api.put(`/general-settings/notification/${id}`, {
        sellClaimRequest: switch1,
        affiliateRequest: switch2,
        freeFootageRequest: switch3,
      });

      if (response.data?.success && response2.data?.success) {
        toast.success(response.data?.message, toastOptions);
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      toast.error(
        error?.response?.data?.message ||
          error?.response2?.data.message ||
          "Internal server error",
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

          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <Navbar setToggle={setToggle} toggle={toggle} />

            <div className="flex flex-col sx:mt-24 font-sourcesanspro md:mt-28 items-start justify-start mt-[34px] w-[94%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[24px] text-[32px] text-blue_gray-900_01"
                size="txtSourceSansProRegular32"
              >
                Settings
              </Text>

              <div className="flex md:flex-wrap flex-row font-lato md:gap-10 items-end justify-between mt-5 md:mt-3 w-full">
                <div className="flex  md:justify-between  flex-row gap-20 md:gap-2 items-start justify-start md:mt-0 mt-6 w-auto sm:w-full">
                  <Link
                    to="/settingsone"
                    className="text-base  md:text-[13px] font-lato font-bold text-blue-700 w-auto"
                  >
                    General settings
                  </Link>
                  <Link
                    to="/settingstwo"
                    className="text-base font-bold md:text-[13px]  font-lato text-blue_gray-900_01 w-auto"
                  >
                    Request settings
                  </Link>
                  <Link
                    to="/settings"
                    className="text-base text-blue_gray-900_01 md:text-[13px]  w-auto font-bold font-lato"
                  >
                    Security settings
                  </Link>
                </div>
                <div className="flex md:hidden md:flex-1 flex-col items-center justify-start w-[13%] md:w-full">
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
              </div>
              <div className="flex flex-col mt-2 relative w-full">
                <Line className="bg-blue_gray-100_01 h-px mx-auto w-full" />
                <Line className="bg-blue-700 h-0.5 mb-auto mt-[-1px] w-[11%] z-[1]" />
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

              <div className="flex flex-col font-lato gap-[9px] md:gap-1 items-start justify-start md:mt-5 mt-[45px]">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Company Information
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update your company information
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-4 md:items-start items-center justify-between mt-[13px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Phone Number
                </Text>
                <div className="w-[38%] md:w-full">
                  <Input
                    type="text"
                    value={phone}
                    handleChange={(e) => {
                      // Only update the state if the input value is empty or a 10-digit number
                      if (
                        e.target.value === "" ||
                        /^[0-9]{1,10}$/.test(e.target.value)
                      ) {
                        setPhone(e.target.value);
                      }
                    }}
                    name="group161"
                    placeholder={phone}
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[19px] w-full" />
              <div className="flex sm:flex-col flex-row font-lato md:gap-4 md:items-start items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Email Address
                </Text>

                <div className="w-[38%] md:w-full">
                  <Input
                    value={email}
                    handleChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    placeholder="bhuvavivek65@gmail.com"
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                    type="email"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[23px] w-full" />
              <div className="flex sm:flex-col flex-row font-lato md:gap-4 md:items-start items-center justify-between mt-6 w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Address
                </Text>
                <div className="w-[38%] md:w-full">
                  {" "}
                  <Input
                    name="timeZone"
                    value={address}
                    handleChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="ahmedabad"
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[26px] w-full" />
            </div>
            <div className="flex flex-col font-lato pb-14 items-start justify-start mt-[49px] md:mt-8 w-[94%] md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Notification Preference
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Turn on/off the notification{" "}
                </Text>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[22px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Sell your claim request
                </Text>
                <Switch
                  value={switch1}
                  onChange={(e) => {
                    setSwitch1(e);
                  }}
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  className=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px md:ml-[0] ml-[9px] mt-[30px] w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Affiliate request
                </Text>
                <Switch
                  value={switch2}
                  onChange={(e) => {
                    setSwitch2(!switch2);
                  }}
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  className=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px ml-1.5 md:ml-[0] mt-6 w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Free footage request
                </Text>
                <Switch
                  value={switch3}
                  onChange={(e) => {
                    setSwitch3(!switch3);
                  }}
                  onColor="#4b9c4fcc"
                  offColor="#c8d2c8"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
