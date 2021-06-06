import React from 'react';
import './App.css';

type ButtonsPropsType = {
    addValue: () => void
    resetValue: () => void
    value: number
    maxValue: number
}

export function Buttons(props: ButtonsPropsType) {

    return (
        <div className="buttons">

            <button className={'button'}
                    disabled={props.value === props.maxValue}
                    onClick={() => {
                        props.addValue()
                    }}>inc
            </button>

            <button className={'button'}
                    disabled={props.value === 0}
                    onClick={() => {
                        props.resetValue()
                    }}>reset
            </button>
        </div>
    )
}