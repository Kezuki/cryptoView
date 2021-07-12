import React, { useEffect, useState } from "react";
import "./Table.css";
import TableBody from "../TableBody/TableBody";
import withData from "../hoc-helpers/withData";

import ApiService from "../../Services/ApiService";

const apiService = new ApiService();

const TableBodyWithData = withData(TableBody, apiService.getResource);

const Table = () => {
    const [reverse, setReverse] = useState(false);
    const [row, setRow] = useState("rank");

    return (
        <table className="table">
            <thead className="table__head">
                <Row
                    setReverse={setReverse}
                    setRow={setRow}
                    row={row}
                    reverse={reverse}
                />
            </thead>
            <TableBodyWithData row={row} reverse={reverse} />
        </table>
    );
};

const Row = ({ setReverse, setRow, reverse, row }) => {
    const data = [
        { name: "rank", label: "Rank" },
        { name: "name", label: "Name" },
        { name: "priceUsd", label: "Price" },
        { name: "supply", label: "Supply" },
        { name: "marketCapUsd", label: "Market Cap" },
        { name: "changePercent24Hr", label: "Change (24Hr)" },
    ];

    const rowData = data.map(({ name, label }) => {
        let clazz =
            name === row
                ? (reverse ? " table__th_rev" : "") + " table__th_active"
                : "";

        return (
            <th
                className={"table__th" + clazz}
                key={name}
                onClick={() => {
                    if (name === row) {
                        setReverse((s) => !s);
                    }
                    setRow(name);
                }}
            >
                {label}
            </th>
        );
    });

    return <tr>{rowData}</tr>;
};

export default Table;
