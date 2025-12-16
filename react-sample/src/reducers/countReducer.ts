type ActionType = {
    "type": "INCREMENT",
    "payload": number
} | {
    "type": "DECREMENT"
} |
{
    "type": "RESET"
}

type StateType = {
    count: number
}

export default function countReducer(state:StateType, action: ActionType) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            } 
        default:
            return state;
    }
}