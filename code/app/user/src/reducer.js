    const initialState = {
        product:{ id: 0, EAN: [], productname: null, hersteller : null, handelskette : null, productGroup: null, brennwertKCAL: null, kohlenhydrate : null, fett: null, gesaettigte_Fettsaeuren: null, natrium: null , protein: null, ballaststoffe: null,obstGemueseNuesseAnteil: null },
        productFound: 0,
        arrayOfFoundProducts: [],
        error: null,
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
                productFound: 1
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
                    productFound: 1
            }
            
        default: 
            return state;
    }
}

export default reducer;