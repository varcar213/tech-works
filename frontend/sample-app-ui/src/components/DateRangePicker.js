import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../styles/DateRangePicker.scss';
const DateRangePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="datePickerWrapper">
      <h2>Select a Date Range</h2>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <div className="dateDisplay">
        Selected Range: <br />
        {format(state[0].startDate, 'dd MMM yyyy')} — {format(state[0].endDate, 'dd MMM yyyy')}
      </div>
    </div>
  );
};

export default DateRangePicker;
