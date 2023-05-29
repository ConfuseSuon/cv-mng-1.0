import * as Yup from "yup";

const capitalLetterRegex = /^[A-Z][a-z]*$/;
const letterRegex = /^[a-zA-Z]+$/;
const mobileNumRegex = /^[0-9]+$/;

export const applicantSchema = Yup.object({
  firstName: Yup.string()
    .matches(capitalLetterRegex, " must be start with capital letter")
    .matches(letterRegex, "first name should contains only alphabet")
    .min(2, "must be at least 2 character")
    .required("first name should not be empty"),
  middleName: Yup.string()
    .matches(letterRegex, "middle name should contains only alphabet")
    .min(2, "must be at least 2 character"),
  lastName: Yup.string()
    .matches(letterRegex, "last name should contains only alphabet")
    .min(2, "must be at least 2 character")
    .required("last name should not be empty"),
  email: Yup.string()
    .email("provide valid email address")
    .required("email should not be empty"),
  mobileNumber: Yup.string()
    .matches(mobileNumRegex, "mobile number must be only in digits")
    .min(10, "must be exactly 10 digits")
    .max(10, "must be exactly 10 digits")
    .required("Required"),
  technology: Yup.string().required("select at least one technology"),
  position: Yup.string().required("select at least one position"),
  experience: Yup.number().required("experience shouldn't be empty "),
  resume: Yup.string().required("insert resume file such as .pdf, .doc, .docx"),
});

export const experienceSchema = Yup.object({
  applicantId: Yup.string().required("applicant shouldn't be empty"),
  companyName: Yup.string().required("company name shouln't be empty"),
  startedDate: Yup.string().required("started date shouldn't be empty"),
  endDate: Yup.string().required("end date  shouldn't be empty"),
  position: Yup.string().required("end date  shouldn't be empty"),
  responsbilities: Yup.string().required(
    "responsibilities  shouldn't be empty"
  ),
  certificate: Yup.string().required("certificate shouldn't be empty"),
});

export const interviewSchema = Yup.object({
  dateTime: Yup.string().required("datetime shouldn't be empty"),
  title: Yup.string().required("title shouldn't be empty"),
  applicantId: Yup.string().required("applicant id shouldn't be empty"),
  interviewerId: Yup.array().min(1, "Please select at least one interviewer"),
});

export const assessmentSchema = Yup.object({
  applicantId: Yup.string().required("applicant id shouldn't be empty"),
  title: Yup.string().required("title shouldn't be empty"),
  document: Yup.string().required("document shouldn't be empty"),
});

export const interviewerSchema = Yup.object({
  interviewerName: Yup.string().required("interviewer name shouldn't be empty"),
  email: Yup.string()
    .email("provide valid email address")
    .required("email should not be empty"),
  position: Yup.string().required("position shouldn't be empty"),
});

export const offerLetterSchema = Yup.object({
  applicantId: Yup.string().required("applicant id shouldn't be empty"),
  status: Yup.string().required("status shouldn't be empty"),
  letterFile: Yup.string().required("letter file shouldn't be empty"),
  remarks: Yup.string().required("remarks shouldn't be empty"),
});

export const templateLetterSchema = Yup.object({
  name: Yup.string().required("name shouldn't be empty"),
  quillLetter: Yup.string().test(
    "is-required",
    "Content is required",
    function (value) {
      const { createError, path } = this;
      const preData = "jj";

      // Check if there are any changes to the pre-set data
      if (value !== preData) {
        // If there are changes, perform the regular required validation
        return Yup.string().required().validateSync(value);
      } else {
        // If there are no changes, return a custom error message
        return createError({ path, message: "Content is required" });
      }
    }
  ),
});
