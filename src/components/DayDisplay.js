import React from 'react';
import PropTypes from "prop-types";

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

 function DayDisplay(props) {
  const dayLocation = marketSchedule.filter(schedule => (schedule.day === props.day));
  return(
    <React.Fragment>
      <hr />
      <div className='dayDisplayDiv'>
        <p> Where We'll Be On {props.day}:</p>
        <p>We will be at {dayLocation[0].location} in booth {dayLocation[0].booth} from {dayLocation[0].hours}</p>
      </div>
    </React.Fragment>
  );
}

DayDisplay.propTypes = {
  day: PropTypes.string
};

export default DayDisplay;
