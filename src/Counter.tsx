import React, {useState} from 'react';
import {Tablo} from './Tablo';
import {Buttons} from './Buttons';




export function Counter() {

    let [value, setValue] = useState(0)

    function addValue() {setValue(value + 1)}
    function resetValue() {setValue(0)}

    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

    function incMaxValue() {setMaxValue(maxValue + 1)}
    function decMaxValue() {setMaxValue(maxValue - 1)}
    function incStartValue() {setStartValue(startValue + 1)}
    function decStartValue() {setStartValue(startValue - 1)}
    function setSetValue() { setValue(startValue)}

    return (
        <div className="counter">
            <Tablo value={value} maxValue={maxValue}/>
            <Buttons addValue={addValue} resetValue={resetValue} value={value} maxValue={maxValue}/>

            <div className="setCounter">
                <div className={'setTablo'}>
                    <div>
                        <span>max value</span>
                        <span><button className={'button'} onClick={incMaxValue}>+</button></span>
                        <span><button className={'button'} onClick={decMaxValue}>-</button></span>
                        <span>{maxValue}</span>
                    </div>
                    <div>
                        <span>start value</span>
                        <span><button className={'button'} onClick={incStartValue}>+</button></span>
                        <span><button className={'button'} onClick={decStartValue}>-</button></span>
                        <span>{startValue}</span>
                    </div>
                </div>
                <button className={'button'} onClick={setSetValue}>set</button>
            </div>
        </div>


    )
}
