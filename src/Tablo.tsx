import React from 'react';
import './App.css';
type clicsType = {
    value: number,
    maxValue: number
}

export function Tablo(props: clicsType) {
    return (
        <div className={props.value === props.maxValue ? "disabled" : "tablo"}>{props.value}</div>
    )
}