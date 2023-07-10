import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3006/assessment";

export const getAssessmentData = createAsyncThunk(
    "assessment/getAssessmentData",
    async () => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const postAssessmentData = createAsyncThunk(
    "assessment/postAssessmentData",
    async (values) => {
        try {
            axios.post(url, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const putAssessmentData = createAsyncThunk(
    "assessment/putAssessmentData",
    async ({ values, id }) => {
        try {
            axios.put(`${url}/${id}`, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteAssessmentData = createAsyncThunk(
    "assessment/deleteAssessmentData",
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
    assessmentData: [],
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

const assesmentSlice = createSlice({
    name: "assessment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postAssessmentData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postAssessmentData.fulfilled, (state, { payload }) => {
                state.loading = false;
                getAssessmentData()
                toast.success(`${payload.title} is added !`, state.toastify);
            })
            .addCase(postAssessmentData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(getAssessmentData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAssessmentData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.assessmentData = payload;
            })
            .addCase(getAssessmentData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(putAssessmentData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(putAssessmentData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.success(`${payload.title} is updated !`, state.toastify);

            })
            .addCase(putAssessmentData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(deleteAssessmentData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteAssessmentData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.error(`Assessment is deleted !`, state.toastify);
                if (payload) {
                    state.assessmentData = state.assessmentData.filter(
                        (assessment) => assessment.id !== payload
                    );
                }
            })
            .addCase(deleteAssessmentData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected on builder", action.payload);
            });
    },
});

export default assesmentSlice.reducer;
