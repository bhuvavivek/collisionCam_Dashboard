import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] overflow-hidden bg-white-A700 flex flex-col font-lato items-end justify-start mx-auto pb-[106px] md:pl-10 sm:pl-5 pl-[106px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1204px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[199px] w-[36%] md:w-full">
            <Img
              className="h-[79px] md:h-auto object-cover w-[34%] sm:w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="flex flex-col gap-10 items-start justify-start mt-6 w-[431px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pt-[3px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                    size="txtSourceSansProSemiBold40"
                  >
                    Forgot your password?
                  </Text>
                  <Text
                    className="mt-1 text-base text-indigo-900"
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
                    className="common-pointer cursor-pointer font-bold leading-[normal] rounded-[19px] shadow-bs text-base text-center w-full"
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
              className="common-pointer bg-transparent cursor-pointer font-semibold h-5 min-w-[88px] mt-4 text-center text-indigo-900 text-sm"
              onClick={() => navigate("/loginone")}
              size="xs"
            >
              Back to Log In
            </Button>
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

export default LoginPage;
