import React from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";
import { useDispatch } from "react-redux";
import SearchBar from "../Shared-Layout/SearchBar";

import { openDeleteModal } from "../Features/modal/modalSlice";

import {
    BiSortUp,
    BiSortDown,
    BiChevronLeft,
    BiChevronRight,
    BiFirstPage,
    BiLastPage,
    BiEdit,
    BiTrash,
    BiShow,
} from "react-icons/bi";
import { openFormFunc } from "../Features/form/formSlice";
import { useNavigate } from "react-router-dom";
import { getApplicantData } from "../Features/applicant/applicantSlice";


const ReusableTable = ({ data, columns, action, request, dropdown }) => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleViewNavigation = ({ pageName, id, data }) => {

        switch (pageName) {

            case "applicantDetails":
                navigate(`/applicant/applicant-details/${id}`);
                dispatch(getApplicantData())
                break;

            case "interviewDetails":
                navigate(`/interview/interview-details/${id}`);
                localStorage.setItem("interviewEditValue", JSON.stringify(data))
                break;

            case "assessmentTestDetails":
                navigate(`/assessment-test/assessment-test-details/${id}`);
                dispatch(getApplicantData())
                break;

            case "offerLetterDetails":
                navigate(`/offer-letter/offer-letter-details/${id}`);
                dispatch(getApplicantData())
                break;
            default:
                console.log("Unknown page name")
        }

    }



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <React.Fragment>

            <table {...getTableProps()} className="reusable-table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <BiSortDown />
                                            ) : (
                                                <BiSortUp />
                                            )
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </th>
                            ))}
                            {!dropdown && (
                                <th>Actions</th>
                            )}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                                {!dropdown && (
                                    <td>
                                        <div className="action-container">
                                            {!request && (
                                                <button
                                                    onClick={() => {
                                                        handleViewNavigation({ pageName: action.view, id: row.original.id, data: row.original })
                                                    }}
                                                >
                                                    <BiShow className="bi-icons" />
                                                </button>
                                            )}
                                            <button onClick={() => {
                                                dispatch(openFormFunc({ data: row.original, action: action.edit }))
                                            }}>
                                                <BiEdit className="bi-icons" />
                                            </button>
                                            <button
                                                className="bi-icons"
                                                onClick={() => {
                                                    dispatch(openDeleteModal({ data: row.original, action: action.delete }));
                                                }}
                                            >
                                                <BiTrash className="bi-icons" />
                                            </button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {
                !dropdown && (

                    <div className="pagination-container">
                        <p className="ptag">
                            Page {pageIndex + 1} of {pageOptions.length}{" "}
                        </p>

                        {/* <span>
                | Goto Page {''}
                <input type="number" defaultValue={pageIndex + 1 } onChange={(e)=>{
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(pageNumber)
                }} />
            </span> */}
                        <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />


                        <select
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                        >
                            {" "}
                            {[10, 15, 30].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}{" "}
                        </select>
                        <div className="pagination-buttons">
                            <button
                                className="pagination-btn"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                <BiFirstPage />
                            </button>
                            <button
                                className="pagination-btn"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <BiChevronLeft />
                            </button>
                            <button
                                className="pagination-btn"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                <BiChevronRight />
                            </button>
                            <button
                                className="pagination-btn"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                <BiLastPage />
                            </button>
                        </div>
                    </div>
                )
            }

        </React.Fragment>
    );
};

export default ReusableTable;
