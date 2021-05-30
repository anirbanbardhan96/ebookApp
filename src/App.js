import React, { Component } from 'react';
import './index.css';
import ArticlesComponent from './components/ArticlesComponent.jsx';
import { addPage,handleAddPage,toMainPage } from './actions/action';
import { connect } from 'react-redux';
import NewPage from './components/NewPage.jsx'
 
 class App extends Component {
constructor(){
 super();
 this.state={
 isNewPageNeeded:false
 }
}
 addPage=()=>{
 this.props.addPage();
}
 handleAddPage=(bookObj)=>{
 this.props.handleAddPage(bookObj);
 }
 toMainPage=()=>{
   this.props.toMainPage();
 }
 
 render() {
 return (
 <div className="App">
 
 <div className="Main-header"><h3 >Articles App</h3></div> 
 <main className="App-Body">
 <span>
 <ArticlesComponent />
 </span>
 </main>
 <footer>
 {this.props.isNewPageNeeded?
 <NewPage handleAddPage={this.handleAddPage} toMainPage={this.toMainPage}/>
 :
 <button onClick={this.addPage}>Add New Page</button>}
 </footer>
 </div>
 )
 }
}
 
const mapStateToProps = (state) => {
 return {
 isNewPageNeeded: state.articleReducer.isNewPageNeeded
 }
}
const mapDispatchToProps = dispatch => ({
 addPage: () => dispatch(addPage),
 handleAddPage:(bookObj)=>dispatch(handleAddPage(bookObj)),
 toMainPage:()=>dispatch(toMainPage)
});


 
export default connect(mapStateToProps,mapDispatchToProps)(App);