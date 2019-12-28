import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  render() {
    // let titles = ['Pull request','Issues','Maketplace','Explore'];
    // let list_items = [];
    // titles.forEach((v,i)=>list_items.push(<li key={i}>{v}</li>))
    let is_boy = true
    let hefen = {
      name : "小李",
      price : 100
    };
    const fn = function(msg){
      return "..........."+msg+"..........."
    }
    return (
      // <div>
      //   <ul>
      //     <li>Pull request</li>
      //     <li>Issues</li>
      //     <li>Maketplace</li>
      //     <li>Explore</li>
      //   </ul>
      // </div>
      // <div>
      //   <ul>
      //     {
      //       // titles.forEach((v,i)=><li key={i}>{v}</li>)
      //       // titles.map((v,i)=><li key={i}>{v}</li>)
      //       list_items
      //     }
      //   </ul>
      // </div>
      <div>
        {/* 普通字符串 */}
        <h1>{"我是帅哥"}</h1>
        {/* 算数表达式 */}
        <h1>1+1={1+1}</h1>
        {/* 三元表达式 */}
        {
          is_boy?"男":"女"
        }
        <br/>
        {/* 渲染对象 */}
        {
          hefen.price
        }
        <br/>
        {/* 执行函数 */}
        {
          fn("天气好热啊")
        }
      </div>
    )
  }
}
