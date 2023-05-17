import * as React from "react";
import { Form } from "react-bootstrap";

const CheckDays = (props) => {
    return (
        <Form className="mt-4">
            <Form.Check
                checked={props.oneDayForecast}
                onChange={props.days}
                inline
                label="Погода на сегодня"
                name="group1"
                type="radio"
                id={`day-1-radio`}
            />
            <Form.Check
                checked={props.fiveDayForecast}
                onChange={props.days}
                inline
                label="Погода на 5 дней"
                name="group1"
                type="radio"
                id={`days-5-radio`}
            />
        </Form>
    );
};

export default CheckDays;
