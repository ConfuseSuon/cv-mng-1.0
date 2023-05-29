import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    applicantDeleteModal: false,
    assessmentDeleteModal: false,
    offerLetterDeleteModal: false,
    interviewerDeleteModal: false,
    interviewDeleteModal: false,
    deleteApiName: "",
    deleteId: "",

}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openDeleteModal: (state, { payload }) => {
            const { data, action } = payload

            switch (action) {


                case "deleteApplicant":
                    state.applicantDeleteModal = true
                    state.deleteApiName = action
                    state.deleteId = data.id
                    break;

                case "deleteAssessment":
                    state.assessmentDeleteModal = true
                    state.deleteApiName = action
                    state.deleteId = data.id
                    break;

                case "deleteOfferLetter":
                    state.offerLetterDeleteModal = true
                    state.deleteApiName = action
                    state.deleteId = data.id
                    break;

                case "deleteInterviewer":
                    state.interviewerDeleteModal = true
                    state.deleteApiName = action
                    state.deleteId = data.id
                    break;

                case "deleteInterview":
                    state.interviewDeleteModal = true
                    state.deleteApiName = action
                    state.deleteId = data.id
                    break;

                default:
                    console.log("Unknown delete click")
                    break;
            }
        },
        closeDeleteModal: (state) => {
            state.applicantDeleteModal = false
            state.assessmentDeleteModal = false
            state.offerLetterDeleteModal = false
            state.interviewerDeleteModal = false
            state.interviewDeleteModal = false
            state.logout = false
        },

    }
})

export const { openDeleteModal, closeDeleteModal } = modalSlice.actions
export default modalSlice.reducer