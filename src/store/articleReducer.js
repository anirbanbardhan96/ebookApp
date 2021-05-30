const initialState = {
    articles:{},
    isNewPageNeeded:false
   };
    
   export const articleReducer= (state=initialState,{type, data})=> {
    switch(type){
    case "ADD_ARTICLES":
    return {...state,articles:data};
    case "ADD_PAGE":
    return {...state,
    isNewPageNeeded:true,
    ...data};
    case "ADD_NEW_PAGE":
    return {...state,
    isNewPageNeeded:false
    
    };
    
    default:
    return state;
    }
   };