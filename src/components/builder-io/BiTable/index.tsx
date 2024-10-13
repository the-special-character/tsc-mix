import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
type columnsProps = {
  column: {
    columnHeader: string;
    titleColor?: string;
    fontSize?:
      | "text-heading1"
      | "text-heading2"
      | "text-heading3"
      | "text-heading4"
      | "text-heading5"
      | "text-heading6"
      | "text-subtitle1"
      | "text-subtitle2"
      | "text-subtitle3"
      | "text-body1"
      | "text-body2"
      | "text-caption1"
      | "text-caption2";
  };
};

type cellProps = {
  cell: { content: string; fontSize?: string; contentColor: string };
};

type rowsProps = {
  cells: cellProps[];
  link?: string;
};

type Props = {
  headerBackgroundColor?: string;
  columns: columnsProps[];
  rows: rowsProps[];
};

export default function BiTable({
  headerBackgroundColor,
  columns,
  rows,
}: Props) {
  return (
    <Table>
      {/* Table Header */}
      <TableHeader>
        <TableRow
          style={{
            backgroundColor: headerBackgroundColor,
          }}
        >
          {columns &&
            columns?.map((item, index) => (
              <TableHead
                key={index}
                style={{ color: item?.column?.titleColor }}
                className={`${item?.column?.fontSize}`}
              >
                {item?.column?.columnHeader}
              </TableHead>
            ))}
        </TableRow>
      </TableHeader>

      {/* Table Body */}
      <TableBody>
        {rows &&
          rows?.map((rowItem, rowIndex) => (
            <TableRow key={rowIndex}>
              {rowItem &&
                rowItem?.cells
                  ?.slice(0, columns?.length) // Ensure the number of cells doesn't exceed the columns
                  ?.map((cellItem, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className={`pl-4 `}
                      style={{ color: cellItem?.cell?.contentColor }}
                    >
                      <Link
                        href={`${rowItem?.link}`}
                        className={`${cellItem?.cell?.fontSize}`}
                      >
                        {cellItem?.cell?.content}
                      </Link>
                    </TableCell>
                  ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
