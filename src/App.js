import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { get } from './request.js'
import DanDan from './child.js'
import _ from 'lodash'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list:[]
    }
  }
  componentDidMount(){   //这个周期发送请求
    get('https://easy-mock.com/mock/5a0128df7481a94dbc06c3c3/example/api/chuckie',{})
    .then((data) =>{      //then：promise 回调
      //console.log(data)
      this.setState({
        list:data.data
      });
    });
  }
  renderDandan(){
    return this.state.list.map((item) =>(
      <div key={item.id} style={{ color:'#000' }}> 
        <span>{item.title}</span>
        <span style={{ color:'#ccc' }} onClick={() => this.deleteDandan(item.id)}>删除</span>
      </div>
    ))
  }
  deleteDandan(id){
    const { list } = this.state;
    const array = list.filter((item) =>item.id !==id);
    this.setState({
      list:array
    });
  }
  changeBackgroud(id){
        const { list } = this.state;
        const newList = list.map((item) => {
            const object = _.cloneDeep(item);//深拷贝，防止引用底层被改变
            object.select = false;//先把所有对象都不选中
            if(item.id === id){//如果循环的ID等于传过来的ID 也就是点击了谁
                object.select = true;//把这个对象的select改变为true
            }
            return object;//循环返回对象
        })
        this.setState({
            list:newList
        })
    }
  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <DanDan list={this.state.list} 
        deleteDandan={(id) => this.deleteDandan(id)}  
        changeBackgroud={(id) => this.changeBackgroud(id)}/>   
      </div>
    );
  }
}

export default App;
