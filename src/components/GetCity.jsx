import * as React from "react";
import { Dropdown } from "react-bootstrap";

const GetCity = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle>Выберите город</Dropdown.Toggle>
            <Dropdown.Menu>
                {props.Cities.map((item, idx) => (
                    <Dropdown.Item key={idx} onClick={props.selectCity}>
                        {item}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default GetCity;
