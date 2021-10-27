
const initialState = { 
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')), studentData: {}, classRecord: []
};

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'LOGOUT':
            localStorage.removeItem('loggedInUser');
            return{...state, loggedInUser: ''}
        case 'LOGGED_USER':
            console.log(action.payload);
            localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
            return {...state, loggedInUser: action.payload};
        case 'FETCH_STUDENT_DATA':
            console.log(action.payload);
            return{...state, studentData: action.payload[0]};
        case 'FETCH_CLASS_RECORD':
            console.log(action.payload);
            return{...state, classRecord: action.payload};
        default:
            return state;
    }
}
export default reducer;