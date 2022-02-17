import React, {ChangeEvent} from 'react';
import {Button, TextField} from '@material-ui/core';
import {StateType} from './state/counter-reduser';


type SetCounterPropsType = {
    onChangeMaxValue: (maxValue: number) => void
    onChangeStartValue: (startValue: number) => void
    setCounter: () => void
    state: StateType
}

export function SetCounter(props: SetCounterPropsType) {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = Number(e.target.value) //перевод строки в число
        props.onChangeMaxValue(maxValue)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = Number(e.target.value) //перевод строки в число
        props.onChangeStartValue(startValue)
    }

    const disabledSetButton = (state: StateType) => {
        if (
            (state.maxValueFromInput === state.maxValue &&
                state.startValueFromInput === state.startValue) ||
            state.maxValueFromInput <= state.startValueFromInput ||
            state.startValueFromInput < 0 ||
            state.maxValueFromInput < 0
        ) return true
    }

    const errorMaxValue = (state: StateType) => {
        if (
            state.maxValue === 0 &&
            state.maxValueFromInput === 0
        ) return null

        else if (
            state.maxValueFromInput < 0
        ) return 'max value should be > 0'

        else if (
            state.maxValueFromInput <= state.startValueFromInput
        ) return 'max value should be > start value'
    }

    const errorStartValue = (state: StateType) => {
        if (
            state.startValue === 0 &&
            state.startValueFromInput === 0
        ) return null

        else if (
            state.startValueFromInput < 0
        ) return 'start value should be > 0'

        else if (
            state.maxValueFromInput <= state.startValueFromInput &&
            state.startValueFromInput !== 0
        ) return 'start value should be < max value'
    }

    return <div>

        <div>
            <TextField label="max value"
                       variant={'outlined'}
                       value={props.state.maxValueFromInput}
                       type="number"
                       onChange={onChangeMaxValue}
                       size={'small'}
                       margin={'dense'}
                       error={!!errorMaxValue(props.state)}
                       helperText={errorMaxValue(props.state)}
            />
        </div>
        <div>
            <TextField label="start value"
                       variant={'outlined'}
                       type="number"
                       value={props.state.startValueFromInput}
                       onChange={onChangeStartValue}
                       size={'small'}
                       margin={'dense'}
                       error={!!errorStartValue(props.state)}
                       helperText={errorStartValue(props.state)}
            />
        </div>
        <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={disabledSetButton(props.state)}
            onClick={() => props.setCounter()}
        >set
        </Button>
    </div>
}
