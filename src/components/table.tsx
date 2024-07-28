import React from "react";

type TableProps<T> = {
  columns: string[];
  data: T[];
};

const Table = <T extends Record<string, any>>({
  columns,
  data,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="py-2 px-4 bg-gray-200 border-b">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {columns.map((col) => (
                <td key={col} className="py-2 px-4">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
