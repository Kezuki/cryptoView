import React, { useState, useEffect } from "react";
import "./Button.css";

const ButtonWrap = ({
    activeClass,
    children,
    className,
    activeElem,
    stateItem = "",
}) => {
    const [active, setActive] = useState(stateItem);
    let elements;

    useEffect(() => {
        if (stateItem) {
            setActive(stateItem);
        }
    });

    elements = React.Children.map(children, (el, i) => {
        let activeBool = false;

        if (activeElem === i && !active) {
            activeBool = true;
        }

        if ((active && el.props.id == active) || el.props.active) {
            activeBool = true;
        }

        if (active && el.props.active && el.props.id != active) {
            activeBool = false;
        }

        /* if ((active && el.props.children == active) || el.props.active) {
            activeBool = true;
        }

        if (active && el.props.active && el.props.children != active) {
            activeBool = false;
        } */

        return React.cloneElement(el, {
            ...el.props,
            onClick: (id) => {
                setActive(id);
                el.props.onClick(el);
            },
            active: activeBool,
            activeClass: activeClass,
        });
    });

    return <div className={className}>{elements}</div>;
};

const Button = ({
    onClick,
    activeClass,
    children,
    active,
    id,
    className = "",
}) => {
    let clazz = active ? activeClass : "";

    return (
        <button
            className={`button ${clazz} ${className}`}
            type="button"
            onClick={() => {
                onClick(id);
            }}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    active: false,
    onClick: () => {},
};

export { ButtonWrap, Button };
