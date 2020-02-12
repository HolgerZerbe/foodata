export const loadProduct = (EAN) => async dispatch => {

    const url = '/product?ean='+EAN
    const result = await fetch(url);
    const data = await result.json();
    
    console.log(result)
    console.log(data)

    dispatch({
        type: 'LOAD_PRODUCT',
        value: data
    })
}

export const searchProduct = (string) => async dispatch => {

    const url = '/search?q='+string
    const result = await fetch(url);
    const data = await result.json();
    
    console.log(result)
    console.log(data)

    dispatch({
        type: 'SEARCH_PRODUCT',
        value: data
    })
}

export const searchById = (id) => async dispatch => {

    const url = '/searchId?id='+id
    const result = await fetch(url);
    const data = await result.json();
    
    console.log(result)
    console.log(data)

    dispatch({
        type: 'SEARCH_BY_ID',
        value: data
    })
}

export const setProductFoundToFalse = () => async dispatch =>{

    dispatch({
        type: 'SET_PRODUCTFOUND_TO_FALSE',
        value: false
    })
}

export const emptyArrayOfFoundProducts = () => async dispatch =>{

    dispatch({
        type: 'EMPTY_ARRAYOFFOUNDPRODUCTS',
        value: []
    })
}