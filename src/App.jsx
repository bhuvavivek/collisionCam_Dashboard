import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AppPrvider from "pages/store/AppContext";

function App() {
  return (
    <AppPrvider>
      <ProSidebarProvider>
        <ToastContainer />
        <Routes />
      </ProSidebarProvider>
    </AppPrvider>
  );
}

export default App;
