import React from "react";
import { Line } from "react-chartjs-2";

import ServiceFunctions from "../../Services/ServiceFunctions";
import "./Chart.css";

const { round, capitalizeFirstLetter } = new ServiceFunctions();

const Chart = ({ id, data }) => {
    const NUM = 80; //number of elements along the x-axis

    //shrink the array and return a new one
    const time = data.filter((el, i) => {
        return (
            i % Math.floor(data.length / NUM) == 0 ||
            i == 0 ||
            i == data.length - 1
        );
    });

    const getCoordData = (obj, name) => {
        return obj.map((el) => {
            return el[name];
        });
    };

    const formatData = (array) => {
        return array.map((el) => {
            let arr = el.split("T");

            return arr[0] + " " + arr[1].slice(0, 5);
        });
    };

    const formatCost = (array) => {
        return array.map((el) => {
            /* return round(el, 2); */
            return el;
        });
    };

    const settings = {
        labels: formatData(getCoordData(time, "date")),
        datasets: [
            {
                label: capitalizeFirstLetter(id),
                data: formatCost(getCoordData(time, "priceUsd")),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };

    return <Line data={settings} />;
};

export default Chart;
