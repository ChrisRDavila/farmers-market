import React from 'react';
import PropTypes from "prop-types";

function MonthDisplay(props) {
  return(
    <React.Fragment>
      <div>
        {props.month}
      </div>
    </React.Fragment>
  );
}


MonthDisplay.propTypes = {
  month: PropTypes.string
};

export default MonthDisplay;