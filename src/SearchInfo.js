import React from "react";
import FormattedDate from "./FormattedDate";
import "./SearchInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function SearchInfo(props) {
  return (
    <div className="SearchInfo">
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="temp">
                <WeatherTemperature celsius={props.data.temperature} />
              </li>
              <li>{props.data.city}</li>
              <li>
                {" "}
                <img src={props.data.iconUrl} alt={props.data.description} />
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="col-6">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul className="style-description">
              <li>
                <i class="fa-solid fa-droplet"></i>
              </li>
              <li>{Math.round(props.data.humidity)}%</li>
              <li>Humidity</li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="style-description">
              <li>
                <i class="fa-solid fa-wind"></i>
              </li>
              <li>{props.data.wind}</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="style-description">
              <li>
                <i class="fa-solid fa-gauge-high"></i>
              </li>
              <li>{props.data.pressure}</li>
              <li>pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
