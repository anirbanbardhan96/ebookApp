
 
export const getArticles = dispatch => {
    let url = 'http://localhost:4000/articles';

fetch(url)
.then(res => res.json())
.then((response) => {
    dispatch(addArticles(response));
})
.catch(err => { throw err });
 
}
 
export const addArticles = data => ({
 type:"ADD_ARTICLES",
 data:data
});
 
export function addPage(dispatch,data){
 dispatch({ type: 'ADD_PAGE', data:data })
 
}
export const handleAddPage=(values)=>{
 

 const URL = 'http://localhost:4000/articles'
const data = {
   "id": values.title,
   "title": values.title,
   "content": values.content
};
// Send a post request
fetch(URL, {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
        }
    })

 return{
 type: 'ADD_NEW_PAGE', data:values 
 }
 
}
export function toMainPage(dispatch,data){
    dispatch({ type: 'ADD_NEW_PAGE', data:data })
    
   }

