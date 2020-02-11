const initialState = {
        productFound: false,
        product:{ id: 0, EAN: [], productname: null, hersteller : null, handelskette : null, productGroup: null, brennwertKCAL: null, kohlenhydrate : null, fett: null, gesaettigte_Fettsaeuren: null, natrium: null , protein: null, ballaststoffe: null, obstGemueseNuesseAnteil: null },
        arrayOfFoundProducts: [],
        error: 0,
        message: null 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCT':
        console.log(action.value.error)
        console.log(action.value.product)

        return {product: action.value.product,
                error: action.value.error,
                message: action.value.message,
                arrayOfFoundProducts:[],
                productFound: true
        }

        case 'SEARCH_PRODUCT':

        return {arrayOfFoundProducts: action.value.products,
                error: action.value.error,
                message: action.value.message

        }

        case 'SEARCH_BY_ID':

            return {product: action.value.product,
                    error: action.value.error,
                    message: action.value.message,
                    arrayOfFoundProducts:[],
                    productFound: true
            }
            
        case 'SET_PRODUCTFOUND_TO_FALSE':
            return {productFound: action.value}

        default: 
            return state;
    }
}

export default reducer;