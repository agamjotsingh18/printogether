import React from "react";
import { Link } from "react-router-dom";
import "../styles/Calendars.css";

// Import images for each calendar type
import a5LandscapeCalendar from "../assets/calendar.png";
import bigSquareDesktopCalendar from "../assets/calendar.png";
import wallCalendar from "../assets/calendar.png";
import longCalendar from "../assets/calendar.png";
import calendarWithPhoto from "../assets/calendar.png";
import frameCalendars from "../assets/calendar.png";

const calendarTypes = [
  { name: "A5 Landscape Calendar", image: a5LandscapeCalendar },
  { name: "Big Square Desktop Calendar", image: bigSquareDesktopCalendar },
  { name: "Wall Calendar", image: wallCalendar },
  { name: "Long Calendar", image: longCalendar },
  { name: "Calendar With Photo", image: calendarWithPhoto },
  { name: "Frame Calendar", image: frameCalendars },
];

const Calendars = () => {
  return (
    <section className="calendars">
      <h2 className="section-title">Calendars</h2>
      <p className="section-subtitle">Choose from a variety of calendar styles</p>
      <div className="calendars-container">
        {calendarTypes.map((calendar, index) => (
          <div className="calendar-item" key={index}>
            <img src={calendar.image} alt={calendar.name} className="calendar-image" />
            <p className="calendar-name">{calendar.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Calendars;