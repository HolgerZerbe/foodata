const initialState = {
    product:{ id: 0, EAN: [], hersteller : null, productname: null, productGroup: null, kohlenhydrate : null, fett: null, gesaettigte_Fettsaeuren: Number, natrium: null , protein: null, ballaststoffe: null,obstGemueseNuesseAnteil: null },
    ArrayOfFoundProducts: []
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