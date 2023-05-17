import * as React from "react";
import { Toast } from "react-bootstrap";

const FiveDayForecast = (props) => {
    return (
        <Toast style={{ height: "380px" }} className="mx-auto">
            <Toast.Body>
                <p>
                    <b>{props.getDate(props.item.dt)}</b>
                </p>
                <p>Утро: {props.item.temp.morn} &#8451;</p>
                <p>День: {props.item.temp.day} &#8451;</p>
                <p>Вечер: {props.item.temp.eve} &#8451;</p>
                <p>Ночь: {props.item.temp.night} &#8451;</p>
                <img
                    src={`https://openweathermap.org/img/wn/${props.item.weather[0].icon}.png`}
                    alt=""
                />
                <p>{props.item.weather[0].description}</p>
                <p>Ветер: {props.item.wind_speed} м/сек</p>
            </Toast.Body>
        </Toast>
    );
};

export default FiveDayForecast;
