import React from "react";
import MonthSelector from "./MonthDisplay";
import DaySelector from "./DayDisplay";
import ProduceDisplay from "./ProduceDisplay";


class MarketDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: props.month,
      day: props.day
    };
  }

  handleSubmit = () => {
    // get value of monthDropdown and dayDropdown when submit is pressed
    // would use this.setState({month: (value of monthDropdown), day: (value of dayDropdown)})
  }

  render() {
    let monthDropdown =
      <select id="monthSelect">
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </select>;

    let dayDropdown =
    <select id="daySelect">
      <option>Sun</option>
      <option>Mon</option>
      <option>Tue</option>
      <option>Wed</option>
      <option>Thu</option>
      <option>Fri</option>
      <option>Sat</option>
    </select>;
    
    let submitButton = <button onClick={this.handleSubmit}>Check Availability</button>;
    
    


    
    return (
      <React.Fragment>
        <form>
        {monthDropdown}
        {dayDropdown}
        {submitButton}
        </form>
        
        <MonthSelector />
        <DaySelector />
        {/* <ProduceDisplay /> */}
      </React.Fragment>
    )
  }
}


export default MarketDisplay;