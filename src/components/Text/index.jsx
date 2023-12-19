import React from "react";

const sizeClasses = {
  txtLatoBold16: "font-bold font-lato",
  txtLatoBold14: "font-bold font-lato",
  txtLatoSemiBold22: "font-lato font-semibold",
  txtLatoRegular14Red700a2: "font-lato font-normal",
  txtLatoRegular16Bluegray90001: "font-lato font-normal",
  txtLatoMedium16WhiteA700: "font-lato font-medium",
  txtLatoBold18: "font-bold font-lato",
  txtLatoMedium16Gray900: "font-lato font-medium",
  txtSourceSansProSemiBold40: "font-semibold font-sourcesanspro",
  txtLatoRegular14Bluegray900a2: "font-lato font-normal",
  txtSourceSansProSemiBold32: "font-semibold font-sourcesanspro",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtLatoRegular16Bluegray900a2: "font-lato font-normal",
  txtLatoRegular12Green600: "font-lato font-normal",
  txtLatoBold18Gray900: "font-bold font-lato",
  txtLatoMedium22: "font-lato font-medium",
  txtLatoRegular14Blue700: "font-lato font-normal",
  txtLatoBold16Blue700: "font-bold font-lato",
  txtLatoBold16Red700: "font-bold font-lato",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoBold16Indigo900: "font-bold font-lato",
  txtPlusJakartaSansRomanSemiBold14: "font-plusjakartasans font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoRegular14Blue700a2: "font-lato font-normal",
  txtSourceSansProSemiBold22: "font-semibold font-sourcesanspro",
  txtSourceSansProRegular32: "font-normal font-sourcesanspro",
  txtLatoMedium16: "font-lato font-medium",
  txtSourceSansProSemiBold40Bluegray90001: "font-semibold font-sourcesanspro",
  txtLatoBold16WhiteA700: "font-bold font-lato",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
