import React from "react";
import MonthSelector from "./MonthDisplay";
import DaySelector from "./DayDisplay";
import ProduceDisplay from "./ProduceDisplay";


class MarketDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <MonthSelector />
        <DaySelector />
        <ProduceDisplay />
      </React.Fragment>
    )
  }
}


export default MarketDisplay;