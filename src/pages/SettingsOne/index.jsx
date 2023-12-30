import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, Switch, Text } from "components";
import { Link } from "react-router-dom";

import Sidebar1 from "components/Sidebar1";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";

const SettingsOnePage = () => {
  const [frame348value, setFrame348value] = React.useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setID] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/general-settings");
      const response2 = await api.get("/admin/auth/profile");

      setPhone(response2.data.user.phone);
      setAddress(response2.data.user.address);
      setEmail(response2.data.user.email);
      setID(response.data.settings._id);
      setSwitch1(response.data.settings.sellClaimRequest);
      setSwitch2(response.data.settings.affiliateRequest);
      setSwitch3(response.data.settings.freeFootageRequest);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
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
          <Sidebar1 className="!sticky !w-[262px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 shadow-bs1 w-full">
              <div className="w-[43%]">
                {" "}
                <Input
                  name="frame348"
                  placeholder="Search "
                  value={frame348value}
                  onChange={(e) => setFrame348value(e)}
                  className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 leading-[normal] p-0 text-base  w-full"
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
            <div className="flex flex-col font-sourcesanspro items-start justify-start mt-[34px] w-[94%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                size="txtSourceSansProRegular32"
              >
                Settings
              </Text>
              <div className="flex md:flex-col flex-row font-lato md:gap-10 items-end justify-between mt-5 w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start md:mt-0 mt-6 w-auto sm:w-full">
                  <Link
                    to="/settingsone"
                    className="text-base font-lato font-bold text-blue-700 w-auto"
                  >
                    General settings
                  </Link>
                  <Link
                    to="/settingstwo"
                    className="text-base font-bold font-lato text-blue_gray-900_01 w-auto"
                  >
                    Request settings
                  </Link>
                  <Link
                    to="/settings"
                    className="text-base text-blue_gray-900_01 w-auto font-bold font-lato"
                  >
                    Security settings
                  </Link>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[13%] md:w-full">
                  <Button
                    className="border border-indigo-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                    shape="round"
                    color="indigo_900"
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
              <div className="flex flex-col font-lato gap-[9px] items-start justify-start mt-[45px]">
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
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[13px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Phone Number
                </Text>
                <div className="w-[38%]">
                  <Input
                    type="number"
                    value={phone}
                    handleChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    name="group161"
                    placeholder="+91 9313114789"
                    className="!placeholder:text-blue_gray-900_90 !text-blue_gray-900_90 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[19px] w-full" />
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-[23px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Email Address
                </Text>

                <div className="w-[38%]">
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
              <div className="flex sm:flex-col flex-row font-lato md:gap-10 items-center justify-between mt-6 w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Address
                </Text>
                <div className="w-[38%]">
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
            <div className="flex flex-col font-lato pb-14 items-start justify-start mt-[49px] w-[94%] md:w-full">
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
