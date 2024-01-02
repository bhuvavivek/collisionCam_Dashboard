import { useState } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const AffiliateTable = ({ columns, data }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState(data);

  const deleteAffiliate = async (id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/user/delete-affliate/${id}`);
      setLoading(false);

      if (response.data.success) {
        setTableData((prevData) =>
          prevData.map((row) => row.filter((cell) => cell !== id))
        );
        // Handle success, you can navigate or perform any other actions
        toast.success(
          response.data?.message || "Internal server error",
          toastOptions
        );
      } else {
        // Handle failure
        console.error("Failed to delete affiliate");
        toast.error(
          error?.response?.data?.message || "Internal server error",
          toastOptions
        );
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      // Handle error
      console.error("Error deleting affiliate:", error);
    }
  };

  return (
    <div className="relative overflow-x-auto m-auto">
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        style={{ borderCollapse: "collapse", border: "1px solid #B9B9B9" }}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 bg-[#E1F0FE] py-4`}
                style={{ border: "1px solid #B9B9B9" }}
              >
                {column}
              </th>
            ))}
            {/* Combined header with "Status" and "Icon" */}
            <th
              colSpan="2"
              className="px-6 bg-[#E1F0FE] py-4 text-center"
              style={{ border: "1px solid #B9B9B9" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "50px",
                  justifyContent: "space-arround",
                }}
              >
                <div className="text-left ">status</div>
                <div className="">Icon</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid #B9B9B9" }}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white-A700 border-b dark:bg-gray-800 dark:border-gray-700"
              style={{ border: "1px solid #B9B9B9" }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-2 py-3 text-left pl-6 ${
                    cellIndex === row?.length - 2 ? "lastrow" : ""
                  }`}
                  style={{
                    border:
                      cellIndex !== row?.length - 1
                        ? `1px solid ${"#B9B9B9"}`
                        : "none",
                  }}
                >
                  {cellIndex === row.length - 1 ? (
                    <td
                      colSpan="2"
                      className="px-2 py-3 text-center flex flex-between"
                    >
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Display your icons here */}
                        <div
                          style={{
                            marginLeft: "20px",
                            display: "flex",
                            gap: "10px",
                            justifyContent: "space-arround",
                            textAlign: "center",
                          }}
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g opacity="0.7">
                                <path
                                  d="M7 17.013L11.413 16.998L21.045 7.45802C21.423 7.08003 21.631 6.57802 21.631 6.04402C21.631 5.51002 21.423 5.00802 21.045 4.63002L19.459 3.04402C18.703 2.28802 17.384 2.29202 16.634 3.04102L7 12.583V17.013ZM18.045 4.45802L19.634 6.04102L18.037 7.62302L16.451 6.03802L18.045 4.45802ZM9 13.417L15.03 7.44402L16.616 9.03002L10.587 15.001L9 15.006V13.417Z"
                                  fill="#303030"
                                />
                                <path
                                  d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                                  fill="#303030"
                                />
                              </g>
                            </svg>
                          </div>

                          <div onClick={() => deleteAffiliate(cell)}>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                                fill="#E82727"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                  ) : (
                    cell
                  )}
                </td>
              ))}
              {/* Merged "Status and Icon" column */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AffiliateTable;
