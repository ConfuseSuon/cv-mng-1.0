import React from "react";
import homeStyle from "../style/home.module.css";
import { BiCaretDown, BiCaretUp, BiListPlus, BiReceipt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
    dropdownOption,
    optionList,
    showTable,
} from "../Features/drop-down/dropdownSlice";
import ReusableTable from "../Table/ReusableTable";

import { dropdownColumn } from "../Table/columns";

const DropDown = () => {

    const dispatch = useDispatch();

    const {
        positionOption,
        statusOption,
        technologyOption,
        dropdownTable,
        dropdownPositionData,
        dropdownStatusData,
        dropdownTechnologynData,
    } = useSelector((store) => store.dropdown);

    return (
        <React.Fragment>
            <div className={homeStyle.dropDownContainer}>
                <div className={homeStyle.firstSection}>
                    <div className={homeStyle.dropDownTitle}>
                        <BiReceipt className={homeStyle.dropDownIcon} />
                        <h5>Dropdown</h5>
                    </div>

                    <div className={homeStyle.btnContainer}>
                        <button
                            className="btn"
                            onClick={() => dispatch(optionList({ listName: "position" }))}
                        >
                            <div className={homeStyle.btnDetails}>
                                <span>Position</span>{" "}
                                {positionOption ? (
                                    <BiCaretDown className={homeStyle.btnIcon} />
                                ) : (
                                    <BiCaretUp className={homeStyle.btnIcon} />
                                )}
                            </div>{" "}
                        </button>

                        {positionOption && <DropDownOptions optionName={"position"} />}
                        <button
                            className="btn"
                            onClick={() => dispatch(optionList({ listName: "status" }))}
                        >
                            <div className={homeStyle.btnDetails}>
                                <span>Status</span>
                                {statusOption ? (
                                    <BiCaretDown className={homeStyle.btnIcon} />
                                ) : (
                                    <BiCaretUp className={homeStyle.btnIcon} />
                                )}
                            </div>
                        </button>
                        {statusOption && <DropDownOptions optionName={"status"} />}
                        <button
                            className="btn"
                            onClick={() => dispatch(optionList({ listName: "technology" }))}
                        >

                            <div className={homeStyle.btnDetails}>
                                <span>Technology</span>
                                {technologyOption ? (
                                    <BiCaretDown className={homeStyle.btnIcon} />
                                ) : (
                                    <BiCaretUp className={homeStyle.btnIcon} />
                                )}
                            </div>
                        </button>
                        {technologyOption && <DropDownOptions optionName={"technology"} />}
                    </div>
                </div>

                <div className={homeStyle.secondSection}>
                    {dropdownPositionData.length > 0 && dropdownTable && (
                        <div className={homeStyle.tableBox}>
                            <div className={homeStyle.dropDownTitle}>
                                <p>{dropdownPositionData[0].position}</p>
                            </div>

                            <div className={homeStyle.dropDownTable}>
                                <ReusableTable
                                    data={dropdownPositionData}
                                    columns={dropdownColumn}
                                    dropdown={"onlyName"}
                                />
                            </div>
                        </div>
                    )}

                    {dropdownStatusData.length > 0 && dropdownTable && (
                        <div className={homeStyle.tableBox}>
                            <div className={homeStyle.dropDownTitle}>
                                <p>{dropdownStatusData[0].status}</p>
                            </div>

                            <div className={homeStyle.dropDownTable}>
                                <ReusableTable
                                    data={dropdownStatusData}
                                    columns={dropdownColumn}
                                    dropdown={"onlyName"}
                                />
                            </div>
                        </div>
                    )}

                    {dropdownTechnologynData.length > 0 && dropdownTable && (
                        <div className={homeStyle.tableBox}>
                            <div className={homeStyle.dropDownTitle}>
                                <p>{dropdownTechnologynData[0].technology}</p>
                            </div>

                            <div className={homeStyle.dropDownTable}>
                                <ReusableTable
                                    data={dropdownTechnologynData}
                                    columns={dropdownColumn}
                                    dropdown={"onlyName"}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default DropDown;

const DropDownOptions = ({ optionName }) => {
    const dispatch = useDispatch();
    const { applicantData } = useSelector((store) => store.applicant);

    const list = dropdownOption.filter((item) => item.name === optionName);

    return (
        <React.Fragment>
            <div className={homeStyle.optionList}>
                {list[0].listOption.map((item) => {
                    const { option } = item;
                    return (
                        <span
                            className={homeStyle.optionItem}
                            key={item.id}
                            onClick={() =>
                                dispatch(showTable({ name: option, data: applicantData }))
                            }
                        >
                            {option}
                        </span>
                    );
                })}
            </div>
        </React.Fragment>
    );
};
