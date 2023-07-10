import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    positionOption: true,
    statusOption: true,
    technologyOption: true,
    dropdownTable: false,
    dropdownPositionData: [],
    dropdownStatusData: [],
    dropdownTechnologynData: []

};

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        optionList: (state, { payload }) => {
            switch (payload.listName) {
                case "position":
                    state.positionOption = !state.positionOption;
                    state.dropdownPositionData = !state.dropdownPositionData
                    break;

                case "status":
                    state.statusOption = !state.statusOption;
                    state.dropdownStatusData = !state.dropdownStatusData

                    break;

                case "technology":
                    state.technologyOption = !state.technologyOption;
                    state.dropdownTechnologynData = !state.dropdownTechnologynData

                    break;

                default:
                    console.log("Unknown dropdown list name");
            }
        },

        showTable: (state, { payload }) => {
            switch (payload.name) {
                case "Junior":
                    state.dropdownTable = true
                    state.dropdownPositionData = payload.data.filter((item) => item.position === payload.name)
                    break;
                case "Mid-level":
                    state.dropdownTable = true
                    state.dropdownPositionData = payload.data.filter((item) => item.position === payload.name)
                    break;
                case "Senior":
                    state.dropdownTable = true
                    state.dropdownPositionData = payload.data.filter((item) => item.position === payload.name)
                    break;
                case "Short Listed":
                    state.dropdownTable = true
                    state.dropdownStatusData = payload.data.filter((item) => item.status === payload.name)
                    break;
                case "Interviewing":
                    state.dropdownTable = true
                    state.dropdownStatusData = payload.data.filter((item) => item.status === payload.name)
                    break;

                case "Hired":
                    state.dropdownTable = true
                    state.dropdownStatusData = payload.data.filter((item) => item.status === payload.name)
                    break;
                case "Rejected":
                    state.dropdownTable = true
                    state.dropdownStatusData = payload.data.filter((item) => item.status === payload.name)
                    break;
                case "React JS":
                    state.dropdownTable = true
                    state.dropdownTechnologynData = payload.data.filter((item) => item.technology === payload.name)
                    break;
                case "Dot Net":
                    state.dropdownTable = true
                    state.dropdownTechnologynData = payload.data.filter((item) => item.technology === payload.name)
                    break;
                case "DevOps":
                    state.dropdownTable = true
                    state.dropdownTechnologynData = payload.data.filter((item) => item.technology === payload.name)
                    break;
                default:
                    console.log("Unknonw option name")
            }
        }
    },
});

export const { optionList, showTable } = dropdownSlice.actions;
export default dropdownSlice.reducer;

// -- Dropdown option list
export const dropdownOption = [
    {
        name: "position",
        listOption: [
            {
                id: 1,
                option: "Junior",
            },
            {
                id: 2,
                option: "Mid-level",
            },
            {
                id: 3,
                option: "Senior",
            },
        ],
    },
    {
        name: "status",
        listOption: [
            {
                id: 1,
                option: "Short Listed",
            },
            {
                id: 2,
                option: "Interviewing",
            },

            {
                id: 3,
                option: "Hired",
            },
            {
                id: 4,
                option: "Rejected",
            },
        ],
    },
    {
        name: "technology",
        listOption: [
            {
                id: 1,
                option: "Dot Net",
            },
            {
                id: 2,
                option: "React JS",
            },
            {
                id: 3,
                option: "DevOps",
            },
        ],
    },
];
