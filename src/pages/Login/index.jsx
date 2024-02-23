import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] overflow-hidden bg-white-A700 flex flex-col font-lato items-end justify-start mx-auto pb-[106px] md:pl-10 sm:pl-0 pl-[106px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1204px] mx-auto w-full">
          <div className="flex  md:flex-1 md:mt-[15vh] sx:mt-20 flex-col items-center justify-start mt-[170px] w-[36%] md:w-[90%] md:mx-auto">
            <Img
              className="h-[79px] md:h-[80px]  mx-auto object-contain w-[34%] sm:w-[50%] md:mx-auto"
              src="images/img_image1.png"
              alt="imageOne"
            />
           <div className="flex flex-col gap-[50px] md:gap-9 items-start justify-start w-[429px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col justify-start pt-[3px] px-[3px] w-full">
                  <Text
                    className="ml-0 text-center mx-0 sx:text-2xl sm:text-[30px] md:text-[38px] text-[35px]  text-blue_gray-900 font-semibold font-sourcesanspro"
                    size="txtSourceSansProSemiBold40"
                  >
                    Forgot your password?
                  </Text>
                  <Text
                    className="mt-1 text-center sx:text-sm text-base  text-[#BF9853]"
                    size="txtLatoRegular16"
                  >
                    Enter your email below to receive password reset
                    instructions{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900_01 w-auto"
                        size="txtLatoMedium16"
                      >
                        Email
                      </Text>
                      <Input
                        name="input"
                        placeholder="Enter your email"
                        className="!placeholder:text-blue_gray-500_99 !text-blue_gray-500_99 leading-[normal] p-0 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="common-pointer !bg-[#BF9853] cursor-pointer font-bold leading-[normal] rounded-[19px] shadow-bs text-base text-center w-full"
                    onClick={() => navigate("/dashboard")}
                    color="indigo_900"
                    size="sm"
                    variant="fill"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-semibold h-5 min-w-[88px] mt-4 text-center text-[#BF9853] text-sm"
              onClick={() => navigate("/loginone")}
              size="xs"
            >
              Back to Log In
            </Button>
          </div>
          <div className="h-[918px] md:hidden relative w-[53%] md:w-full">
            <div className="absolute backdrop-opacity-[0.5] bg-[#BF9853] blur-[250.00px] bottom-[30%] h-[253px] right-[27%] rounded-[126px] w-[253px]"></div>
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

export default LoginPage;
