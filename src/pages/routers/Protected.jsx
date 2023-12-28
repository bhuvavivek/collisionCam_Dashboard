import { AppContext } from "pages/store/AppContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, returnTo }) => {
  const { isDataLoaded, user } = useContext(AppContext);
  const navigate = useNavigate();
  console.log("user");
  console.log(user);

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    if (!user) {
      return navigate("/loginone?returnTo=" + returnTo);
    }
  }, [user, isDataLoaded]);

  if (!isDataLoaded) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};

export default Protected;
