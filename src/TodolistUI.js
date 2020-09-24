import React, { Component } from 'react';
import { Button ,Input ,List } from 'antd';
import './todolist.css'
import 'antd/dist/antd.css'


class TodolistUI extends Component {
    render() { 
        return (    
            <div className="container">
                    <div className="ip_btn">
                        <Input placeholder={this.props.inputValue} onChange={this.props.changeInputValue} value={this.props.inputValue}/>
                        <Button type="primary" onClick={this.props.addItem} >添加项目</Button>
                    </div> 
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={()=>{this.props.deleteItem(index)}}>
                             {item}
                            </List.Item>
                        )}
                    />
                </div>
         );
    }
    
}
 
export default TodolistUI;