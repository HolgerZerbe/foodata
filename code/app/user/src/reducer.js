const initialState = {
    product:{ id: 0, EAN: [], productname: null, hersteller : null, handelskette : null, productGroup: null, brennwertKCAL: null, kohlenhydrate : null, fett: null, gesaettigte_Fettsaeuren: null, natrium: null , protein: null, ballaststoffe: null,obstGemueseNuesseAnteil: null },
    arrayOfFoundProducts: [],
    error: null,
    message: null 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SCAN': 
        return {scanning: action.value.products}

        case 'LOAD_PRODUCT':

        let newProduct = action.value[0];
        console.log(newProduct)
        return {
                product: {...newProduct}
        }

        default: 
            return state;
    }
}

export default reducer;