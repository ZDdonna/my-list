import React, { Component } from 'react';


export default class DanDan extends Component {
    render(){
        return(
            <div>
                {
                    this.props.list.map((item) =>(
                        <div onClick={() => this.props.changeBackgroud(item.id)} key={item.id} style={{ color:'#c3c3c3',background:item.select?'#000':'none'}}>
                            <span>{item.title}</span>
                            <span onClick={(e) =>{
                                e.stopPropagation();
                                this.props.deleteDandan(item.id)
                            }}>删除</span>
                        </div>
                    ))
                }
            </div>
        );
    }  
}