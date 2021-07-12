import React from "react";
import Select, { components } from "react-select";

import "./Select.css";

const { Option } = components;
const IconOption = (props) => {
    return (
        <Option {...props}>
            <img
                src={`https://assets.coincap.io/assets/icons/${props.data.value}@2x.png`}
                style={{ width: 36 }}
                alt={props.data.label}
            />
            {props.data.label}
        </Option>
    );
};

const MySelect = ({ dataForMySelect, onSelected, selected, id }) => {
    const selectedElem = dataForMySelect.filter((el) => {
        
        return el.value === selected.toLowerCase();
    });

    return (
        <Select
            onChange={(e) => {
                onSelected(e.value.toUpperCase(), id);
            }}
            options={dataForMySelect}
            value={selectedElem}
            components={{ Option: IconOption }}
            className="react-select-container"
            classNamePrefix="react-select"
        />
    );
};

export default MySelect;
