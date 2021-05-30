import React, { Component } from 'react';
import ShowPage from './ShowPage.js';
export default class ArticleBook extends Component{
 constructor() {
 super();
 this.state={
 id:"Article 1"
 }
 }
 
 handleClick=(id)=>{
 this.setState({
 id:id
 })
 
 }
 render(){
 const {articles}=this.props;
 return(
 <div>
 {
 articles.map((article,index)=>
 <div key={article.id}>
 <li><button onClick={()=>this.handleClick(article.title)} >{article.title}</button></li>
 </div>
 )}
 <ShowPage articles={articles} id={this.state.id}/> 
 </div>
 )
 }
}