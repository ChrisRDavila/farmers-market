import React from "react";
import MonthDisplay from "./MonthDisplay";
import DayDisplay from "./DayDisplay";
import ProduceDisplay from "./ProduceDisplay";


class MarketDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: "Jan",
      day: "Mon"
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const selectedMonth = event.target.monthSelect.value;
    const selectedDay = event.target.daySelect.value;
    this.setState({
      month: selectedMonth,
      day: selectedDay 
    });
    console.log(this.state);
  }

  render() {
    let monthDropdown =
      <select name="monthSelect">
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
    <select name="daySelect">
      <option>Sun</option>
      <option>Mon</option>
      <option>Tue</option>
      <option>Wed</option>
      <option>Thu</option>
      <option>Fri</option>
      <option>Sat</option>
    </select>;
    
    // let submitButton = <button onClick={this.handleSubmit}>Check Availability</button>;
    
    


    
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
        {monthDropdown}
        {dayDropdown}
        {/* {submitButton} */}
        <button type="submit">Check Availability</button>
        </form>
        
        <MonthDisplay 
          month = {this.month}
          />
        <DayDisplay />
        {/* <ProduceDisplay /> */}
      </React.Fragment>
    )
  }
}


export default MarketDisplay;