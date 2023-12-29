import { useLocation, useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import { AppContext } from "pages/store/AppContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const LoginOnePage = () => {
  const navigate = useNavigate();

  const { user, isDataLoaded, setUser } = useContext(AppContext);

  const [email, setEmail] = useState("adas");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const returnTo = queryParams.get("returnTo");

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/admin/auth/login", { email, password });
      if (data?.success) {
        window.localStorage.setItem("token", data?.token);
        setUser(data?.user);
        toast.success(data?.message, toastOptions);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Internal server error",
        toastOptions
      );
    }
  };

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    if (user) {
      return navigate(returnTo ? "/" + returnTo : "/");
    }
  }, [user, isDataLoaded]);

  if (!isDataLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="h-[100vh] overflow-hidden bg-white-A700 flex flex-col font-lato items-end justify-start mx-auto pb-[106px] md:pl-10 sm:pl-5 pl-[106px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1203px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col gap-6 justify-start md:mt-0 mt-[90px] w-[36%] md:w-full">
            <Img
              className="h-[79px] md:h-auto md:ml-[0] ml-[119px] object-cover w-[34%] sm:w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="flex flex-col gap-[50px] items-start justify-start w-[429px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col justify-start pt-[3px] px-[3px] w-full">
                  <Text
                    className="md:ml-[0] mx-[21px] sm:text-4xl md:text-[38px] text-[35px]  text-blue_gray-900"
                    size="txtSourceSansProSemiBold40"
                  >
                    Log in to your account
                  </Text>
                  <Text
                    className="ml-14 md:ml-[0] mt-1 text-base text-indigo-900"
                    size="txtLatoRegular16"
                  >
                    Welcome back! Please enter your details.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text className=" text-blue_gray-900_01 w-auto font-lato text-base font-medium ">
                        Email
                      </Text>
                      <Input
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Enter your email"
                        className="!placeholder:text-blue_gray-500_99 !text-blue_gray-500_99 leading-[normal] p-0 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text className=" text-blue_gray-900_01 w-auto text-base font-lato font-medium">
                        Password
                      </Text>
                      <Input
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                        name="input"
                        type="password"
                        placeholder="••••••••"
                        className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-inter p-0 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid w-full"
                        size="sm"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  {/* <div className="flex flex-1 flex-row gap-2 items-start justify-start w-full">
                    <Img
                      className="h-[18px] max-h-[18px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text className="text-base text-blue_gray-900_01 w-full  font-lato font-medium">
                        Keep me logged in
                      </Text>
                    </div>
                  </div> */}
                  <Button
                    className="common-pointer bg-transparent leading-5  cursor-pointer font-semibold h-5 text-center text-indigo-900 text-sm"
                    onClick={() => navigate("/login")}
                    size="xs"
                  >
                    Forgot password
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Button
                    className="common-pointer cursor-pointer font-bold font-lato leading-[normal] rounded-[19px] shadow-bs text-base text-center w-full"
                    onClick={handleLogin}
                    color="indigo_900"
                    size="sm"
                    variant="fill"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[918px] relative w-[53%] md:w-full">
            <div className="absolute backdrop-opacity-[0.5] bg-indigo-900 blur-[250.00px] bottom-[30%] h-[253px] right-[27%] rounded-[126px] w-[253px]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-blue-700 blur-[250.00px] h-[322px] right-[22%] rounded-[50%] top-[23%] w-[322px]"></div>
            <Img
              className="absolute h-[918px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle501.png"
              alt="rectangle501"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOnePage;
