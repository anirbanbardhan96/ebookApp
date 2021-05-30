import React, { Component } from 'react';
 
export default class ShowPage extends Component{
 constructor(props){
 super(props);
 }
 
 render(){
 const {articles,id}=this.props;
 return(
 <div>
 {
 articles.map((article,index)=>
 article.title===id?
 <div>{article.content}</div>:"") 
 }
 
 
 </div>
 )
 }
}