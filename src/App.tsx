import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SetCounter} from './SetCounter';
import {Grid, Paper} from '@material-ui/core';
import {AppRootStateType} from './state/store';
import {useDispatch, useSelector} from 'react-redux';
import {
    StateType,
    incValueAC,
    resetCounterAC,
    onChangeMaxValueAC,
    onChangeStartValueAC,
    setCounterAC, setSetCounterFromLocalStorageAC
} from './state/counter-reduser';



function App() {
    const state = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const incValue = useCallback(function (){
        dispatch(incValueAC())
    }, [])

    const resetCounter = useCallback(function (){
        dispatch(resetCounterAC())
    },[])

    const onChangeMaxValue = useCallback(function (value: number){
        dispatch(onChangeMaxValueAC(value))
    },[])

    const onChangeStartValue = useCallback(function (value: number){
        dispatch(onChangeStartValueAC(value))
    },[])

    const setCounter = useCallback(function (){
        dispatch(setCounterAC())
    }, [])

    const setSetCounterFromLocalStorage = useCallback(function (startValueFromLS: number, maxValueFromLS: number){
        dispatch(setSetCounterFromLocalStorageAC(startValueFromLS, maxValueFromLS))
    },[])

    useEffect(() => {
        let startValueFromInput = localStorage.getItem('startValueFromInput')
        let maxValueFromInput = localStorage.getItem('maxValueFromInput')

        if (startValueFromInput && maxValueFromInput) {
            let newStartValueFromInput = (JSON.parse(startValueFromInput))
            let newMaxValueFromInput = (JSON.parse(maxValueFromInput))
            setSetCounterFromLocalStorage(newStartValueFromInput, newMaxValueFromInput)
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