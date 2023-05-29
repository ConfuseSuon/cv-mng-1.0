import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3006/interviewer";

const initialState = {
    loading: false,
    interviewerData: [],
    toastify: {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    },
};

export const getInterviewerData = createAsyncThunk(
    "interviewer/getInterviewerData",
    async () => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const postInterviewerData = createAsyncThunk(
    "interivewer/postInterviewerData",
    async (values) => {
        try {
            axios.post(url, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const putInterviewerData = createAsyncThunk(
    "interivewer/putInterviewerData",
    async ({ values, id }) => {
        try {
            axios.put(`${url}/${id}`, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteInterviewerData = createAsyncThunk(
    "interivewers/deleteInterviewerData",
    async (id) => {
        try {
            axios.delete(`${url}/${id}`);
            return id;
        } catch (error) {
            console.log(error);
        }
    }
);

const interviewerSlice = createSlice({
    name: "interviewer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInterviewerData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getInterviewerData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.interviewerData = payload;
                localStorage.setItem("Interviewer", JSON.stringify(payload))
                console.log(state.interviewerData, "hi");
            })
            .addCase(getInterviewerData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncThunk");
            })
            .addCase(postInterviewerData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postInterviewerData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.success(`${payload.interviewerName} is added !`, state.toastify)
            })
            .addCase(postInterviewerData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncThunk");
            })
            .addCase(putInterviewerData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(putInterviewerData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.success(`${payload.interviewerName} is updated !`, state.toastify)
            })
            .addCase(putInterviewerData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(deleteInterviewerData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteInterviewerData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.error(`Interviewer is deleted !`, state.toastify);
                if (payload) {
                    state.interviewerData = state.interviewerData.filter(
                        (interivewer) => interivewer.id !== payload
                    );
                }
            })
            .addCase(deleteInterviewerData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected on builder", action.payload);
            });
    },
});

export const { dataArrivedFunc } = interviewerSlice.actions;
export default interviewerSlice.reducer;
