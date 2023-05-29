import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Features/form/formSlice";
import authReducer from "./Features/auth/authSlice";
import applicantReducer from "./Features/applicant/applicantSlice";
import sharedReducer from "./Features/shared/sharedSlice";
import dropdownReducer from "./Features/drop-down/dropdownSlice";
import assessmentReducer from "./Features/assessment/assessmentSlice";
import interviewerReducer from "./Features/interviewer./interviewerSlice";
import offerLetterSliceReducer from "./Features/offerLetter/offerLetterSlice";
import modalSliceReducer from "./Features/modal/modalSlice";
import interviewSliceReudcer from "./Features/interview/interviewSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    applicant: applicantReducer,
    sharedFeatures: sharedReducer,
    dropdown: dropdownReducer,
    assessment: assessmentReducer,
    interviewer: interviewerReducer,
    offerLetter: offerLetterSliceReducer,
    modal: modalSliceReducer,
    interview: interviewSliceReudcer,
  },
});

export default store;
