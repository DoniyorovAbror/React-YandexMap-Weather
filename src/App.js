import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import axios from "axios";
import YandexMaps from './components/YandexMaps';
import Weather from './components/Weather';
import SearchForm from './components/SearchForm';
import GetCity from './components/GetCity';
import CurrentLocation from "./components/CurrentLocation";
import { Cities } from "./components/Cities";
import { Stack, Container } from "react-bootstrap";


function App() {
  const [coord, setCoord] = React.useState([55.751244, 37.618423]);
    const [city, setCity] = React.useState("Москва");

    let defState = {
        center: coord,
        zoom: 12,
    };

    let defPlacemark = coord;

    const geoData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCoord([latitude, longitude]);
        });
    };

    const getCity = () => {
        const cityName = document.querySelector(".search_field").value;
        setCity(cityName);
        document.querySelector(".search_field").value = "";
    };

    const selectCity = (e) => {
        setCity(e.target.textContent);
    };

    React.useEffect(() => {
        const getCityName = async () => {
            await axios
                .get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=[API_KEY]`
                )
                .then((data) => setCoord([data.data[0].lat, data.data[0].lon]))
                .catch(() => alert("Введите имя города"));
        };
        getCityName();
    }, [city]);

  return (
    <div className="App">
    <Container>
                <SearchForm getCity={getCity} />

                <YandexMaps defState={defState} defPlacemark={defPlacemark} />
                <Stack
                    direction="horizontal"
                    gap={3}
                    style={{ alignContent: "center", justifyContent: "center" }}
                    className="mt-4"
                >
                    <CurrentLocation geoData={geoData} />

                    <GetCity
                        Cities={Cities}
                        selectCity={selectCity}
                    />
                </Stack>
                <Weather coords={defPlacemark} />
            </Container>
    </div>
  );
}

export default App;
