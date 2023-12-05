import React from "react";
import MonthDisplay from "./MonthDisplay";
import DayDisplay from "./DayDisplay";
import ProduceDisplay from "./ProduceDisplay";


class MarketDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: "January",
      day: "Monday"
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
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>;

    const dayDropdown =
    <select name="daySelect">
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Saturday</option>
      <option>Sunday</option>
    </select>;
    
    return (
      <React.Fragment>
        <h1>Avery's Organics Farm Schedule</h1>
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