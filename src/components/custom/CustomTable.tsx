import React from "react";

const CustomTable = ({ customData }) => {
  // Table Headers
  const tableHeaders = () => {
    const allObjKeys = [];
    customData.map((item) => allObjKeys.push(...Object.keys(item)));

    const keys = new Set(allObjKeys);

    return [...keys];
  };

  // Table Rows
  const tableRows = customData?.map((item, index) => {
    return (
      <tr key={index}>
        {tableHeaders()?.map((header, index) => (
          <td className="text-center border border-slate-700 p-2" key={index}>
            {item[header]}
          </td>
        ))}
      </tr>
    );
  });

  // console.log("CustomTable");

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-slate-500 mt-5 w-full table-auto overflow-scroll ">
        <thead>
          <tr>
            {tableHeaders()?.map((header, i) => (
              <th
                key={i}
                className="text-center border border-slate-700 bg-gray-200 p-1 w-10"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default CustomTable;
