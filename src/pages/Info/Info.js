import React, { useState, useEffect } from "react";
import Chart from "../../components/Chart/Chart";

import withData from "../../components/hoc-helpers/withData";
import ApiService from "../../Services/ApiService";
import { ButtonWrap, Button } from "../../components/Button/Button";
import Spinner from "./../../components/Spinner/Spinner";

/* import "./../../components/Chart/Chart.css" */

const apiService = new ApiService();

const Loading = () => {
    return (
        <div className="chart__loading">
            <Spinner />
        </div>
    );
};

const InfoBtn = ({ data, setPeriod }) => {
    let elem = [];

    for (let key in data) {
        elem.push(
            <Button
                className="chart__btn"
                key={key}
                onClick={(e) => {
                    setPeriod(key);
                }}
                id={key}
            >
                {data[key]}
            </Button>
        );
    }

    return (
        <React.Fragment>
            <ButtonWrap
                activeElem={0}
                activeClass="button_active"
                className="chart__btn-wrap"
            >
                {elem}
            </ButtonWrap>
        </React.Fragment>
    );
};

const Info = ({ id }) => {
    const [period, setPeriod] = useState("m1");

    const ChartWithData = withData(
        Chart,
        () => {
            return apiService.getHistory(id, period);
        },
        Loading
    );

    return (
        <div className="chart container">
            <ChartWithData id={id} />

            <InfoBtn data={apiService._apiPeriod} setPeriod={setPeriod} />
        </div>
    );
};

export default Info;
