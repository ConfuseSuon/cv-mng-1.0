// import React, { } from "react";
// import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";

// import { applicantColumns } from "./columns";
// import { useDispatch, useSelector } from "react-redux";
// import SearchBar from "../Shared-Layout/SearchBar";

// import { openDeleteModal } from "../Features/applicant/applicantSlice";

// import {
//   BiSortUp,
//   BiSortDown,
//   BiChevronLeft,
//   BiChevronRight,
//   BiFirstPage,
//   BiLastPage,
//   BiEdit,
//   BiTrash,
//   BiShow,
// } from "react-icons/bi";
// import Modal from "../Shared-Layout/Modal";
// import { openFormFunc } from "../Features/form/formSlice";


// const ApplicantTable = ({ data }) => {

//   const { modal } = useSelector((store) => store.applicant)
//   const dispatch = useDispatch()
//   const columns = applicantColumns;

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     pageOptions,
//     gotoPage,
//     pageCount,
//     setPageSize,
//   } = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const { globalFilter, pageIndex, pageSize } = state;

//   return (
//     <React.Fragment>
//       {
//         modal && (<Modal />)
//       }
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps(column.getSortByToggleProps())}
//                 >
//                   {column.render("Header")}
//                   <span>
//                     {column.isSorted ? (
//                       column.isSortedDesc ? (
//                         <BiSortDown />
//                       ) : (
//                         <BiSortUp />
//                       )
//                     ) : (
//                       ""
//                     )}
//                   </span>
//                 </th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           ))}
//         </thead>

//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//                 <td>
//                   <div className="action-container">
//                     <button
//                       onClick={() => {

//                       }}
//                     >
//                       <BiShow className="bi-icons" />
//                     </button>
//                     <button onClick={() => {
//                       dispatch(openFormFunc({ data: row.original, action: "editApplicant" }))
//                     }}>
//                       <BiEdit className="bi-icons" />
//                     </button>
//                     <button
//                       className="bi-icons"
//                       onClick={() => {
//                         dispatch(openDeleteModal(row.original));
//                       }}
//                     >
//                       <BiTrash className="bi-icons" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="pagination-container">
//         <p className="ptag">
//           Page {pageIndex + 1} of {pageOptions.length}{" "}
//         </p>

//         {/* <span>
//                 | Goto Page {''}
//                 <input type="number" defaultValue={pageIndex + 1 } onChange={(e)=>{
//                     const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
//                     gotoPage(pageNumber)
//                 }} />
//             </span> */}
//         <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />


//         <select
//           value={pageSize}
//           onChange={(e) => setPageSize(Number(e.target.value))}
//         >
//           {" "}
//           {[10, 15, 30].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}{" "}
//         </select>
//         <div className="pagination-buttons">
//           <button
//             className="pagination-btn"
//             onClick={() => gotoPage(0)}
//             disabled={!canPreviousPage}
//           >
//             <BiFirstPage />
//           </button>
//           <button
//             className="pagination-btn"
//             onClick={() => previousPage()}
//             disabled={!canPreviousPage}
//           >
//             <BiChevronLeft />
//           </button>
//           <button
//             className="pagination-btn"
//             onClick={() => nextPage()}
//             disabled={!canNextPage}
//           >
//             <BiChevronRight />
//           </button>
//           <button
//             className="pagination-btn"
//             onClick={() => gotoPage(pageCount - 1)}
//             disabled={!canNextPage}
//           >
//             <BiLastPage />
//           </button>
//         </div>
//       </div>

//     </React.Fragment>
//   );
// };

// export default ApplicantTable;
