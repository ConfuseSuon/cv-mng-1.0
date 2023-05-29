export const getData = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {}
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await getData();
      dispatch(getAppliants(resp));
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);

const columns = useMemo(() => applicantColumns, []);
// const data = useMemo(() => applicantData, []);
const data = applicantData;


reducers: {
  getAppliants: (state, action) => {
    state.applicantData = action.payload;
  }