import {INPUT_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'
const defaultState = {
    inputValue:'记录一下美好生活',
    list:[ ]
}

export default (state=defaultState,action)=>{
    if(action.type===INPUT_VALUE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type === ADD_ITEM ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)
        newState.inputValue=''

        return newState
    }

    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data.list
        return newState
    }



    
    return state
}