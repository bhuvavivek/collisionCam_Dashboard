import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";
import { CloseSVG } from "../../assets/images";
import Navbar from "components/navbar/Navbar";

const SettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [frame348value, setFrame348value] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChangePassword = async () => {
    try {
      const response = await api.put("/admin/auth/change-password", {
        password: currentPassword,
        newPassword: newPassword,
      });

      // Clear input fields after successful password change
      setCurrentPassword("");
      setNewPassword("");

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

          <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
          <Navbar setToggle={setToggle} toggle={toggle} />



            <div className="flex flex-col md:mt-28 sx:mt-24 font-sourcesanspro items-start justify-start w-[94%] md:w-full">
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
                    className="text-base font-lato font-bold md:text-[13px] text-blue_gray-900_01 w-auto"
                  >
                    General settings
                  </Link>
                  <Link
                    to="/settingstwo"
                    className="text-base font-bold md:text-[13px] text-blue_gray-900_01 font-lato w-auto"
                  >
                    Request settings
                  </Link>
                  <Link
                    to="/settings"
                    className="text-base md:text-[13px] text-blue-700 w-auto font-bold font-lato"
                  >
                    Security settings
                  </Link>
                </div>
                <div className="flex md:hidden flex-col items-center justify-start w-[13%] md:w-full">
                  <Button
                    onClick={handleChangePassword}
                    className="border bg-[#BF9853] text-white-A700 border-[#BF9853] border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                    shape="round"
                    color="#BF9853"
                    size="md"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-2 relative w-full">
                <Line className="bg-blue_gray-100_01 h-px mx-auto w-full" />
                <Line className="bg-blue-700 h-0.5 mb-auto ml-[393px] md:ml-[260px] mt-[-1px] w-[12%] z-[1]" />
              </div>

              <div className="md:flex mt-5 hidden md:flex-1 flex-col items-end justify-start w-[13%] md:w-full">
                <Button
                  className="border border-[#BF9853] bg-[#BF9853] text-white-A700 border-solid cursor-pointer font-bold leading-[normal] min-w-[136px] text-base text-center"
                  shape="round"
                  color="#BF9853"
                  size="md"
                  variant="fill"
                  onClick={handleChangePassword}
                >
                  Save Changes
                </Button>
              </div>

              <div className="flex flex-col font-lato gap-[9px] md:gap-1 md:mt-5 items-start justify-start mt-[45px]">
                <Text
                  className="text-blue_gray-900_01 text-lg"
                  size="txtLatoBold18"
                >
                  Change Password
                </Text>
                <Text
                  className="text-base text-blue_gray-900_a2"
                  size="txtLatoRegular16Bluegray900a2"
                >
                  Update Password information
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato md:gap-4 md:items-start items-center justify-between mt-[21px] w-full">
                <Text
                  className="text-base text-blue_gray-900_01"
                  size="txtLatoBold16"
                >
                  Current Password
                </Text>
                <div className="w-[43%] md:w-full">
                  {" "}
                  <Input
                    name="group161"
                    value={currentPassword}
                    placeholder="Input password"
                    className="!placeholder:text-blue_gray-900_87 !text-blue_gray-900_87 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                    type="text"
                    handleChange={(e) => setCurrentPassword(e.target.value)}
                  ></Input>
                </div>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-6 w-full" />
              <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full">
                  <Text
                    className="text-base text-blue_gray-900_01"
                    size="txtLatoBold16"
                  >
                    New Password
                  </Text>
                  <div className="w-[43%] md:w-full">
                    <Input
                      name="group162"
                      placeholder="Input password"
                      className="!placeholder:text-blue_gray-900_87 !text-blue_gray-900_87 leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100_01 border-solid sm:flex-1 sm:w-full"
                      type="text"
                      value={newPassword}
                      handleChange={(e) => setNewPassword(e.target.value)}
                    ></Input>
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

export default SettingsPage;
