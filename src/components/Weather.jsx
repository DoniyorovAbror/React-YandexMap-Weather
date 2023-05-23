import * as React from "react";
import axios from "axios";
import "../styles/YMap.css";
import { Stack } from "react-bootstrap";
import CheckDays from "./CheckDays";
import { useMediaQuery } from "react-responsive";
import FiveDaysForecast from "./FiveDaysForecast";
import OneDayForecast from "./OneDayForecast";

function Weather(props) {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
    const [isLoading, setLoading] = React.useState(true);
    const [weather, setWeather] = React.useState([]);
    const [fiveDaysForecast, setFiveDaysForecast] = React.useState(false);
    const [oneDayForecast, setOneDayForecast] = React.useState(true);

    const getDate = (dt) => {
        let _date = new Date(dt * 1000);
        let newDate = _date.toLocaleDateString("ru-RU");
        return newDate;
    };

    const getTime = (dt) => {
        let _time = new Date(dt * 1000);
        let newTime = `${_time.getHours()}:${_time.getMinutes()}`;
        return newTime;
    };

    React.useEffect(() => {
        const getWeather = async () => {
            const { data } = await axios
                .get(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coords[0]}&lon=${props.coords[1]}&exclude=current,minutely,hourly,alerts&lang=ru&units=metric&appid=[API_KEY]`
                )
                .catch((err) => console.log(err));
            setWeather([data]);
            setLoading(false);
        };

        getWeather();
    }, [props.coords]);

    const days = (event) => {
        if (event.target.id === "days-5-radio") {
            setFiveDaysForecast(true);
            setOneDayForecast(false);
        } else {
            setFiveDaysForecast(false);
            setOneDayForecast(true);
        }
    };

    if (isLoading) {
        return <h3>Загрузка...</h3>;
    }

    return (
        <>
            <CheckDays
                oneDayForecast={oneDayForecast}
                fiveDaysForecast={fiveDaysForecast}
                days={days}
            />

            {fiveDaysForecast ? (
                <Stack
                    direction={isDesktopOrLaptop ? "horizontal" : "vertical"}
                    gap={2}
                    className="mt-4"
                >
                    {weather[0].daily.slice(0, 5).map((item) => (
                        <FiveDaysForecast
                            item={item}
                            getDate={getDate}
                            key={item.dt}
                        />
                    ))}
                </Stack>
            ) : (
                <Stack className="mt-4">
                    <OneDayForecast
                        isDesktopOrLaptop={isDesktopOrLaptop}
                        getDate={getDate}
                        getTime={getTime}
                        weather={weather[0]}
                    />
                </Stack>
            )}
        </>
    );
}

export default Weather;
