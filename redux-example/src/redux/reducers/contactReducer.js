
// dispatch({type:'ADD_CONTACT', payload: {"email": "roger.gmail.com", name: "Roger"}})


export default function contactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            // create a new array and push paylaod to the new array
            return [...state, action.payload];
        case 'REMOVE_CONTACT':
            // delete by email
            return state.filter(contact => contact.email !== action.payload);
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}