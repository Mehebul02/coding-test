/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,

} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableRow from "./SortableRow";

interface CostTableProps {
  title: string;
  columns: string[];
  rows: any[];
  onRowChange?: (rowIndex: number, fieldName: string, value: any) => void;
  onAddRow?: () => void;
  onReorderRows?: (newRows: any[]) => void;
}

const CostTable = ({
  title,
  columns,
  rows,
  onRowChange,
  onAddRow,
  onReorderRows,
}: CostTableProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const items = rows.map((row, idx) => row.id || `row-${idx}`);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over.id as string);

      if (oldIndex === -1 || newIndex === -1) return;

      const newRows = arrayMove(rows, oldIndex, newIndex);
      onReorderRows?.(newRows);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
        {title}
      </h3>

      <div className="overflow-x-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100 border border-gray-300">
                <th className="border border-gray-300 px-3 py-2 w-10" />
                <th className="border border-gray-300 px-3 py-2 text-xs font-semibold w-10">
                  S.L.
                </th>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
              >
                {rows.map((row, rowIdx) => {
                  const itemId = row.id || `row-${rowIdx}`;
                  return (
                    <SortableRow
                      key={itemId}
                      id={itemId}
                      row={row}
                      rowIdx={rowIdx}
                      columns={columns}
                      onRowChange={onRowChange}
                    />
                  );
                })}
              </SortableContext>
            </tbody>
          </table>
        </DndContext>
      </div>

      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={onAddRow}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-xs font-medium flex items-center gap-1"
        >
          <span>+</span> Add
        </button>
      </div>
    </div>
  );
};

export default CostTable;
