import * as React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "../styles/YMap.css";

const YandexMaps = (props) => {
    return (
        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
            <Map state={props.defState} width="100%" height="400px">
                <Placemark geometry={props.defPlacemark} />
            </Map>
        </YMaps>
    );
};

export default YandexMaps;
