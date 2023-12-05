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
    this.render();
  }

  render() {
    const displayedMonth = <MonthDisplay month = {this.state.month}/>
    const displayedDay = <DayDisplay day = {this.state.day}/>
    const displayedProduce = <ProduceDisplay />

    const monthDropdown =
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

    const dayDropdown =
    <select name="daySelect">
      <option>Mon</option>
      <option>Tue</option>
      <option>Wed</option>
      <option>Thu</option>
      <option>Fri</option>
      <option>Sat</option>
      <option>Sun</option>
    </select>;
    
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
        {monthDropdown}
        {dayDropdown}
        {/* {submitButton} */}
        <button type="submit">Check Availability</button>
        </form>
        
        {displayedMonth}
        {displayedDay}
        {displayedProduce}
      </React.Fragment>
    )
  }
}


export default MarketDisplay;