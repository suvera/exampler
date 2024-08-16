import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import './PendingExamsTable.css';

const PendingExamsTable = ({ data, onStartExam }) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const columns = useMemo(
    () => [
      {
        header: 'Exam',
        accessorKey: 'name',
        cell: info => <strong>{info.getValue()}</strong>,
      },
      {
        header: 'Subject',
        accessorKey: 'subject_name',
        cell: info => `${info.row.original.subject_name} - ${info.row.original.class_id}`,
      },
      {
        header: 'Total Questions',
        accessorKey: 'total_questions',
      },
      {
        header: 'Time Given',
        accessorKey: 'total_time_mins',
        cell: info => `${info.getValue()} minutes`,
      },
      {
        header: 'Actions',
        id: 'start_exam',
        cell: info => (
          <button
            className="start-exam-button"
            onClick={() => onStartExam(info.row.original.uuid)}
          >
            Start Exam
          </button>
        ),
      },
    ],
    [onStartExam]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
        sorting,
        globalFilter,
        pagination,
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setGlobalFilter,
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(), // Apply filtering
      getPaginationRowModel: getPaginationRowModel(),
    });

  return (
    <div className="table-container">
      <input
        type="text"
        value={globalFilter}
        onChange={e => setGlobalFilter(e.target.value)}
        placeholder="Search exams..."
        className="search-input"
      />
      <table className="pending-exams-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: 'pointer' }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagheadclass'>
      <div className="pagination">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>{' '}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default PendingExamsTable;
