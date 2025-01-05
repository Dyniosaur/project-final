import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    date: yup.date().required("Choosing a date is required"),
    number: yup.number().min(1, "Number must be above one").max(10,"Number must be below ten").required('Select a number of guests'),
    occasion: yup.string().required("Select an occasion")
})