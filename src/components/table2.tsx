import { useRouter } from "next/router";
import React from "react";

type TableProps<T> = {
  columns: string[];
  data: T[];
  hrefKey?: keyof T; // Add a key to determine which property to use for the link
  link: string;
};

const Table2 = <T,>({ data, columns, hrefKey, link }: TableProps<T>) => {
  const router = useRouter();

  // Get all unique keys from data objects
  const dataColumns = Array.from(
    new Set(data.flatMap((item) => Object.keys(item!)))
  );

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="py-2 px-4 border-b text-left">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              if (!hrefKey) return;
              router.push(encodeURI((link + row[hrefKey]) as any as string));
            }}
          >
            {dataColumns.map((column) => (
              <td key={column} className="py-2 px-4 border-b min-w-[150px]">
                {(row as any)[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2;
