import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SetCounter} from './SetCounter';
import {Grid, Paper} from '@material-ui/core';

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

    const incValue = () => {
        setState({...state, value: state.value + 1})
    }

    const resetCounter = () => {
        setState({...state, value: state.startValue})
    }

    const onChangeMaxValue = (maxValueFromInput: number) => {
        setState({...state, maxValueFromInput: maxValueFromInput})
    }

    const onChangeStartValue = (startValueFromInput: number) => {
        setState({...state, startValueFromInput: startValueFromInput})
    }

    const setCounter = () => {
        setState(
            {
                ...state,
                value: state.startValueFromInput,
                startValue: state.startValueFromInput,
                maxValue: state.maxValueFromInput
            }
        )
    }

    useEffect(() => {
        let startValueFromInput = localStorage.getItem('startValueFromInput')
        let maxValueFromInput = localStorage.getItem('maxValueFromInput')

        if (startValueFromInput && maxValueFromInput) {
            let newStartValueFromInput = (JSON.parse(startValueFromInput))
            let newMaxValueFromInput = (JSON.parse(maxValueFromInput))
            setState({
                ...state,
                startValueFromInput: newStartValueFromInput,
                maxValueFromInput: newMaxValueFromInput
            })
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('startValueFromInput', JSON.stringify(state.startValueFromInput))
    }, [state.startValueFromInput])

    useEffect(() => {
        localStorage.setItem('maxValueFromInput', JSON.stringify(state.maxValueFromInput))
    }, [state.maxValueFromInput])

    return <div >

            <Grid container
                  style={{padding: '20px'}}
                  spacing={2}
                  justifyContent={'center'}
            >
                <Grid item>
                    <Paper style={{padding: '10px'}}>
                        <SetCounter
                            state={state}
                            onChangeMaxValue={onChangeMaxValue}
                            onChangeStartValue={onChangeStartValue}
                            setCounter={setCounter}
                        />
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper style={{padding: '10px'}}>
                        <Counter
                            state={state}
                            incValue={incValue}
                            resetCounter={resetCounter}
                        />
                    </Paper>
                </Grid>
            </Grid>
    </div>

}


export default App;