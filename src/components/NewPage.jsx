import React, { Component } from 'react';
 
class NewPage extends Component {
 constructor(props) {
 super(props);
 this.addContent = this.addContent.bind(this);
 }

 toMainPage=()=>{
     this.props.toMainPage();
 }
addContent(e) {
 // Prevent the default behaviour of form submit
 e.preventDefault();
 
 // Get the value of the comment box
 // and make sure it not some empty strings
 const content = e.target.elements.content.value.trim();
 const title = e.target.elements.title.value.trim();
 
 // Make sure name and comment boxes are filled
 if (title && content) {
 const bookObj = { title, content };
 
 this.props.handleAddPage(bookObj);
 
 // Clear input fields
 e.target.elements.content.value = '';
 e.target.elements.title.value = '';
 }
}
 render() {
 return (
 <div>
 <form onSubmit={this.addContent}>
 <div className="field">
 <div className="control">
 <input type="text" className="input" name="title" placeholder="Book Title"/>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <textarea className="textarea" name="content" placeholder="Add Content"
 style={{width:'750px'}}></textarea>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <button className="button is-primary">Submit</button>
 <button className="go back" onClick={this.toMainPage}>Go Back to Previous Section</button>
 </div>
 </div>
 </form>
 </div>
 );
 }
}
 
export default NewPage;