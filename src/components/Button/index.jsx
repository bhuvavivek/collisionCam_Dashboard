import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg", square: "rounded-none" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900_a2",
    blue_50: "bg-blue-50 text-blue_gray-900_a2",
    indigo_900: "bg-indigo-900 text-white-A700",
  },
};
const sizes = { xs: "pr-px py-px", sm: "p-[9px]", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_50", "indigo_900"]),
};

export { Button };
