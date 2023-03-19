const alertReducer=(state,action)=>{
switch(action.type){
    case 'SET-ALERT':
        return action.payload
    case 'RESET-ALERT':
        return null
    default:
        return state
    }
}
export default alertReducer;