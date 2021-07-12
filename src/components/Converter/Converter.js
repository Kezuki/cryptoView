import React, { useState } from "react";
import MySelect from "../../components/Select/Select";
import { ButtonWrap, Button } from "../../components/Button/Button";
import "./Converter.css";

const ConverterBlock = ({
    data: { tabs, selected, value },
    id,
    onChange,
    onSelected,
    inputDisabled,
    ...props
}) => {
    const buttons = tabs.map((el) => {
        return (
            <Button
                active={selected === el.symbol ? true : false}
                id={el.symbol}
                key={el.symbol}
                onClick={() => {
                    onSelected(el.symbol, id);
                }}
                className="converter__tab-item"
            >
                {el.symbol}
            </Button>
        );
    });

    return (
        <div className="converter__block">
            <ButtonWrap
                stateItem={selected}
                className="converter__tab"
                activeClass="converter__tab-item_active"
            >
                {buttons}
            </ButtonWrap>

            <MySelect
                {...props}
                selected={selected}
                onSelected={onSelected}
                id={id}
            />

            <div className="converter__input-box">
                <Input
                    value={value}
                    onChange={onChange}
                    id={id}
                    inputDisabled={inputDisabled}
                />
            </div>
        </div>
    );
};

const Input = ({ value, onChange, id, inputDisabled = false }) => {
    return (
        <input
            onChange={(e) => {
                onChange(e.target.value, id);
            }}
            type="number"
            min="0"
            className="converter__input"
            value={value}
            placeholder="0"
            disabled={inputDisabled}
        />
    );
};

const Converter = ({ data }) => {
    const filterByRank = (data, bool) => {
        return data.filter((el, i) => {
            if (+el.rank > 0 && +el.rank <= 6 && (i % 2 === 0) === bool) {
                return el;
            }
        });
    };

    const convertFunc = (num, v1, v2, data) => {
        if (v1 === v2) {
            return 1;
        }

        const elems = data.filter((el) => {
            return el.symbol == v1 || el.symbol == v2;
        });
        if (elems[0].symbol !== v1) {
            elems.reverse();
        }

        const ratio = elems[0].priceUsd / elems[1].priceUsd;

        return ratio * num;
    };

    const [converterState, setConverterState] = useState([
        {
            tabs: filterByRank(data, true),
            selected: "BTC",
            selectedItem: "",
            value: 1,
        },

        {
            tabs: filterByRank(data, false),
            selected: "ETH",
            selectedItem: "",
            value: convertFunc(1, "BTC", "ETH", data),
        },
    ]);

    convertFunc(1, "ETH", "ETH", data);

    const onSelected = (id, ConverterBlockId) => {
        setConverterState((arr) => {
            arr[ConverterBlockId].selected = id;

            arr[1].value = convertFunc(
                arr[0].value,
                arr[0].selected,
                arr[1].selected,
                data
            );

            return [...arr];
        });
    };

    const onChange = (value, ConverterBlockId) => {
        setConverterState((arr) => {
            const newArr = arr.map((el, i) => {
                if (i == ConverterBlockId) {
                    el.value = value;
                } else {
                    el.value = convertFunc(
                        value,
                        arr[ConverterBlockId].selected,
                        arr[i].selected,
                        data
                    );
                }

                return el;
            });

            return [...newArr];
        });
    };

    const arrReverse = () => {
        setConverterState((arr) => {
            const val2 = arr[1].value;
            arr.reverse();
            arr[0].value = val2;
            arr[1].value = convertFunc(
                val2,
                arr[0].selected,
                arr[1].selected,
                data
            );

            return [...arr];
        });
    };

    const dataForMySelect = data.map((el, i) => {
        const obj = {};
        obj.value = el.symbol.toLowerCase();
        obj.label = el.name;
        return obj;
    });

    return (
        <div className="converter">
            <ConverterBlock
                id={0}
                onChange={onChange}
                onSelected={onSelected}
                dataForMySelect={dataForMySelect}
                data={converterState[0]}
            />

            <button
                onClick={arrReverse}
                className="converter__transfer"
            ></button>
            <ConverterBlock
                id={1}
                inputDisabled
                onChange={onChange}
                onSelected={onSelected}
                dataForMySelect={dataForMySelect}
                data={converterState[1]}
            />

            <div className="converter__info">
                {converterState[0].value +
                    " " +
                    converterState[0].selected +
                    " = " +
                    converterState[1].value +
                    " " +
                    converterState[1].selected}
            </div>
        </div>
    );
};

export default Converter;
