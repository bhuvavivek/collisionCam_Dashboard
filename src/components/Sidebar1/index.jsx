import { Menu, Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";
import { AppContext } from "pages/store/AppContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "utils";

const Sidebar1 = (props) => {
  const { setUser, user } = useContext(AppContext);
  const location = useLocation();

  const handleButtonClick = () => {
    // Use navigate to navigate to a different route
    window.localStorage.clear();
    setUser(null);
    toast.success("Logout successfull", toastOptions);
  };
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-8 w-8 md:w-6 md:h-6"
          src="images/img_icoutlinedashboard.svg"
          alt="icoutlinedashbo"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img
          className="h-8 w-8 md:w-6 md:h-6"
          src="images/img_fluentvideo24regular.svg"
          alt="fluentvideo24re"
        />
      ),
      label: "Manage Footage",
      href: "/managefootageone",
      active: window.location.pathname === "/managefootageone",
    },
    {
      icon: (
        <Img
          className="h-8 w-8 md:w-6 md:h-6"
          src="images/img_edit_white_a700.svg"
          alt="edit"
        />
      ),
      label: "Inquires",
      href: "/reviewrequestthree",
      active: window.location.pathname === "/reviewrequest",
    },
    {
      icon: (
        <Img className="h-8 w-8" src="images/img_arrowup.svg" alt="arrowup" />
      ),
      label: "Manage Affiliate",
      href: "/manageaffiliate",
      active: window.location.pathname === "/manageaffiliate",
    },
    {
      icon: (
        <Img
          className="h-8 w-8 md:w-6 md:h-6"
          src="images/subscription.png"
          alt="subscription"
        />
      ),
      label: "Manage Subscriptions",
      href: "/manage-subscriptions",
      active: window.location.pathname === "/manage-subscriptions",
    },
    {
      icon: (
        <Img
          className="h-8 w-8 md:w-6 md:h-6"
          src="images/subscription.png"
          alt="subscription"
        />
      ),
      label: "Payment History",
      href: "/payment-history",
      active: window.location.pathname === "/payment-history",
    },

    {
      icon: (
        <div className="w-8 h-8 md:w-6 md:h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.0007 18.6667C17.4734 18.6667 18.6673 17.4728 18.6673 16C18.6673 14.5273 17.4734 13.3334 16.0007 13.3334C14.5279 13.3334 13.334 14.5273 13.334 16C13.334 17.4728 14.5279 18.6667 16.0007 18.6667Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M7.19898 7.84003L7.69898 6.97336C7.50267 6.86012 7.27372 6.81691 7.04964 6.85083C6.82556 6.88474 6.61965 6.99376 6.46564 7.16003L7.19898 7.84003ZM4.53364 12.4587L3.57764 12.1627C3.51077 12.3793 3.51947 12.6122 3.60232 12.8232C3.68517 13.0342 3.83726 13.2108 4.03364 13.324L4.53364 12.4587ZM4.53098 19.54L4.03098 18.6734C3.83455 18.7869 3.68255 18.9638 3.59993 19.175C3.51731 19.3863 3.50898 19.6194 3.57631 19.836L4.53098 19.54ZM7.19764 24.1587L6.46431 24.8387C6.61831 25.005 6.82423 25.114 7.04831 25.1479C7.27238 25.1818 7.50134 25.1386 7.69764 25.0254L7.19764 24.1587ZM13.331 27.6987H12.331C12.331 28.1654 12.655 28.5694 13.1096 28.6734L13.331 27.6987ZM18.6656 27.7014L18.8883 28.6774C19.1093 28.6269 19.3066 28.5028 19.4479 28.3255C19.5891 28.1481 19.6659 27.9281 19.6656 27.7014H18.667H18.6656ZM24.8003 24.16L24.3003 25.0267C24.4966 25.1399 24.7256 25.1831 24.9496 25.1492C25.1737 25.1153 25.3796 25.0063 25.5336 24.84L24.8003 24.16ZM27.4643 19.5387L28.4203 19.8347C28.4872 19.6181 28.4785 19.3852 28.3956 19.1742C28.3128 18.9632 28.1607 18.7866 27.9643 18.6734L27.4643 19.5387ZM27.467 12.4574L27.967 13.324C28.1634 13.2105 28.3154 13.0336 28.398 12.8224C28.4806 12.6111 28.489 12.378 28.4216 12.1614L27.467 12.4574ZM24.8003 7.83736L25.5336 7.1587C25.3796 6.99243 25.1737 6.88341 24.9496 6.84949C24.7256 6.81558 24.4966 6.85878 24.3003 6.97203L24.8003 7.8387V7.83736ZM18.667 4.30003H19.667C19.6669 4.07355 19.59 3.8538 19.4488 3.67674C19.3076 3.49967 19.1104 3.37579 18.8896 3.32536L18.667 4.30003ZM13.3336 4.29736L13.111 3.32136C12.89 3.37184 12.6927 3.49592 12.5514 3.67326C12.4102 3.85059 12.3334 4.07066 12.3336 4.29736H13.3336ZM5.48964 12.7547C5.97493 11.1773 6.80937 9.7294 7.93098 8.51869L6.46431 7.1587C5.1389 8.58933 4.15272 10.3001 3.57898 12.164L5.48964 12.7547ZM6.47364 21.5C6.06183 20.788 5.73089 20.0322 5.48698 19.2467L3.57764 19.8374C3.86523 20.7655 4.25565 21.6586 4.74164 22.5L6.47364 21.5ZM7.93231 23.4814C7.37378 22.8773 6.88452 22.2128 6.47364 21.5L4.74164 22.5C5.2269 23.3418 5.80471 24.1253 6.46431 24.8387L7.93231 23.4814ZM18.4443 26.728C16.8354 27.0942 15.1648 27.0933 13.5563 26.7254L13.111 28.6747C15.0125 29.11 16.9876 29.1113 18.8896 28.6787L18.4443 26.728ZM26.511 19.2454C26.0257 20.8228 25.1912 22.2706 24.0696 23.4814L25.5363 24.8414C26.8617 23.4107 27.8479 21.7 28.4216 19.836L26.511 19.2454ZM25.527 10.5C25.947 11.2294 26.2736 11.984 26.5136 12.7534L28.423 12.1627C28.1354 11.2345 27.745 10.3414 27.259 9.50003L25.5256 10.5H25.527ZM24.067 8.51869C24.6136 9.10936 25.1043 9.77203 25.5256 10.5L27.259 9.50003C26.7733 8.65821 26.1937 7.872 25.5336 7.1587L24.067 8.51869ZM13.555 5.27203C15.1638 4.90586 16.8345 4.90677 18.443 5.2747L18.8896 3.32536C16.9882 2.89005 15.0117 2.88868 13.1096 3.32136L13.555 5.27203ZM14.3323 6.7627V4.29603H12.3323V6.7627H14.3323ZM9.83364 8.20536L7.69898 6.97336L6.69898 8.70536L8.83231 9.93736L9.83364 8.20536ZM6.16698 17.444L4.03231 18.676L5.03231 20.408L7.16698 19.176L6.16564 17.4427L6.16698 17.444ZM7.16698 12.824L5.03364 11.5934L4.03364 13.3267L6.16698 14.5574L7.16698 12.824ZM14.3336 27.7V25.2374H12.3336V27.7H14.3336ZM8.83364 22.0627L6.69898 23.2947L7.69898 25.028L9.83231 23.7947L8.83231 22.0614L8.83364 22.0627ZM25.3016 23.2947L23.167 22.0627L22.167 23.7947L24.3003 25.0267L25.3016 23.2947ZM19.667 27.7027V25.2374H17.667V27.704L19.667 27.7027ZM26.9683 11.592L24.8336 12.824L25.8336 14.5574L27.967 13.324L26.9683 11.592ZM27.9656 18.6747L25.8336 17.4427L24.8336 19.176L26.967 20.4067L27.967 18.6734L27.9656 18.6747ZM19.667 6.7627V4.30003H17.667V6.7627H19.667ZM24.3016 6.97336L22.167 8.20536L23.167 9.93869L25.3016 8.70536L24.3016 6.97336ZM17.667 6.7627C17.667 9.58536 20.723 11.3507 23.167 9.93869L22.167 8.20536C21.9137 8.35161 21.6263 8.42862 21.3338 8.42865C21.0413 8.42868 20.754 8.35174 20.5006 8.20554C20.2473 8.05934 20.0369 7.84905 19.8905 7.59578C19.7442 7.34251 19.6671 7.0552 19.667 6.7627H17.667ZM24.8336 12.824C22.3896 14.236 22.3896 17.764 24.8336 19.176L25.8336 17.4427C25.5803 17.2964 25.3699 17.086 25.2237 16.8327C25.0774 16.5793 25.0004 16.2919 25.0004 15.9994C25.0004 15.7068 25.0774 15.4194 25.2237 15.1661C25.3699 14.9127 25.5803 14.7023 25.8336 14.556L24.8336 12.824ZM23.167 22.0627C20.723 20.6507 17.667 22.4147 17.667 25.2374H19.667C19.6671 24.9449 19.7442 24.6575 19.8905 24.4043C20.0369 24.151 20.2473 23.9407 20.5006 23.7945C20.754 23.6483 21.0413 23.5714 21.3338 23.5714C21.6263 23.5714 21.9137 23.6484 22.167 23.7947L23.167 22.0614V22.0627ZM14.3336 25.2374C14.3336 22.4147 11.2776 20.6507 8.83364 22.0627L9.83231 23.7947C10.0856 23.6484 10.3743 23.5714 10.6668 23.5714C10.9593 23.5714 11.2467 23.6483 11.5 23.7945C11.7533 23.9407 11.9638 24.151 12.1101 24.4043C12.2564 24.6575 12.3335 24.9449 12.3336 25.2374H14.3336ZM7.16698 19.176C9.61098 17.764 9.61098 14.236 7.16698 12.824L6.16698 14.5574C6.42032 14.7036 6.6307 14.914 6.77697 15.1674C6.92323 15.4208 7.00024 15.7081 7.00024 16.0007C7.00024 16.2932 6.92323 16.5806 6.77697 16.834C6.6307 17.0873 6.42032 17.2977 6.16698 17.444L7.16698 19.176ZM12.3336 6.7627C12.3335 7.0552 12.2564 7.34251 12.1101 7.59578C11.9638 7.84905 11.7533 8.05934 11.5 8.20554C11.2467 8.35174 10.9593 8.42868 10.6668 8.42865C10.3743 8.42862 10.087 8.35161 9.83364 8.20536L8.83364 9.93869C11.2776 11.3494 14.3336 9.58536 14.3336 6.7627H12.3336Z"
              fill="white"
            />
          </svg>
        </div>
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <Sidebar className={`${props.className} h-screen overflow-y-auto`}>
        {/* <div className=""> */}
        <Img
          className="h-[81px] md:h-[80px] sx:h-[60px] ml-6 md:ml-[0] mr-[91px] mt-6 sx:mt-2 object-cover w-[57%] md:mt-2 md:object-contain"
          src="images/img_image14.png"
          alt="imageFourteen"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "8px",
              color: "#ffffff",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Lato",
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          }}
          className="flex flex-col  items-center justify-start mb-[50px] mt-[57px] md:mt-8 sx:mt-4 w-full"
        >
          <div className="flex flex-col gap-10 md:gap-7 sx:gap-5  items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <Link
                to={menu?.href}
                className={`flex align-middle gap-2 w-full px-6 md:px-0   ${
                  location.pathname === menu?.href
                    ? " border-[#3086c5] border-2 rounded-md  py-2 w-[80%] md:w-full !px-2 md:mr-auto"
                    : ""
                }`}
                style={{ alignItems: "center" }}
              >
                {menu.icon}
                <p className="text-[#fff] whitespace-nowrap sx:text-sm font-lato text-base font-medium">
                  {menu.label}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start justify-start mt-5 bottom-0 pb-5  w-full">
            <Line className="bg-white-A700 h-px mt-[5px] w-full" />
            <div
              onClick={handleButtonClick}
              className="flex   cursor-pointer ml-5 md:ml-0 items-center justify-center mt-5 mr-4 gap-2 w-auto"
            >
              <div className="w-10 h-10 md:w-6 md:h-6 overflow-hidden rounded-full  border-black-900">
                <img
                  src="images/img_search.svg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <Text
                className="w-auto text-[17px] sx:text-sm"
                style={{
                  color: "#ffffff",
                  fontWeight: 500,
                  fontFamily: "Lato",
                }}
              >
                {user?.email?.length > 13
                  ? user?.email?.slice(0, 14) + "..."
                  : user?.email}
              </Text>
              <div className="h-7 w-7 md:w-6 md:h-6 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d="M6.66667 28C5.93333 28 5.30578 27.7391 4.784 27.2173C4.26222 26.6956 4.00089 26.0676 4 25.3333V6.66667C4 5.93333 4.26133 5.30578 4.784 4.784C5.30667 4.26222 5.93422 4.00089 6.66667 4H16V6.66667H6.66667V25.3333H16V28H6.66667ZM21.3333 22.6667L19.5 20.7333L22.9 17.3333H12V14.6667H22.9L19.5 11.2667L21.3333 9.33333L28 16L21.3333 22.6667Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Menu>
        {/* </div> */}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
