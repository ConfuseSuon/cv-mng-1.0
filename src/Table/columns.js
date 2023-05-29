import moment from "moment";

export const interviewColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Interviewer Name",
    accessor: (row) => {
      if (Array.isArray(row.interviewerId)) {
        return row.interviewerId
          .map((interviewer) => interviewer.interviewerName)
          .join(",   ");
      }
      return "";
    },
  },
  {
    Header: "Applicant Name",
    accessor: (row) => {
      const data = JSON.parse(row.applicantId);
      console.log(data[0]);
      return data[0].applicantName;
    },
  },
  // {
  //   Header: "Date Time",
  //   accessor: "dateTime",
  //   Cell: ({ value }) => moment(value).format("MMMM Do YYYY, hh:mm a"),
  // },
  {
    Header: "Time Left",
    accessor: "remainingTime",
    Cell: ({ row }) => {
      const remainingTime = moment(row.original.dateTime).fromNow();
      return remainingTime;
    },
  },
];

export const offerLetterColumn = [
  {
    Header: "Applicant Name",
    accessor: (row) => {
      const data = JSON.parse(row.applicantId);
      console.log(data[0]);
      return data[0].applicantName;
    },
  },
  {
    Header: "Status",
    accessor: "status",
  },
  // {
  //   Header: "Letter File",
  //   accessor: "letterFile",
  // },
  {
    Header: "Remarks",
    accessor: "remarks",
  },
];

export const interviewerColumn = [
  {
    Header: "Interviewer Name",
    accessor: "interviewerName",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

export const assessmentColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Evaluation",
    accessor: "evaluation",
  },
  {
    Header: "Applicant Name",
    accessor: (row) => {
      const data = JSON.parse(row.applicantId);
      return data[0].applicantName;
    },
  },
];

export const applicantColumns = [
  {
    Header: "Full Name",
    accessor: "fullName",
  },

  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Technology",
    accessor: "technology",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Experience",
    accessor: "experience",
    Cell: ({ row }) => {
      const value = row.original.experience + " " + row.original.period;
      return value;
    },
  },
];

export const dropdownColumn = [
  {
    Header: "Name",
    accessor: "fullName",
  },
];
