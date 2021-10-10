import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SetCounter} from './SetCounter';
import {Box} from '@mui/material';
import {Paper} from '@material-ui/core';

export type StateType = {
    startValueFromInput: number,
    maxValueFromInput: number,
    startValue: number,
    maxValue: number
    value: number
}

function App() {
    const [state, setState] = useState<StateType>(
        {
            startValueFromInput: 0,
            maxValueFromInput: 0,

            startValue: 0,
            maxValue: 0,
            value: 0
        }
    )

    function incValue() {
        setState({...state, value: state.value + 1})
    }

    function resetCounter() {
        setState({...state, value: state.startValue})
    }

    const onChangeMaxValue = (maxValueFromInput: number) => {
        setState({...state, maxValueFromInput: maxValueFromInput})
    }

    const onChangeStartValue = (startValueFromInput: number) => {
        setState({...state, startValueFromInput: startValueFromInput})
    }

    function setCounter() {
        setState(
            {
                ...state,
                value: state.startValueFromInput,
                startValue: state.startValueFromInput,
                maxValue: state.maxValueFromInput
            }
        )
    }


    return <div className="app-wrapper">
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                },
            }}
        >
            <Paper style={{padding: '10px'}}>
                <SetCounter
                    state={state}
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeStartValue={onChangeStartValue}
                    setCounter={setCounter}
                />
            </Paper>
            <Paper style={{padding: '10px'}}>
                <Counter
                    state={state}
                    incValue={incValue}
                    resetCounter={resetCounter}
                />
            </Paper>
        </Box>

    </div>

}


export default App;