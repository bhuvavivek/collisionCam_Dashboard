import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-8 w-8"
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
          className="h-8 w-8"
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
          className="h-8 w-8"
          src="images/img_edit_white_a700.svg"
          alt="edit"
        />
      ),
      label: "Review Requests",
      href: "/reviewrequest",
      active: window.location.pathname === "/reviewrequest",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_arrowup.svg" alt="arrowup" />
      ),
      label: "Manage Affiliate",
      href: "/manageaffiliate",
      active: window.location.pathname === "/manageaffiliate",
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[81px] md:h-auto ml-6 md:ml-[0] mr-[91px] mt-6 object-cover w-[57%]"
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
          className="flex flex-col items-center justify-start mb-[85px] mt-[57px] w-full"
        >
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start mt-[459px] w-full">
            <SubMenu
              label={
                <div className="h-[50px] relative w-full">
                  <div className="flex flex-row gap-2 h-full items-center justify-end ml-2 my-auto w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <Text className="w-auto">Settings</Text>
                  </div>
                  <div className="absolute border border-blue-700 border-solid h-[50px] inset-[0] justify-center m-auto rounded-lg w-[88%]"></div>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
          </div>
          <Line className="bg-white-A700 h-px mt-[25px] w-full" />
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
