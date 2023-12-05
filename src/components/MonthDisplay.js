import React from 'react';
import PropTypes from "prop-types";

function MonthDisplay(props) {
  return(
    <React.Fragment>
      <div className='monthDisplayDiv'>
        <p>{props.month}</p>
      </div>
    </React.Fragment>
  );
}


MonthDisplay.propTypes = {
  month: PropTypes.string
};

export default MonthDisplay;