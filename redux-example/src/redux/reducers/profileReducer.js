
// dispatch({type:'UPDATE_PIC', payload: 'smiley.png'});
// dispatch({type:'UPDATE_NAME', payload: 'Banu C'});
export default function profileReducer(state = 
                            {"avatar": "banu.png",
                                 "name": "Banu Prakash"}, action) {
    switch(action.type) {
        case 'UPDATE_PIC':
            return {
                avatar: action.payload,
                name: state.name
            }
        case 'UPDATE_NAME':
            return {
                avatar: state.avatar,
                name: action.payload
            }
        default:
            return state;
    }

}