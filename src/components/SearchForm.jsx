import * as React from "react";
import { Stack, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SearchForm = (props) => {
    return (
        <Stack direction="horizontal" gap={3}>
            <Form.Control
                type="text"
                placeholder="Введите називание города"
                className="search_field"
            />
            <Button onClick={props.getCity}>Поиск</Button>
        </Stack>
    );
};

export default SearchForm;
