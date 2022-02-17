export type StateType = {
    startValueFromInput: number,
    maxValueFromInput: number,

    startValue: number
    maxValue: number
    value: number
}
type IncValueActionType = {
    type: 'INC-VALUE',
    value: number
}
type ResetCounterActionType = {
    type: 'RESET-COUNTER'
}
type SetCounterActionType = {
    type: 'SET-COUNTER'
}
type OnChangeMaxValueACType = {
    type: 'CHANGE-MAX-VALUE-FROM-INPUT', value: number
}
type OnChangeStartValueACType = {
    type: 'CHANGE-START-VALUE-FROM-INPUT', value: number
}
type setSetCounterFromLocalStorageAC = {
    type: 'SET-SET-COUNTER-FROM-LOCAL-STORAGE', startValueFromLS: number, maxValueFromLS: number
}
type ActionsType = IncValueActionType | ResetCounterActionType | OnChangeMaxValueACType | OnChangeStartValueACType | SetCounterActionType | setSetCounterFromLocalStorageAC


const initialState: StateType = {
    startValueFromInput: 0,
    maxValueFromInput: 0,

    startValue: 0,
    maxValue: 0,
    value: 0,
}

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INC-VALUE': {
            return {...state, value: state.value + 1}
        }
        case 'RESET-COUNTER': {
            return {...state, value: state.startValue}
        }
        case 'CHANGE-MAX-VALUE-FROM-INPUT': {
            return {...state, maxValueFromInput: action.value}
        }
        case 'CHANGE-START-VALUE-FROM-INPUT': {
            return {...state, startValueFromInput: action.value}
        }
        case 'SET-COUNTER': {
            return {
                ...state,
                value: state.startValueFromInput,
                startValue: state.startValueFromInput,
                maxValue: state.maxValueFromInput
            }
        }
        case 'SET-SET-COUNTER-FROM-LOCAL-STORAGE': {
            return {
                ...state,
                startValueFromInput: action.startValueFromLS,
                maxValueFromInput: action.maxValueFromLS
            }
        }
        default: return state
    }
}

export const incValueAC = () => {
    return {type: 'INC-VALUE'}
}
export const resetCounterAC = () => {
    return  {type: 'RESET-COUNTER'}
}
export const onChangeMaxValueAC = (value: number): OnChangeMaxValueACType => {
    return {type: 'CHANGE-MAX-VALUE-FROM-INPUT', value}
}
export const onChangeStartValueAC = (value: number): OnChangeStartValueACType => {
    return {type: 'CHANGE-START-VALUE-FROM-INPUT', value}
}
export const setCounterAC = () => {
    return {type: 'SET-COUNTER'}
}
export const setSetCounterFromLocalStorageAC = (startValueFromLS: number, maxValueFromLS: number) => {
    return {type: 'SET-SET-COUNTER-FROM-LOCAL-STORAGE', startValueFromLS, maxValueFromLS}
}