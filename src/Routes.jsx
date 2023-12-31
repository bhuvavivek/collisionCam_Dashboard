import NotFound from "pages/NotFound";
import EditForm from "pages/editform";
import Protected from "pages/routers/Protected";
import Uploadform from "pages/uploadform";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
const ManageAffiliateOne = React.lazy(() => import("pages/ManageAffiliateOne"));
const ReviewRequestThree = React.lazy(() => import("pages/ReviewRequestThree"));
const Affiliateperformance = React.lazy(() =>
  import("pages/Affiliateperformance")
);
const ReviewRequestTwo = React.lazy(() => import("pages/ReviewRequestTwo"));
const ReviewRequest = React.lazy(() => import("pages/ReviewRequest"));
const ManageFootage = React.lazy(() => import("pages/ManageFootage"));
const Settings = React.lazy(() => import("pages/Settings"));
const Login = React.lazy(() => import("pages/Login"));

const ManageAffiliate = React.lazy(() => import("pages/ManageAffiliate"));
const SettingsTwo = React.lazy(() => import("pages/SettingsTwo"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const ManageFootageOne = React.lazy(() => import("pages/ManageFootageOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route
            path="/dashboard"
            element={
              <Protected returnTo="dashboard">
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/managefootageone"
            element={
              <Protected returnTo="managefootageone">
                <ManageFootageOne />
              </Protected>
            }
          />
          <Route
            path="/settingsone"
            element={
              <Protected returnTo="settingsone">
                <SettingsOne />
              </Protected>
            }
          />
          <Route path="/settingstwo" element={<SettingsTwo />} />
          <Route path="/manageaffiliate" element={<ManageAffiliate />} />

          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/manage-footage" element={<ManageFootage />} />
          <Route path="/reviewrequest" element={<ReviewRequest />} />
          <Route path="/reviewrequesttwo" element={<ReviewRequestTwo />} />
          <Route path="/upload-form" element={<Uploadform />} />
          <Route path="/edit-form/:id" element={<EditForm />} />
          <Route
            path="/affiliateperformance"
            element={<Affiliateperformance />}
          />
          <Route path="/reviewrequestthree" element={<ReviewRequestThree />} />
          <Route path="/manageaffiliateone" element={<ManageAffiliateOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
