import * as React from "react";
import { Toast, Table, ListGroup } from "react-bootstrap";

const OneDayForecast = (props) => {
    return (
        <Toast style={{ width: "100%" }}>
            <Toast.Body>
                <h3>{props.getDate(props.weather.daily[0].dt)}</h3>
                <hr />
                {props.isDesktopOrLaptop ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Восход</th>
                                <th>Закат</th>
                                <th>Утро</th>
                                <th>День</th>
                                <th>Вечер</th>
                                <th>Ночь</th>
                                <th>Ветер</th>
                                <th>Погода</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {props.getTime(
                                        props.weather.daily[0].sunrise
                                    )}
                                </td>
                                <td>
                                    {props.getTime(
                                        props.weather.daily[0].sunset
                                    )}
                                </td>
                                <td>
                                    {props.weather.daily[0].temp.morn} &#8451;
                                </td>
                                <td>
                                    {props.weather.daily[0].temp.day} &#8451;
                                </td>
                                <td>
                                    {props.weather.daily[0].temp.eve} &#8451;
                                </td>
                                <td>
                                    {props.weather.daily[0].temp.night} &#8451;
                                </td>
                                <td>
                                    {props.weather.daily[0].temp.wind_speed}{" "}
                                    м/сек;
                                </td>

                                <td>
                                    {" "}
                                    <img
                                        src={`https://openweathermap.org/img/wn/${props.weather.daily[0].weather[0].icon}@2x.png`}
                                        alt=""
                                    />
                                    <p>
                                        {
                                            props.weather.daily[0].weather[0]
                                                .description
                                        }
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                ) : (
                    <ListGroup>
                        <ListGroup.Item>
                            Восход -{" "}
                            {props.getTime(props.weather.daily[0].sunrise)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Закат -{" "}
                            {props.getTime(props.weather.daily[0].sunset)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Утро - {props.weather.daily[0].temp.morn} &#8451;
                        </ListGroup.Item>
                        <ListGroup.Item>
                            День - {props.weather.daily[0].temp.day} &#8451;
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Вечер - {props.weather.daily[0].temp.eve} &#8451;
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ночь - {props.weather.daily[0].temp.night} &#8451;
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Ветер - {props.weather.daily[0].wind_speed} м/сек.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Погода -{" "}
                            {props.weather.daily[0].weather[0].description}
                        </ListGroup.Item>
                    </ListGroup>
                )}
            </Toast.Body>
        </Toast>
    );
};

export default OneDayForecast;
