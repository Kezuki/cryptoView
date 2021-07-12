import React from "react";

import { withRouter } from "react-router-dom";
import ServiceFunctions from "../../Services/ServiceFunctions";

const serviceFunctions = new ServiceFunctions();
const { round, formatNum } = serviceFunctions;


const TableItem = ({ data, history }) => {
  return (
    <tr
      onClick={() => {
        history.push(`/info/${data.id}`);
      }}
    >
      <td>{data.rank}</td>
      <td className="table__td-name">
        <div
          className="table__td-icon"
          style={{
            backgroundImage: `url("https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png")`,
          }}
        ></div>
        <div className="table__td-text">
          <span>{data.name}</span>
          <span>{data.symbol}</span>
        </div>
      </td>
      <td>{`$ ${round(data.priceUsd, 2)}`}</td>
      <td>{formatNum(round(data.supply, 0))}</td>
      <td>{formatNum(round(data.marketCapUsd, 0))}</td>
      <td>{`${round(data.changePercent24Hr, 2)}%`}</td>
    </tr>
  );
};

export default withRouter(TableItem);
