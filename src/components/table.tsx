import React from "react";

type TableProps<T> = {
  columns: string[];
  data: T[];
  renderCell?: (column: string, row: T) => React.ReactNode;
};

const Table = <T,>({ columns, data, renderCell }: TableProps<T>) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="py-2 px-4 border-b">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((column) => (
              <td key={column} className="py-2 px-4 border-b">
                {renderCell ? renderCell(column, row) : (row as any)[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
