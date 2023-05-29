import { useField } from 'formik';
import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReDatePicker = ({ name = "" }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;
    return (

        <DatePicker
            {...field}
            selected={value}
            onChange={(date) => setValue(date)}
            showTimeSelect
            dateFormat="Pp"

        />)
}

export default ReDatePicker