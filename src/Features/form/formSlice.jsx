import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openAppForm: false,
    openInterviewForm: false,
    openInterviewerForm: false,
    openAssessmentForm: false,
    openOfferLetterForm: false,
    applicantEditValue: [],
    interviewEditValue: [],
    interviewerEditValue: [],
    assessmentEditValue: [],
    offerLetterEditValue: [],

}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {

        openFormFunc: (state, { payload }) => {

            const { action } = payload

            switch (action) {
                case 'createApplicant':
                    state.openAppForm = true;
                    state.applicantEditValue = []
                    break;
                case 'editApplicant':
                    state.openAppForm = true
                    state.applicantEditValue = payload.data
                    break;

                case 'createInterview':
                    state.openInterviewForm = true;
                    state.interviewEditValue = []
                    break;
                case 'editInterview':
                    state.openInterviewForm = true;
                    state.interviewEditValue = payload.data
                    break;

                case 'createInterviewer':
                    state.openInterviewerForm = true
                    state.interviewerEditValue = []
                    break;
                case 'editInterviewer':
                    state.openInterviewerForm = true
                    state.interviewerEditValue = payload.data
                    break;

                case 'createAssessment':
                    state.openAssessmentForm = true
                    state.assessmentEditValue = []
                    break;
                case 'editAssessment':
                    state.openAssessmentForm = true
                    state.assessmentEditValue = payload.data
                    break;

                case 'createOfferLetter':
                    state.openOfferLetterForm = true
                    state.offerLetterEditValue = []
                    break;
                case 'editOfferLetter':
                    state.openOfferLetterForm = true
                    state.offerLetterEditValue = payload.data
                    break;
                default:
                    console.log("Unknown action")
            }

        },
        closeFormFunc: (state, { payload }) => {
            switch (payload) {
                case 'applicant':
                    state.openAppForm = false;
                    break;
                case 'experience':
                    state.openExperienceForm = false;
                    break;
                case 'interview':
                    state.openInterviewForm = false;
                    break;
                case 'interviewer':
                    state.openInterviewerForm = false;
                    break;
                case 'assessment':
                    state.openAssessmentForm = false;
                    break;
                case 'offerLetter':
                    state.openOfferLetterForm = false;
                    break;
                default:
                    console.log("unknown click")
            }
        },


    }

})

export const { openFormFunc, closeFormFunc, loaaViewData } = formSlice.actions
export default formSlice.reducer;