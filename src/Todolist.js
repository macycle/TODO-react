import React, { Component } from 'react';
import TodolistUI from './TodolistUI'
import axios from 'axios'
import store from './store/index'
import {inputValue,addItem,deleteItem,getList,getTodolist} from './store/actionCreators'
class TodoList extends Component {
    
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(this.storeChange)
        
    }
    
    render() { 
        return ( 
            
            <TodolistUI 
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            addItem={this.addItem}
            list={this.state.list}
            deleteItem={this.deleteItem}
            />            
         );
    }

    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5f69e60108d0e90f8b2abf02/example/list')
        // .then((res)=>{
        //     const action=getList(res.data.data)
        //     store.dispatch(action)
        // })

        const action=getTodolist()
        store.dispatch(action)
    }

    changeInputValue=(e)=>{
        const action=inputValue(e)
        store.dispatch(action)
    }

    addItem=()=>{
        const action=addItem()
        store.dispatch(action)         
    }

    deleteItem=(index)=>{
        const action=deleteItem(index)
        store.dispatch(action)
    }

    storeChange=()=>{
        this.setState(store.getState())
    }
}
 
export default TodoList;