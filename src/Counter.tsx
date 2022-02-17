import React from 'react';
import {Button, TextField} from '@material-ui/core';
import Stack from '@mui/material/Stack'
import {StateType} from './state/counter-reduser';

type CounterPropsType = {
    state: StateType
    incValue: () => void
    resetCounter: () => void
}


export function Counter(props: CounterPropsType) {

    const counterValue = (state: StateType) => {
        if (
            state.value === 0 &&
            state.startValue === 0 &&
            state.maxValue === 0 &&
            state.maxValueFromInput === 0 &&
            state.startValueFromInput === 0
        ) return 'enter Values and press Set'

        else if (
            state.startValueFromInput < 0 ||
            state.maxValueFromInput < 0 ||
            state.startValueFromInput >= state.maxValueFromInput
        ) return 'Incorrect value'

        else if (
            state.startValue !== state.startValueFromInput ||
            state.maxValue !== state.maxValueFromInput
        ) return 'enter Values and press Set'

        else return state.value
    }


    const counterError = (state: StateType) => {
        if (
            state.value === 0 &&
            state.startValue === 0 &&
            state.maxValue === 0 &&
            state.maxValueFromInput === 0 &&
            state.startValueFromInput === 0
        ) return false

        else if (
            state.startValueFromInput < 0 ||
            state.maxValueFromInput < 0 ||
            state.startValueFromInput >= state.maxValueFromInput
        ) return true

        else if (
            state.startValue !== state.startValueFromInput ||
            state.maxValue !== state.maxValueFromInput
        ) return false

        else return state.value === state.maxValue;
    }

    const disabledIncButton = (
        props.state.value === props.state.maxValue ||
        props.state.startValue !== props.state.startValueFromInput ||
        props.state.maxValue !== props.state.maxValueFromInput
    )

    return <div>

        <TextField variant="outlined"
                   value={counterValue(props.state)}
                   error={counterError(props.state)}
                   size={'small'}
                   margin={'dense'}
                   label="counter"
        />

        <Stack spacing={1} direction="row">

            <Button variant="contained"
                    color="primary"
                    size="small"
                    disabled={disabledIncButton}
                    onClick={() => props.incValue()}
            >
                inc
            </Button>

            <Button variant="contained"
                    color="primary"
                    size="small"
                    disabled={props.state.value === props.state.startValue}
                    onClick={() => props.resetCounter()}>reset
            </Button>

        </Stack>

    </div>

}