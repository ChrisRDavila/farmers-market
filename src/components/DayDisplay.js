import React from 'react';
import PropTypes from "prop-types";

function DayDisplay(props) {
  return(
    <React.Fragment>
      <div>
        {props.day}
      </div>
    </React.Fragment>
  )
}


DayDisplay.propTypes = {
  day: PropTypes.string
}

export default DayDisplay
