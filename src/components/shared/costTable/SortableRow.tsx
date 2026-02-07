/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableRowProps {
  row: any;
  rowIdx: number;
  columns: string[];
  onRowChange?: (rowIndex: number, fieldName: string, value: any) => void;
  id: string;
}

const SortableRow = ({
  row,
  rowIdx,
  columns,
  onRowChange,
  id,
}: SortableRowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <tr ref={setNodeRef} style={style} className="hover:bg-blue-50">
      {/* Drag Handle */}
      <td className="border border-gray-300 px-3 py-2 text-xs text-gray-600 text-center w-10">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 3.5C6 4.05228 5.55228 4.5 5 4.5C4.44772 4.5 4 4.05228 4 3.5C4 2.94772 4.44772 2.5 5 2.5C5.55228 2.5 6 2.94772 6 3.5Z" fill="#9CA3AF" />
            <path d="M12 3.5C12 4.05228 11.5523 4.5 11 4.5C10.4477 4.5 10 4.05228 10 3.5C10 2.94772 10.4477 2.5 11 2.5C11.5523 2.5 12 2.94772 12 3.5Z" fill="#9CA3AF" />
            <path d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8Z" fill="#9CA3AF" />
            <path d="M12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8Z" fill="#9CA3AF" />
            <path d="M6 12.5C6 13.0523 5.55228 13.5 5 13.5C4.44772 13.5 4 13.0523 4 12.5C4 11.9477 4.44772 11.5 5 11.5C5.55228 11.5 6 11.9477 6 12.5Z" fill="#9CA3AF" />
            <path d="M12 12.5C12 13.0523 11.5523 13.5 11 13.5C10.4477 13.5 10 13.0523 10 12.5C10 11.9477 10.4477 11.5 11 11.5C11.5523 11.5 12 11.9477 12 12.5Z" fill="#9CA3AF" />
          </svg>
        </div>
      </td>

      {/* SL */}
      <td className="border border-gray-300 px-3 py-2 text-xs text-gray-600 text-center w-10">
        {rowIdx + 1}
      </td>

      {/* Dynamic Columns */}
      {columns.map((col, colIdx) => {
        const key = col.toLowerCase();
        const isNumber =
          key.includes("qty") ||
          key.includes("price") ||
          key.includes("total");

        return (
          <td key={colIdx} className="border border-gray-300 px-3 py-2 text-xs">
            <input
              type={isNumber ? "number" : "text"}
              value={row[key] || ""}
              onChange={(e) =>
                onRowChange?.(rowIdx, key, e.target.value)
              }
              className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
              placeholder={isNumber ? "0" : col}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default SortableRow;
