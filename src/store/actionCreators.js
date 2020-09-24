import {INPUT_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'
import axios from 'axios'

export const inputValue=(e)=>(
    {
        type:INPUT_VALUE,
        value:e.target.value
    }
)

export const addItem=()=>({
    type:ADD_ITEM
})

export const deleteItem=(index)=>({
    type:DELETE_ITEM,
    index
})


export const getList=(data)=>({
    type:GET_LIST,
    data
})

export const getTodolist=()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5f69e60108d0e90f8b2abf02/example/list')
        .then((res)=>{

            const data=res.data.data
            const action=getList(data)
            dispatch(action)
            //const action=getList(res.data.data)
            //store.dispatch(action)
        })
    }
}