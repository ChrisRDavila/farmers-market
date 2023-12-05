import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>    
      <h3>month: {props.month}</h3>
      <p>produce: {props.selection}</p>
      <hr/>
    </React.Fragment>
  );
}

Location.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Produce;