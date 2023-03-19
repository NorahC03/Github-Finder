const reducer=(state,action)=>{
switch(action.type){
    case 'GET_USER':
        return{
        ...state,
        result:action.payload,
        loading:false
        }
    case 'SET_LOADING':
        return{
            ...state,
            loading:true
        }
    case 'CLEAR_USER':
        return {
            ...state,
            result:[]
        }
    case 'SET-USER':
        return {
            ...state,
            user:action.payload,
            loading:false
        }

    default: return state
}
}
export default reducer;