import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/action';
import ArticleBook from './ArticleBook.jsx'
 
class ArticlesComponent extends Component {
 
 componentDidMount(){
 this.props.getArticles();
 }
 
 render() {
 return (
 <div>
 <ArticleBook articles={ Object.values(this.props.articles)}/> 
 </div>
 )
 }
}
 
const mapStateToProps = (state) => ({
 articles: state.articleReducer.articles
})
 
const mapDispatchToProps = dispatch => ({
 getArticles: () => dispatch(getArticles)
});


 
export default connect(mapStateToProps,mapDispatchToProps)(ArticlesComponent);