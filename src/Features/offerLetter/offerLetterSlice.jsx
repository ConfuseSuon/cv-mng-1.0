import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3006/offerLetter";

export const getOfferLetterData = createAsyncThunk(
    "offerLetter/getOfferLetterData",
    async () => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const postOfferLetterData = createAsyncThunk(
    "offerLetter/postOfferLetterData",
    async (values) => {
        try {
            axios.post(url, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const putOfferLetterData = createAsyncThunk(
    "offerLetter/putOfferLetterData",
    async ({ values, id }) => {
        try {
            axios.put(`${url}/${id}`, values);
            return values;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteOfferLetterData = createAsyncThunk(
    "offerLetter/deleteOfferLetterData",
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
    offerLetterData: [],
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

const offerLetterSlice = createSlice({
    name: "offerLetter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOfferLetterData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getOfferLetterData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.offerLetterData = payload;
            })
            .addCase(getOfferLetterData.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(postOfferLetterData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postOfferLetterData.fulfilled, (state, { payload }) => {
                state.loading = false;
                getOfferLetterData()
                toast.success(`Offer letter is added !`, state.toastify);
            })
            .addCase(postOfferLetterData.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(putOfferLetterData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(putOfferLetterData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.success(`Offer letter is updated !`, state.toastify);
            })
            .addCase(putOfferLetterData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected by asyncthunk");
            })
            .addCase(deleteOfferLetterData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteOfferLetterData.fulfilled, (state, { payload }) => {
                state.loading = false;
                toast.error(`Offer letter is deleted !`, state.toastify);
                if (payload) {
                    state.offerLetterData = state.offerLetterData.filter(
                        (offerLetter) => offerLetter.id !== payload
                    );
                }
            })
            .addCase(deleteOfferLetterData.rejected, (state, action) => {
                state.loading = false;
                console.log("Rejected on builder", action.payload);
            });
    },
});

export default offerLetterSlice.reducer;
