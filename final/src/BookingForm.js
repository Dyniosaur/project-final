import {useFormik} from 'formik';
import { useState, useEffect } from 'react';
import { basicSchema } from './schema';
/* global fetchAPI, submitAPI */

const onSubmit = async (values, action) => {
  console.log(values);
  action.resetForm();
};

function BookingForm({ availableTimes, initializeTimes }) {

  const [times, setTimes] = useState(availableTimes);


  useEffect(() => {
    setTimes(availableTimes);
  }, [availableTimes]);


  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    initializeTimes(selectedDate);
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      number: '',
      occasion: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: 'grid', maxWidth: '400px', justifySelf: 'center', margin: '15px' }}>
      <label htmlFor="date" style={{ margin: '15px' }}>Date</label>
      <input
        value={formik.values.date}
        onChange={handleDateChange}
        id="date"
        type="date"
        placeholder="Date"
        onBlur={formik.handleBlur}
        className={formik.errors.date && formik.touched.date ? 'input-errors' : ''}
      />
      {formik.errors.date && formik.touched.date && <p className="errors">{formik.errors.date}</p>}

      <label htmlFor="time" style={{ margin: '15px' }}>Time</label>
      <select
        value={formik.values.time}
        onChange={formik.handleChange}
        id="time"
        placeholder="Time"
        onBlur={formik.handleBlur}
        className={formik.errors.time && formik.touched.time ? 'input-errors' : ''}
      >
        <option value="">Choose a time</option>
        {times.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formik.errors.time && formik.touched.time && <p className="errors">{formik.errors.time}</p>}

      <label htmlFor="number" style={{ margin: '15px' }}>Number of guests</label>
      <input
        value={formik.values.number}
        onChange={formik.handleChange}
        id="number"
        type="number"
        placeholder="Number of guests"
        onBlur={formik.handleBlur}
        className={formik.errors.number && formik.touched.number ? 'input-errors' : ''}
      />
      {formik.errors.number && formik.touched.number && <p className="errors">{formik.errors.number}</p>}

      <label htmlFor="occasion" style={{ margin: '15px' }}>Occasion</label>
      <select
        value={formik.values.occasion}
        onChange={formik.handleChange}
        id="occasion"
        placeholder="Occasion"
        onBlur={formik.handleBlur}
        className={formik.errors.occasion && formik.touched.occasion ? 'select-errors' : ''}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {formik.errors.occasion && formik.touched.occasion && <p className="errors">{formik.errors.occasion}</p>}

      <button disabled={formik.isSubmitting} className="button" type="submit" style={{ margin: '40px' }}>Reserve!</button>
    </form>
  );
}


export default BookingForm;