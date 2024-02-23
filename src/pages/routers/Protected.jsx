import Loading from "components/loading";
import { AppContext } from "pages/store/AppContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, returnTo }) => {
  const { isDataLoaded, user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    if (!user) {
      return navigate("/loginone?returnTo=" + returnTo);
    }
  }, [user, isDataLoaded]);

  if (!isDataLoaded) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Protected;
