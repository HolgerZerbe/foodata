export const loadProduct = (EAN) => async dispatch => {

    const url = 'product/'+EAN
    const result = await fetch(url);
    const data = await result.json(); 

    dispatch({
        type: 'LOAD_PRODUCT',
        value: data
    })
}

export const deleteComment = (id) => async dispatch => {

    const url = 'comments/'+id
    const result = await fetch(url, {
        method: 'DELETE'});
    const data = await result.json(); 
    
    dispatch({
        type: 'DELETE_COMMENT',
        value: data
    })
}
  
export const postComment = (body) => async dispatch => {

    const result = await fetch('comments', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
          },
        body: JSON.stringify(body)
    });
    const data = await result.json(); 
    
    dispatch({
        type: 'POST_COMMENT',
        value: data
    })
}