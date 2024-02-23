import { Link } from "react-router-dom";

const SellClaimTable = ({ columns, data }) => {
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
                className=" bg-[#E1F0FE] py-4  text-center "
                style={{ border: "1px solid #B9B9B9" }}
              >
                {column}
              </th>
            ))}
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
                  className={`px-1 py-3 text-center md:min-w-[180px] ${cellIndex === row.length - 2 && "capitalize"
                    }   ${cellIndex === row.length - 1 && "text-[#1976D2]"
                    }`}
                  style={{ border: "1px solid #B9B9B9" }}
                >
                  {cellIndex === row.length - 1 ? (
                    <Link
                

                      to={`/reviewrequesttwo?id=${cell}`}
                      className="underline "
                    >
                      View Details
                    </Link>
                  ) : cellIndex === row.length - 3 ? (
                    <a
                      href={`${cell}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {cell?.split("/")?.pop()}
                    </a>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellClaimTable;
