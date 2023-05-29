import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3006/interview";

export const getInterviewData = createAsyncThunk(
    "interview/getInterviewData",
    async () => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const postInterviewData = createAsyncThunk(
    "interview/postInterviewData",
    async (values) => {
        try {
            axios.post(url, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const putInterviewData = createAsyncThunk(
    "interview/putInterviewData",
    async ({ values, id }) => {
        try {
            axios.put(`${url}/${id}`, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteInterviewData = createAsyncThunk(
    "interview/deleteInterviewData",
    async (id) => {
        try {
            axios.delete(`${url}/${id}`);
            return id;
        } catch (error) {
            console.log(error);
        }
    }
);


const initialState = {
    loading: false,
    interviewData: [],
    showCalendar: false,
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

const interviewSlice = createSlice({
    name: "interview",
    initialState,
    reducers: {
        showCalendarFunc: (state) => {
            state.showCalendar = true
        },
        closeCalendarFunc: (state) => {
            state.showCalendar = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postInterviewData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postInterviewData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.success(`${payload.title} is scheduled !`, state.toastify);
            })
            .addCase(postInterviewData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(getInterviewData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getInterviewData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.interviewData = payload;
                localStorage.setItem("Interview", JSON.stringify(payload))
            })
            .addCase(getInterviewData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(putInterviewData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(putInterviewData.fulfilled, (state, { payload }) => {
                state.loading = false;
                localStorage.setItem("interviewEditValue", JSON.stringify(payload))
                toast.success(`${payload.title} is updated !`, state.toastify);
                console.log(payload, "mmmmmmmmee")
            })
            .addCase(putInterviewData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(deleteInterviewData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteInterviewData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.error(`Interview is deleted !`, state.toastify);
                if (payload) {
                    state.interviewData = state.interviewData.filter(
                        (interview) => interview.id !== payload
                    );
                }
            })
            .addCase(deleteInterviewData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected on builder", action.payload);
            });
    },
});

export const { showCalendarFunc, closeCalendarFunc } = interviewSlice.actions
export default interviewSlice.reducer;
