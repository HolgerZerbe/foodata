import config from "./config.json";



export const loadProduct = (EAN) => async dispatch => {
    try {
        const url = config.host+'/product?ean='+EAN
        const result = await fetch(url);
        const data = await result.json();
        
        console.log(result)
        console.log(data)
    
        dispatch({
            type: 'LOAD_PRODUCT',
            value: data
        })
    }
    catch(e) {
        dispatch({
            type: 'LOAD_PRODUCT',
            value: {error: 503,
                    productFound : false}
        })
        
    }
}

export const searchProduct = (string) => async dispatch => {
    try {
        const url = config.host+'/search?q='+string
        const result = await fetch(url);
        const data = await result.json();

        // console.log(result)
        // console.log(data)

        dispatch({
            type: 'SEARCH_PRODUCT',
            value: data
        })
    }
    catch(e) {
        dispatch({
            type: 'LOAD_PRODUCT',
            value: {error: 503,
                    productFound : false}
        })
        
    }
}

export const searchById = (id) => async dispatch => {
    try {
        const url = config.host+'/searchId?id='+id
        const result = await fetch(url);
        const data = await result.json();
        
        // console.log(result)
        // console.log(data)

        dispatch({
            type: 'SEARCH_BY_ID',
            value: data
        })
    }
    catch(e) {
        dispatch({
            type: 'LOAD_PRODUCT',
            value: {error: 503,
                    productFound : false}
        })
        
    }
}

export const sendAwayToCalculate = (product) => async dispatch => {

    dispatch({
        type: 'SEND_AWAY_TO_CALCULATE',
        value: product
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