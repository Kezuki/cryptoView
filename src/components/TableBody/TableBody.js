import React, { useState } from "react";

import TableItem from "../TableItem/TableItem";

import ServiceFunctions from "../../Services/ServiceFunctions";

const serviceFunctions = new ServiceFunctions();
const mySort = serviceFunctions.mySort;

const TableBody = ({ row, reverse, data }) => {
    const [dataState, setDataState] = useState(data);

    mySort(dataState, row, reverse);

    const items = dataState.map((el) => {
        return <TableItem key={el.id} data={el} />;
    });

    return <tbody className="table__body">{items}</tbody>;
};
export default TableBody;
