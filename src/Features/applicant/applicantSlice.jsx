import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3006/applicant";

export const getApplicantData = createAsyncThunk(
  "applicant/getApplicantData",
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postApplicantData = createAsyncThunk(
  "applicant/postApplicantData",
  async (values) => {
    try {
      axios.post(url, values);
      return values;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putApplicantData = createAsyncThunk(
  "applicant/putApplicantData",
  async ({ values, id }) => {
    try {
      // thunkApi.getState().form.openAppForm ;
      axios.put(`${url}/${id}`, values);
      return values;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteApplicantData = createAsyncThunk(
  "applicant/deleteApplicantData",
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
  applicantData: [],
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
  loading: false,
  modal: false,
  currentActionID: "",
};

const applicantSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApplicantData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getApplicantData.fulfilled, (state, action) => {
        state.loading = false;
        state.applicantData = action.payload;
        localStorage.setItem("Applicant", JSON.stringify(action.payload))

      })
      .addCase(getApplicantData.rejected, (state, action) => {
        state.loading = false;
        console.log("Rejected on builder", action.payload);
      })
      .addCase(postApplicantData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postApplicantData.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(`${payload.fullName} is added !`, state.toastify);
      })
      .addCase(postApplicantData.rejected, (state, action) => {
        state.loading = false;
        console.log("Rejected on builder", action.payload);
      })
      .addCase(putApplicantData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(putApplicantData.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(`${payload.fullName} is updated !`, state.toastify);
      })
      .addCase(putApplicantData.rejected, (state, action) => {
        state.loading = false;
        console.log("Rejected on builder", action.payload);
      })
      .addCase(deleteApplicantData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteApplicantData.fulfilled, (state, { payload }) => {
        state.modal = false;
        state.loading = false;
        toast.error('Applicant is deleted !', state.toastify);
        if (payload) {
          state.applicantData = state.applicantData.filter(
            (applicant) => applicant.id !== payload
          );
        }
        localStorage.setItem("Applicant", JSON.stringify(state.applicantData))
        getApplicantData()

      })
      .addCase(deleteApplicantData.rejected, (state, action) => {
        state.loading = false;
        console.log("Rejected on builder", action.payload);
      });
  },
});

export const { openDeleteModal, closeDeleteModal } = applicantSlice.actions;
export default applicantSlice.reducer;
