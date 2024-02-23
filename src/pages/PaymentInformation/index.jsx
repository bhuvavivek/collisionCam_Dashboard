import { CloseSVG } from "assets/images";
import { Button, Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import Navbar from "components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const PaymnetInfo = () => {
  const [frame348value, setFrame348value] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  function formatDateFromTimestamp(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = dateObject.getDate().toString().padStart(2, "0");
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    return `${month}/${day}/${year} ${" "} ${" "} ${hours}:${minutes} ${ampm}`;
  }

  const fetchData = async () => {
    const { data } = await api.get(`/payment/details/${id}`);
    setData(data?.result);
    console.log(data?.result);
  };

  const deletePayemntHistory = async () => {
    try {
      const { data } = await api.delete(`/payment/delete/${id}`);
      toast.success(data.message, toastOptions);
      navigate("/payment-history");
    } catch (error) {
      toast.error("Server error", toastOptions);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto  w-full">
        {/* code for sidebar and searchbar  */}
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          {/* this is code of sidebar */}
          <Sidebar1
            className={` transition-transform ${
              toggle ? "translate-x-0" : "-translate-x-full"
            } !sticky md:!fixed z-50 !w-[262px] sx:!w-[220px] bg-[#1b1b1b]  h-screen overflow-hidden md:flex hidden justify-start md:px-5 top-[0]`}
          />

          <Sidebar1 className="!sticky !w-[262px] bg-[#1b1b1b] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />

          <div
            onClick={() => setToggle(!toggle)}
            className={`md:block transition-transform ${
              toggle
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } hidden fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#1b1b1b80]`}
          ></div>

          {/* this is code of section */}
          <div className="flex flex-1 flex-col md:gap-10 gap-5 items-center justify-start md:px-5 w-full">
            {/* this is code of search bar  */}
            <Navbar setToggle={setToggle} toggle={toggle} />

            {/* started coding for the subscription information  page */}

            {data.type === "Buy" ? (
              <div className="w-full md:mt-20 sx:mt-16">
                <div class="grid  grid-cols-2 md:grid-cols-1 px-20 md:px-0 py-5">
                  <div class="px-4 pt-8 md:p-0 ">
                    <p class="text-xl font-medium">Order Summary</p>
                    <p class="text-gray-400 ">Purchased Footage</p>

                    {data?.products?.length === 0 ? (
                      <div className="text-center mt-8">
                        <p>No Product Purchased</p>
                      </div>
                    ) : (
                      data?.products?.map((singleobject, index) => (
                        <div
                          className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-2 sm:py-2 sx:p-1"
                          key={index}
                        >
                          <div className="flex flex-row rounded-lg justify-between w-full bg-white ">
                            <img
                              className="m-2 h-24 w-28 sx:w-20 sx:h-20 rounded-md border object-cover object-center"
                              src={singleobject.thumbnail}
                              alt=""
                            />
                            <div className="flex w-full flex-col px-4 sx:pl-2 py-4 gap-1">
                              <span className="font-semibold">
                                {singleobject.name}
                              </span>
                              <span className="float-right text-gray-400"></span>
                              <p className="text-lg font-bold">
                                $ {singleobject.price}
                              </p>
                              <p className="text-sm font-semibold">
                                {singleobject.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* this is details */}
                  <div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 sticky top-36">
                      <p className="text-xl font-bold">Payment Details</p>
                      <p className="text-gray-400">Transaction Snapshot</p>
                      <Text className="my-2 text-xl">
                        <span className="text-xl font-bold">
                          Payment Mode :
                        </span>{" "}
                        {data.type}
                      </Text>
                      <div className="">
                        <label
                          for="card-holder"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="card-holder"
                            value={data?.name}
                            readOnly
                            disabled
                            name="name"
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm  shadow-sm outline-none "
                            placeholder="Your full name here"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <label
                          for="email"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="email"
                            readOnly
                            disabled
                            name="email"
                            value={data?.email}
                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none "
                            placeholder="your.email@gmail.com"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>
                        </div>
                        <label
                          for="date"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Date
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="date"
                            readOnly
                            disabled
                            name="date"
                            value={formatDateFromTimestamp(data?.createdAt)}
                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none "
                            placeholder="your.email@gmail.com"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            Total
                          </p>
                          <p className="text-2xl font-semibold text-gray-900">
                            ${data.amount}
                          </p>
                        </div>

                        <div className="mt-10 sx:flex-wrap gap-4 flex w-full justify-end items-center">
                          <button
                            type="none"
                            className="rounded-lg w-44 sx:w-full p-3  border-[#BF9853] border-2  text-center "
                          >
                            <Link
                              to="/payment-history"
                              className="flex gap-4 items-center justify-center cursor-pointer "
                            >
                              {" "}
                              <Img
                                className=" h-6  w-6"
                                src="/images/img_contrast.svg"
                                alt="contrast"
                              />
                              <Text className="text-[#BF9853] font-lato font-bold text-xl">
                                {" "}
                                Back{" "}
                              </Text>
                            </Link>
                          </button>

                          <Button
                            onClick={deletePayemntHistory}
                            className="font-bold  flex rounded-lg pl-4 sx:w-full gap-3 items-center leading-[normal] p-3 bg-red-700 text-white-A700 text-base text-left w-[150px]  placeholder:"
                            color="red_700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                                fill="white"
                              />
                            </svg>
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[70%] md:w-full md:mt-16">
                <div class="grid grid-cols-1 px-20 md:px-0 py-5">
                  {/* this is details */}
                  <div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 sticky top-36">
                      <p className="text-xl font-bold">Payment Details</p>
                      <p className="text-gray-400">Transaction Snapshot</p>
                      <div>
                        <Text className="my-2 text-xl">
                          <span className="text-xl font-bold">
                            Payment Mode :
                          </span>{" "}
                          {data.type}
                        </Text>
                      </div>
                      <div className="">
                        <label
                          for="card-holder"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="card-holder"
                            value={data?.name}
                            readOnly
                            disabled
                            name="name"
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm  shadow-sm outline-none "
                            placeholder="Your full name here"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <label
                          for="email"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="email"
                            readOnly
                            disabled
                            name="email"
                            value={data?.email}
                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none "
                            placeholder="your.email@gmail.com"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>
                        </div>
                        <label
                          for="date"
                          className="mt-4 mb-2 block text-sm font-medium"
                        >
                          Date
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="date"
                            readOnly
                            disabled
                            name="date"
                            value={formatDateFromTimestamp(data?.createdAt)}
                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none "
                            placeholder="your.email@gmail.com"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            Total
                          </p>
                          <p className="text-2xl font-semibold text-gray-900">
                            ${data.amount}
                          </p>
                        </div>

                        <div className="mt-10 flex sm:flex-wrap sm:gap-3  w-full justify-end items-center">
                          <button
                            type="none"
                            className="rounded-lg w-44 p-3 sm:w-full  border-[#BF9853] border-2  text-center "
                          >
                            <Link
                              to="/payment-history"
                              className="flex gap-4 items-center justify-center cursor-pointer "
                            >
                              {" "}
                              <Img
                                className=" h-6  w-6"
                                src="/images/img_contrast.svg"
                                alt="contrast"
                              />
                              <Text className="text-[#BF9853] font-lato font-bold text-xl">
                                {" "}
                                Back{" "}
                              </Text>
                            </Link>
                          </button>

                          <div className="cursor-pointer sx:w-full sm:w-full w-[50%] p-2 md:p-0">
                            {" "}
                            <Button
                              onClick={deletePayemntHistory}
                              className="font-bold  flex rounded-lg pl-4 gap-3 items-center leading-[normal] p-3 bg-red-700 text-white-A700 text-base text-left w-[150px] sm:w-full  placeholder:"
                              color="red_700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                                  fill="white"
                                />
                              </svg>
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymnetInfo;
